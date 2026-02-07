import { useQuery } from "@tanstack/react-query";
import { getStoriesAdmin } from "@/services/stories.admin";

export function useStoriesAdmin() {
  return useQuery({
    queryKey: ["stories-admin"],
    queryFn: getStoriesAdmin,
  });
}
