import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";

export const addTestUser = async () => {
  await addDoc(collection(db, "users"), { name: "Rozz", email: "rozz@email.com" });
};

export const getTestUsers = async () => {
  const snapshot = await getDocs(collection(db, "users"));
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};
