import {
  collection,
  getDocs,
  query,
  orderBy,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

export interface ResearchItem {
  id: string;
  title: string;
  subtitle: string;
  description?: string;
  points?: string[];
  achievement?: string;
  type: "assistant" | "monograph";
  order: number;
}

const colRef = collection(db, "research");

export async function getResearch(): Promise<ResearchItem[]> {
  const q = query(colRef, orderBy("order", "asc"));
  const snap = await getDocs(q);

  return snap.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<ResearchItem, "id">),
  }));
}
