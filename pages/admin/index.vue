<template>
  <div>
    <Nav />
    <v-container class="admin-panel">
      <h2>Admin Panel</h2>
      <v-file-input
        label="Select image to upload"
        @change="handleFileUpload"
        ref="fileInput"
      />

      <div class="d-flex justify-space-between">
        <v-btn @click="uploadImage" :loading="loading" color="primary"
          >Upload</v-btn
        >
        <v-btn @click="openLogoutDialog" color="error">Logout</v-btn>
      </div>

      <v-container class="gallery mt-5">
        <v-row>
          <v-col v-for="image in images" :key="image.fileName" cols="12" md="4">
            <v-card>
              <v-img :src="image.signedUrl" height="200px"></v-img>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn icon @click="confirmDelete(image.fileName)">
                  <v-icon color="red">mdi-delete</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <v-snackbar
        v-model="snackbar"
        :timeout="3000"
        :color="snackbarColor"
        location="top right"
      >
        {{ snackbarMessage }}
      </v-snackbar>

      <v-dialog v-model="logoutDialog" max-width="400px">
        <v-card>
          <p class="text-center my-5 ubuntu-regular-h3">
            Are you sure you want to log out?
          </p>
          <v-card-actions class="mb-2 px-4">
            <v-btn @click="closeLogoutDialog" color="white" class="bg-black"
              >Cancel</v-btn
            >
            <v-btn
              @click="handleLogout"
              color="black"
              class="bg-white"
              style="border: 1px solid black"
              >Yes</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-dialog v-model="deleteDialog" max-width="400px">
        <v-card>
          <p class="text-center my-5 ubuntu-regular-h3">
            Are you sure you want to delete this image?
          </p>
          <v-card-actions class="mb-2 px-4">
            <v-btn @click="deleteDialog = false" color="white" class="bg-black"
              >Cancel</v-btn
            >
            <v-btn
              @click="deleteImage()"
              color="black"
              class="bg-white"
              style="border: 1px solid black"
            >
              Yes
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useAuth } from "~/composables/auth";
import { useCookie, useRouter } from "#app";
import { createClient } from "@supabase/supabase-js";

const config = useRuntimeConfig();
const supabase = createClient(
  config.public.supaBaseUrl,
  config.public.supaBaseKey
);

const images = ref<string[]>([]);
const file = ref<File | null>(null);
const fileInput = ref<HTMLElement | null>(null);
const loading = ref<boolean>(false);
const user = useCookie<any>("user");
const { logout } = useAuth();
const router = useRouter();
const MAX_FILE_SIZE = 1 * 1024 * 1024;

const snackbar = ref(false);
const snackbarMessage = ref("");
const snackbarColor = ref("error");

const logoutDialog = ref(false);
const deleteDialog = ref(false);
const imageToDelete = ref<string | null>(null);

const handleFileUpload = (event: Event): void => {
  const target = event.target as HTMLInputElement;
  if (target.files) {
    const selectedFile = target.files[0];

    if (selectedFile.size > MAX_FILE_SIZE) {
      snackbarMessage.value = "File size must be less than 1MB.";
      snackbarColor.value = "error";
      snackbar.value = true;
      return;
    }

    file.value = selectedFile;
  }
};

const uploadImage = async (): Promise<void> => {
  if (!file.value) {
    snackbarMessage.value = "Please select an image to upload.";
    snackbarColor.value = "error";
    snackbar.value = true;

    if (fileInput.value) {
      fileInput.value.$el.querySelector("input")?.focus();
    }

    return;
  }

  loading.value = true;

  const sanitizedFileName = file.value.name
    .replace(/\s+/g, "_")
    .replace(/[^a-zA-Z0-9._-]/g, "");
  const fileName = `${Date.now()}-${sanitizedFileName}`;
  const BUCKET_NAME = "pheonix";

  const { error } = await supabase.storage
    .from(BUCKET_NAME)
    .upload(fileName, file.value);

  if (error) {
    loading.value = false;
    snackbarMessage.value = `Upload error: ${error.message}`;
    snackbarColor.value = "error";
    snackbar.value = true;
    return;
  }

  await fetchImages(); // Refresh the gallery

  // ✅ Clear the file input
  file.value = null;
  fileInput.value?.reset();

  loading.value = false;
  snackbarMessage.value = "Image uploaded successfully!";
  snackbarColor.value = "success";
  snackbar.value = true;
};

