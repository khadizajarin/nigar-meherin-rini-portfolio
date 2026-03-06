import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { AboutData } from "./../types/about";

export async function getAbout(): Promise<AboutData> {
  const querySnapshot = await getDocs(collection(db, "about"));

  if (querySnapshot.empty) {
    throw new Error("No about data found");
  }

  const doc = querySnapshot.docs[0];

  return {
    id: doc.id,
    ...doc.data(),
  } as AboutData;
}