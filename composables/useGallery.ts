import { ref } from "vue";
import { useNuxtApp } from "#app";

export function useGallery() {
  const { $supabase } = useNuxtApp();
  const supabase = $supabase as any;
  const images = ref<string[]>([]);

  const fetchImages = async () => {
    const BUCKET_NAME = "pheonix";

    const { data, error } = await supabase.storage.from(BUCKET_NAME).list();
    if (error) {
      console.error("Error fetching images:", error.message);
      return;
    }

    const signedUrls = await Promise.all(
      data.map(async (img) => {
        const { data: signedUrlData, error: signedUrlError } =
          await supabase.storage
            .from(BUCKET_NAME)
            .createSignedUrl(img.name, 60 * 60 * 24); // 24-hour expiry

        if (signedUrlError) {
          console.error("Error generating signed URL:", signedUrlError.message);
          return null;
        }

        return signedUrlData.signedUrl;
      })
    );

    images.value = signedUrls.filter((url) => url !== null);
  };

  return { images, fetchImages };
}
