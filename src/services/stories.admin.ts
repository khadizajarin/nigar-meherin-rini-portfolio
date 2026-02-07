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

// Story type definition
export interface Story {
  id: string;
  title: string;
  link: string;
  type: string;
  order: number;
}

const colRef = collection(db, "stories");

// FETCH all stories
export async function getStoriesAdmin(): Promise<Story[]> {
  const q = query(colRef, orderBy("order", "asc"));
  const snap = await getDocs(q);

  return snap.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<Story, "id">),
  }));
}

// UPDATE a story
export async function updateStory(id: string, data: Partial<Story>) {
  const ref = doc(db, "stories", id);
  await updateDoc(ref, data);
}

// ADD a new story
export async function addStory(p0: { title: string; type: string; link: string; order: number; }) {
  await addDoc(colRef, {
    title: "New Story",
    link: "",
    type: "",
    order: 99,
  });
}

// DELETE a story
export async function deleteStory(id: string) {
  const ref = doc(db, "stories", id);
  await deleteDoc(ref);
}
