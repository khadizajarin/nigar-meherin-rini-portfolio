import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { ContactData } from "./../types/contact";

export async function getContact(): Promise<ContactData | null> {
  const snapshot = await getDocs(collection(db, "contact"));

  if (snapshot.empty) {
    return null;
  }

  const docSnap = snapshot.docs[0];

  return {
    id: docSnap.id,
    ...(docSnap.data() as Omit<ContactData, "id">),
  };
}