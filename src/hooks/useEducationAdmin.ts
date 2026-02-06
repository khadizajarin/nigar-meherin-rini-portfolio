import { useQuery } from "@tanstack/react-query";
import { getEducationAdmin } from "@/services/education.admin";

export function useEducationAdmin() {
  return useQuery({
    queryKey: ["education-admin"],
    queryFn: getEducationAdmin,
  });
}
