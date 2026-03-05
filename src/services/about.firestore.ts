// services/about.ts

import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";

export async function getAbout() {
  const querySnapshot = await getDocs(collection(db, "about"));

  if (querySnapshot.empty) {
    throw new Error("No about data found");
  }

  const doc = querySnapshot.docs[0];
  return {
    id: doc.id,
    ...doc.data(),
  };
}