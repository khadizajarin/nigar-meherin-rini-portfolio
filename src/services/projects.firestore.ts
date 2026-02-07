import {
  collection,
  getDocs,
  query,
  orderBy,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

export interface Project {
  id: string;
  title: string;
  organization: string;
  period: string;
  description: string;
  link?: string;
  icon: string;
  order: number;
}

const colRef = collection(db, "projects");

export async function getProjects(): Promise<Project[]> {
  const q = query(colRef, orderBy("order", "asc"));
  const snap = await getDocs(q);

  return snap.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<Project, "id">),
  }));
}
