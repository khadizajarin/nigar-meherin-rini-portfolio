import { doc, getDoc, setDoc, updateDoc, collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { AboutData } from "./about.admin";

// Get the first document dynamically
async function getAboutRef() {
  const snapshot = await getDocs(collection(db, "about"));
  if (snapshot.empty) {
    // If no document exists, create one
    const newRef = doc(collection(db, "about"));
    await setDoc(newRef, {
      birthDate: "",
      location: "",
      languages: [],
      paragraphs: [],
    } as AboutData);
    return newRef;
  }
  return doc(db, "about", snapshot.docs[0].id);
}

// Fetch About for Admin
export async function getAboutAdmin(): Promise<AboutData> {
  const ref = await getAboutRef();
  const snap = await getDoc(ref);
  return snap.data() as AboutData;
}

// Update About
export async function updateAbout(data: Partial<AboutData>) {
  const ref = await getAboutRef();
  await updateDoc(ref, data);
}

// Create About (optional, usually only once)
export async function createAbout(data: AboutData) {
  const ref = await getAboutRef();
  await setDoc(ref, data);
}