import {
  collection,
  doc,
  getDocs,
  updateDoc,
  addDoc,
  deleteDoc,
  query,
  orderBy,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import { ResearchItem } from "./research.firestore";

const colRef = collection(db, "research");

export async function getResearchAdmin(): Promise<ResearchItem[]> {
  const q = query(colRef, orderBy("order", "asc"));
  const snap = await getDocs(q);

  return snap.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<ResearchItem, "id">),
  }));
}

export async function addResearch(type: "assistant" | "monograph") {
  await addDoc(colRef, {
    title: "New Research Item",
    subtitle: "",
    description: "",
    points: [],
    achievement: "",
    type,
    order: 99,
  });
}

export async function updateResearch(
  id: string,
  data: Partial<ResearchItem>
) {
  const ref = doc(db, "research", id);
  await updateDoc(ref, data);
}

export async function deleteResearch(id: string) {
  const ref = doc(db, "research", id);
  await deleteDoc(ref);
}
