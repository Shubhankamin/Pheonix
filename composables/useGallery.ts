import { ref, onMounted } from "vue";
import { useNuxtApp } from "#app";

export function useGallery() {
  const { $supabase } = useNuxtApp();
  const supabase = $supabase as any;

  const images = ref<{ name: string; url: string }[]>([]);
  const EXPIRATION_TIME = 5 * 365 * 24 * 60 * 60; // 🔥 5 years in seconds
  const fetchImages = async () => {
    const BUCKET_NAME = "pheonix";

    try {
      const { data, error } = await supabase.storage.from(BUCKET_NAME).list();

      if (error) throw new Error(error.message);

      // Sort images by `created_at` (newest first)
      const sortedData = data.sort(
        (a, b) =>
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      );

      // Fetch signed URLs for each image
      images.value = await Promise.all(
        sortedData.map(async (img) => {
          const { data } = await supabase.storage
            .from(BUCKET_NAME)
            .createSignedUrl(img.name, 60 * 60 * 24 * 365 * 5); // 5-year expiry
          return { name: img.name, url: data.signedUrl };
        })
      );

      console.log("Fetched Sorted Images:", images.value);
    } catch (err) {
      console.error("Error fetching images:", err);
    }
  };

  onMounted(fetchImages); // Fetch once when the component mounts

  return { images };
}
