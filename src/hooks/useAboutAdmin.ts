import { useQuery } from "@tanstack/react-query";
import { getAboutAdmin } from "@/services/about.admin";

export function useAboutAdmin() {
  return useQuery({
    queryKey: ["about-admin"],
    queryFn: getAboutAdmin,
  });
}