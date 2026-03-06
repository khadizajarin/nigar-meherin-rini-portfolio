import { doc, getDoc, setDoc, updateDoc, collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { AboutData } from "./../types/about";

async function getAboutRef() {
  const snapshot = await getDocs(collection(db, "about"));

  if (snapshot.empty) {
    const newRef = doc(collection(db, "about"));

    await setDoc(newRef, {
      tagline: "",
      heroIntro: "",
      birthDate: "",
      location: "",
      languages: [],
      paragraphs: [],
    } as AboutData);

    return newRef;
  }

  return doc(db, "about", snapshot.docs[0].id);
}

export async function getAboutAdmin(): Promise<AboutData> {
  const ref = await getAboutRef();
  const snap = await getDoc(ref);

  return {
    id: snap.id,
    ...snap.data(),
  } as AboutData;
}

export async function updateAbout(data: Partial<AboutData>) {
  const ref = await getAboutRef();
  await updateDoc(ref, data);
}

export async function createAbout(data: AboutData) {
  const ref = await getAboutRef();
  await setDoc(ref, data);
}