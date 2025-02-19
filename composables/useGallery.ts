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

      // Fetch signed URLs (valid for  5 years)
      const signedUrls = await Promise.all(
        data.map(async (img) => {
          const { data, error } = await supabase.storage
            .from(BUCKET_NAME)
            .createSignedUrl(img.name, EXPIRATION_TIME);
          if (error) throw new Error(error.message);
          return { name: img.name, url: data.signedUrl };
        })
      );

      images.value = signedUrls;
      console.log("Fetched Images with Signed URLs:", images.value);
    } catch (err) {
      console.error("Error fetching images:", err);
    }
  };

  onMounted(fetchImages); // Fetch once when the component mounts

  return { images };
}
