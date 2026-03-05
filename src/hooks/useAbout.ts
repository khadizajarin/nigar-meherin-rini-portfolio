// hooks/useAbout.ts

import { useQuery } from "@tanstack/react-query";
import { getAbout } from "@/services/about.firestore";

export function useAbout() {
  return useQuery({
    queryKey: ["about"],
    queryFn: getAbout,
  });
}