import { useEffect, useState } from "react";
import { getEducation } from "@/services/education.firestore";
import type { Education } from "@/types/education";

interface UseEducationResult {
  education: Education[];
  loading: boolean;
}

export const useEducation = (): UseEducationResult => {
  const [education, setEducation] = useState<Education[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;

    getEducation()
      .then((data) => {
        if (isMounted) setEducation(data);
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return { education, loading };
};
