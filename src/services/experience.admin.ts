import {
  collection,
  doc,
  getDocs,
  updateDoc,
  orderBy,
  query,
  addDoc,
  deleteDoc,
} from "firebase/firestore";


import { db } from "@/lib/firebase";

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  icon: string;
  current?: boolean;
  order: number;
}

const colRef = collection(db, "experiences");

// ===== Fetch all experiences in ascending order =====
export async function getExperiencesAdmin(): Promise<Experience[]> {
  const q = query(colRef, orderBy("order", "asc"));
  const snap = await getDocs(q);

  return snap.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<Experience, "id">),
  }));
}

// ===== Update an experience =====
export async function updateExperience(
  id: string,
  data: Partial<Experience>
) {
  const ref = doc(db, "experiences", id);
  await updateDoc(ref, data);
}

// ===== Add a new experience =====
export async function addExperience() {
  await addDoc(colRef, {
    title: "New Title",
    company: "",
    period: "",
    description: "",
    icon: "briefcase", // default icon
    current: false,
    order: 99, // default order
  });
}

// ===== Delete an experience =====
export async function deleteExperience(id: string) {
  const ref = doc(db, "experiences", id);
  await deleteDoc(ref);
}
