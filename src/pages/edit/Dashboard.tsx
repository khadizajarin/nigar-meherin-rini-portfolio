"use client";

import { useState } from "react";
import ProtectedRoute from "@/components/ProtectedRoute";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

import EducationEditor from "./EducationEditor";
import ExperienceEditor from "./ExperienceEditor";
import WorkshopEditor from "./WorkshopEditor";

type Tab = "education" | "experience" | "workshops";

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<Tab>("education");

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success("Logged out successfully");
      navigate("/");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <div className="min-h-screen flex bg-background">
      {/* Sidebar */}
      <aside className="w-64 bg-card p-6 border-r border-muted/20 flex flex-col">
        {/* Logout on top */}
        <button
          onClick={handleLogout}
          className="mb-6 px-4 py-2 rounded-lg bg-destructive text-destructive-foreground hover:opacity-90 transition"
        >
          Logout
        </button>

        <h1 className="text-2xl font-display font-bold mb-8">Dashboard</h1>

        {/* Navigation Tabs */}
        <nav className="flex flex-col gap-3">
          <button
            onClick={() => setActiveTab("education")}
            className={`text-left px-4 py-2 rounded-lg transition ${
              activeTab === "education"
                ? "bg-primary text-primary-foreground"
                : "hover:bg-primary/10"
            }`}
          >
            Education
          </button>

          <button
            onClick={() => setActiveTab("experience")}
            className={`text-left px-4 py-2 rounded-lg transition ${
              activeTab === "experience"
                ? "bg-primary text-primary-foreground"
                : "hover:bg-primary/10"
            }`}
          >
            Experiences
          </button>

          <button
            onClick={() => setActiveTab("workshops")}
            className={`text-left px-4 py-2 rounded-lg transition ${
              activeTab === "workshops"
                ? "bg-primary text-primary-foreground"
                : "hover:bg-primary/10"
            }`}
          >
            Workshops
          </button>

          {/* Add more tabs here if needed */}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto">
        {activeTab === "education" && <EducationEditor />}
        {activeTab === "experience" && <ExperienceEditor />}
        {activeTab === "workshops" && <WorkshopEditor />}
      </main>
    </div>
  );
};

export default () => (
  <ProtectedRoute>
    <Dashboard />
  </ProtectedRoute>
);
