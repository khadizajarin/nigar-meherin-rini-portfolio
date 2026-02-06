import {
  collection,
  getDocs,
  query,
  orderBy,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import type { Experience } from "./experience.admin";

const experiencesRef = collection(db, "experiences");

export const getExperiences = async (): Promise<Experience[]> => {
  const q = query(experiencesRef, orderBy("order", "asc"));
  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<Experience, "id">),
  }));
};
