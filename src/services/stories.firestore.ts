import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "@/lib/firebase";

export interface Story {
  id: string;
  title: string;
  link: string;
  type: string;
  order: number;
}

const ref = collection(db, "stories");

export async function getStories(): Promise<Story[]> {
  const q = query(ref, orderBy("order", "asc"));
  const snap = await getDocs(q);

  return snap.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<Story, "id">),
  }));
}
