export async function uploadToCloudinary(file: File, folder = "gallery") {
  const url = "https://api.cloudinary.com/v1_1/dbpiiabaz/upload";

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "gallery_unsigned");
  formData.append("folder", folder);

  const res = await fetch(url, {
    method: "POST",
    body: formData,
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.error?.message || "Upload failed");
  }

  return data.secure_url;
}