import { useQuery } from "@tanstack/react-query";
import { getGalleryAdmin } from "@/services/gallery.admin";

export function useGalleryAdmin() {
  return useQuery({
    queryKey: ["gallery-admin"],
    queryFn: getGalleryAdmin,
  });
}