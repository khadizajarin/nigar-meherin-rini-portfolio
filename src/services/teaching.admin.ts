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

export interface Teaching {
  id: string;
  title: string;
  role: string;
  period: string;
  supervisor: string;
  points: string[];
  order: number;
}

const colRef = collection(db, "teaching");

// fetch
export async function getTeachingAdmin(): Promise<Teaching[]> {
  const q = query(colRef, orderBy("order", "asc"));
  const snap = await getDocs(q);

  return snap.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<Teaching, "id">),
  }));
}

// update
export async function updateTeaching(
  id: string,
  data: Partial<Teaching>
) {
  const ref = doc(db, "teaching", id);
  await updateDoc(ref, data);
}

// add
export async function addTeaching() {
  await addDoc(colRef, {
    title: "New Course",
    role: "Teaching Assistant",
    period: "",
    supervisor: "",
    points: [],
    order: 99,
  });
}

// delete
export async function deleteTeaching(id: string) {
  const ref = doc(db, "teaching", id);
  await deleteDoc(ref);
}
