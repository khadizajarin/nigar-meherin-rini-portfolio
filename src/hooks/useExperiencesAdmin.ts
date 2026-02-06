import { useQuery } from "@tanstack/react-query";
import { getExperiencesAdmin } from "@/services/experience.admin";

export function useExperiencesAdmin() {
  return useQuery({
    queryKey: ["experience-admin"],
    queryFn: getExperiencesAdmin,
  });
}
