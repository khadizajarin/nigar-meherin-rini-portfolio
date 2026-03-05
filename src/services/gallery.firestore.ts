import {
  collection,
  getDocs,
  query,
  orderBy,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

export interface GalleryItem {
  id: string;
  title: string;
  caption: string;
  imageUrl: string;
  size: "normal" | "tall" | "wide";
  order: number;
}

const colRef = collection(db, "gallery");

export async function getGallery(): Promise<GalleryItem[]> {
  const q = query(colRef, orderBy("order", "asc"));
  const snap = await getDocs(q);

  return snap.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<GalleryItem, "id">),
  }));
}