import { supabase } from "~/utils/supabase";

export default defineEventHandler(async (event) => {
  const form = await readMultipartFormData(event);
  const file = form?.find((item) => item.name === "image"); // Fix: Match 'image' from form data

  if (!file) {
    throw createError({ statusCode: 400, message: "No file provided" });
  }

  // Define a unique file path (timestamp + original file name)
  const fileName = `${Date.now()}-${file.filename}`;

  // Upload the file to the 'pheonix' bucket
  const { data, error } = await supabase.storage
    .from("pheonix") // Ensure this matches your bucket name
    .upload(fileName, file.data, {
      contentType: file.type,
    });

  if (error) {
    throw createError({ statusCode: 500, message: error.message });
  }

  // Generate and return the public URL for the uploaded file
  const { publicUrl } = supabase.storage
    .from("pheonix")
    .getPublicUrl(data.path);

  return { message: "File uploaded successfully", url: publicUrl };
});