const fetchImages = async (): Promise<void> => {
  const BUCKET_NAME = "pheonix";

  try {
    console.log("Fetching updated image list...");

    const { data, error } = await supabase.storage.from(BUCKET_NAME).list();

    if (error) {
      snackbarMessage.value = `Error fetching images: ${error.message}`;
      snackbarColor.value = "error";
      snackbar.value = true;
      return;
    }

    // Sort images by last modified time (newest first)
    const sortedData = data.sort(
      (a, b) =>
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );

    // Fetch signed URLs for each image
    const signedUrls = await Promise.all(
      sortedData.map(async (img) => {
        const { data } = await supabase.storage
          .from(BUCKET_NAME)
          .createSignedUrl(img.name, 60 * 60); // 1-hour expiry
        return { signedUrl: data.signedUrl, fileName: img.name };
      })
    );

    images.value = signedUrls; // ✅ Store sorted images
    console.log("Updated image list with signed URLs (sorted):", images.value);
  } catch (err) {
    console.error("Error fetching images:", err);
    snackbarMessage.value = "An unexpected error occurred.";
    snackbarColor.value = "error";
    snackbar.value = true;
  }
};

// Open the delete confirmation dialog
const confirmDelete = (fileName: string) => {
  console.log("🛠️ Confirming deletion for:", fileName);
  imageToDelete.value = fileName; // Store file name directly
  deleteDialog.value = true;
};

const getFilePath = (imageUrl: string): string | null => {
  if (!imageUrl) return null;

  // Extract the correct file path by removing bucket prefix
  const basePath = imageUrl.split("/object/")[1];
  if (!basePath) return null;

  return basePath.replace(/^public\/pheonix\//, ""); // ✅ Ensure correct path
};
const refreshImages = async () => {
  const { data, error } = await supabase.storage.from("pheonix").list("", {
    cacheControl: "no-cache",
  });

  if (error) {
    console.error("❌ Failed to refresh images:", error.message);
    return;
  }

  images.value = data.map((file) => file.name); // ✅ Update UI with fresh list
};

const deleteImage = async () => {
  if (!imageToDelete.value) {
    console.log("❌ No image name provided for deletion.");
    return;
  }

  console.log("🗑️ Deleting file:", imageToDelete.value);

  try {
    console.log("📌 Sending DELETE request to Supabase Storage...");

    const { error } = await supabase.storage
      .from("pheonix") // ✅ Your bucket name
      .remove([imageToDelete.value]); // ✅ Delete using file name

    if (error) {
      console.error("❌ Supabase delete error:", error.message);
      return;
    }

    console.log("✅ File deleted successfully from Supabase!");

    // ✅ Refresh images after deletion
    await fetchImages();

    snackbarMessage.value = "Image deleted successfully!";
    snackbarColor.value = "success";
    snackbar.value = true;

    deleteDialog.value = false; // Close dialog after deletion
  } catch (err) {
    console.error("❌ Unexpected error deleting image:", err);
  }
};

const openLogoutDialog = () => {
  logoutDialog.value = true;
};

const closeLogoutDialog = () => {
  logoutDialog.value = false;
};

const handleLogout = async () => {
  await logout();
  user.value = null;
  snackbarMessage.value = "Logout successful!";
  snackbarColor.value = "success";
  snackbar.value = true;
  router.push("/admin/login");
  closeLogoutDialog();
};

onMounted(fetchImages);
</script>
