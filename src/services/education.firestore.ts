import {
  collection,
  getDocs,
  query,
  orderBy,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import type { Education } from "@/types/education";

const educationRef = collection(db, "education");

export const getEducation = async (): Promise<Education[]> => {
  const q = query(educationRef, orderBy("order", "asc"));
  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<Education, "id">),
  }));
};
