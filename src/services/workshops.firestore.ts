import {
  collection,
  getDocs,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

export interface Workshop {
  id: string;
  title: string;
  type: string;
  organization?: string;
  description?: string;
  date: string;
  order: number;
}

const colRef = collection(db, "workshops");

export async function getWorkshops(type: "attended" | "conducted") {
  const q = query(
    colRef,
    where("type", "==", type),
    orderBy("order", "asc")
  );

  const snap = await getDocs(q);

  return snap.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<Workshop, "id">),
  }));
}
