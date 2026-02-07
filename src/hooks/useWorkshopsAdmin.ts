import { useQuery } from "@tanstack/react-query";
import { getWorkshopsAdmin } from "@/services/workshops.admin";

export function useWorkshopsAdmin() {
  return useQuery({
    queryKey: ["workshops-admin"],
    queryFn: getWorkshopsAdmin,
  });
}
