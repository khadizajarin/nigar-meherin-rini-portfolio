import { useQuery } from "@tanstack/react-query";
import { getProjectsAdmin } from "@/services/projects.admin";

export function useProjectsAdmin() {
  return useQuery({
    queryKey: ["projects-admin"],
    queryFn: getProjectsAdmin,
  });
}
