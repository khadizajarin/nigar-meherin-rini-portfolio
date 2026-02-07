import {
  collection,
  getDocs,
  query,
  orderBy,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Teaching } from "./teaching.admin";

const ref = collection(db, "teaching");

export async function getTeaching(): Promise<Teaching[]> {
  const q = query(ref, orderBy("order", "asc"));
  const snap = await getDocs(q);

  return snap.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<Teaching, "id">),
  }));
}
