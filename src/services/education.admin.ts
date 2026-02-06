import {
  collection,
  doc,
  getDocs,
  updateDoc,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  order: number;
  field?: string;
  grade?: string;
}

const colRef = collection(db, "education");

export async function getEducationAdmin(): Promise<Education[]> {
  const q = query(colRef, orderBy("order", "asc"));
  const snap = await getDocs(q);

  return snap.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<Education, "id">),
  }));
}

export async function updateEducation(
  id: string,
  data: Partial<Education>
) {
  const ref = doc(db, "education", id);
  await updateDoc(ref, data);
}
