import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { ContactData } from "./../types/contact"
export async function getContact(): Promise<ContactData> {
  const snapshot = await getDocs(collection(db, "contact"));

  if (snapshot.empty) {
    throw new Error("No contact data found");
  }

  const doc = snapshot.docs[0];

  return {
    id: doc.id,
    ...(doc.data() as Omit<ContactData, "id">),
  };
}

