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
import { GalleryItem } from "./gallery.firestore";

const colRef = collection(db, "gallery");

export async function getGalleryAdmin(): Promise<GalleryItem[]> {
  const q = query(colRef, orderBy("order", "asc"));
  const snap = await getDocs(q);

  return snap.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<GalleryItem, "id">),
  }));
}

export async function addGalleryItem() {
  await addDoc(colRef, {
    title: "New Photo",
    caption: "",
    imageUrl: "",
    size: "normal",
    order: 99,
  });
}

export async function updateGalleryItem(
  id: string,
  data: Partial<GalleryItem>
) {
  const ref = doc(db, "gallery", id);
  await updateDoc(ref, data);
}

export async function deleteGalleryItem(id: string) {
  const ref = doc(db, "gallery", id);
  await deleteDoc(ref);
}