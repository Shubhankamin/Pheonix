import { supabase } from "~/utils/supabase";

export default defineEventHandler(async () => {
  const { data, error } = await supabase.storage.from("pheonix").list("", {
    limit: 100, // Adjust as needed
  });

  if (error) {
    throw createError({ statusCode: 500, message: error.message });
  }

  // Generate public URLs for each file in the bucket
  const images = data.map((file) => ({
    name: file.name,
    url: supabase.storage.from("pheonix").getPublicUrl(file.name).publicUrl,
  }));

  return images;
});
