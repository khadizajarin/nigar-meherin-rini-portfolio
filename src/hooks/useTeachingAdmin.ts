import { useQuery } from "@tanstack/react-query";
import { getTeachingAdmin } from "@/services/teaching.admin";

export function useTeachingAdmin() {
  return useQuery({
    queryKey: ["teaching-admin"],
    queryFn: getTeachingAdmin,
  });
}
