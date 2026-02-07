import {
  collection,
  doc,
  getDocs,
  query,
  orderBy,
  updateDoc,
  addDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

export interface Workshop {
  id: string;
  title: string;
  type: "attended" | "conducted";
  organization?: string;
  description?: string;
  date: string;
  order: number;
}

const colRef = collection(db, "workshops");

// ===== Fetch all workshops =====
export async function getWorkshopsAdmin(): Promise<Workshop[]> {
  const q = query(colRef, orderBy("order", "asc"));
  const snap = await getDocs(q);

  return snap.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<Workshop, "id">),
  }));
}

// ===== Update =====
export async function updateWorkshop(
  id: string,
  data: Partial<Workshop>
) {
  await updateDoc(doc(db, "workshops", id), data);
}

// ===== Add =====
export async function addWorkshop(type: "attended" | "conducted") {
  await addDoc(colRef, {
    title: "New Workshop",
    type,
    organization: "",
    description: "",
    date: "",
    order: 99,
  });
}

// ===== Delete =====
export async function deleteWorkshop(id: string) {
  await deleteDoc(doc(db, "workshops", id));
}
