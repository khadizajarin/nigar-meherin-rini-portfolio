import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  collection,
  getDocs,
} from "firebase/firestore";

import { db } from "@/lib/firebase";
import { ContactData } from "./../types/contact";

async function getContactRef() {
  const snapshot = await getDocs(collection(db, "contact"));

  if (snapshot.empty) {
    const newRef = doc(collection(db, "contact"));

    await setDoc(newRef, {
      email: "",
      phone: "",
      location: "",
      linkedin: "",
      facebook: "",
      quote: "",
    });

    return newRef;
  }

  return doc(db, "contact", snapshot.docs[0].id);
}

export async function getContactAdmin(): Promise<ContactData> {
  const ref = await getContactRef();
  const snap = await getDoc(ref);

  return {
    id: snap.id,
    ...(snap.data() as Omit<ContactData, "id">),
  };
}

export async function updateContact(data: Partial<ContactData>) {
  const ref = await getContactRef();
  await updateDoc(ref, data);
}