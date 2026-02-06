/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { getExperiences } from "@/services/experience.firestore";
import type { Experiences } from "@/services/experience.admin";

interface UseExperiencesResult {
  experiences: Experiences[];
  loading: boolean;
  error: string | null;
}

export const useExperiences = (): UseExperiencesResult => {
  const [experiences, setExperiences] = useState<Experiences[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

 useEffect(() => {
  const fetchExperiences = async () => {
    try {
      const data = await getExperiences();
      setExperiences(data);
    } catch (err: any) {
      console.error("Firestore error:", err);
      setError(err.message || "Failed to fetch experiences");
    } finally {
      setLoading(false);
    }
  };

  fetchExperiences();
}, []);


  //   return () => {
  //     isMounted = false;
  //   };
  // }, []);

  return { experiences, loading, error };
};
