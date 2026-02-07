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

export interface Project {
  id: string;
  title: string;
  organization: string;
  period: string;
  description: string;
  link?: string;
  icon: string; // "Video", "Mic", etc.
  order: number;
}

const colRef = collection(db, "projects");

// Fetch all projects sorted by order
export async function getProjectsAdmin(): Promise<Project[]> {
  const q = query(colRef, orderBy("order", "asc"));
  const snap = await getDocs(q);

  return snap.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<Project, "id">),
  }));
}

// Add new project
export async function addProject() {
  await addDoc(colRef, {
    title: "New Project",
    organization: "",
    period: "",
    description: "",
    link: "",
    icon: "Video", // default
    order: 99,
  });
}

// Update project
export async function updateProject(id: string, data: Partial<Project>) {
  const ref = doc(db, "projects", id);
  await updateDoc(ref, data);
}

// Delete project
export async function deleteProject(id: string) {
  const ref = doc(db, "projects", id);
  await deleteDoc(ref);
}
