import { useQuery } from "@tanstack/react-query";
import { getResearchAdmin } from "@/services/research.admin";

export function useResearchAdmin() {
  return useQuery({
    queryKey: ["research-admin"],
    queryFn: getResearchAdmin,
  });
}
