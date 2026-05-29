import { supabase } from "./client";

export async function uploadSessionImage(
  file: File
) {
  console.log(
    "Starting image upload..."
  );

  const fileExt =
    file.name.split(".").pop();

  console.log(
    "File extension:",
    fileExt
  );

  const fileName =
    `${crypto.randomUUID()}.${fileExt}`;

  console.log(
    "Generated filename:",
    fileName
  );

  const filePath =
    `sessions/${fileName}`;

  console.log(
    "Upload path:",
    filePath
  );

  const { data, error } =
    await supabase.storage
      .from("session-images")
      .upload(filePath, file);

  console.log(
    "Upload response data:",
    data
  );

  if (error) {
    console.error(
      "SUPABASE STORAGE ERROR:",
      error
    );

    throw error;
  }

  console.log(
    "Image uploaded successfully."
  );

  const {
    data: { publicUrl },
  } = supabase.storage
    .from("session-images")
    .getPublicUrl(filePath);

  console.log(
    "Generated public URL:",
    publicUrl
  );

  return publicUrl;
}