import ProtectedRoute from "@/components/ProtectedRoute";

import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);

      toast.success("Logged out successfully");

      navigate("/edit");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <div className="min-h-screen bg-background p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-display font-bold">
          Edit Dashboard
        </h1>

        <button
          onClick={handleLogout}
          className="px-4 py-2 rounded-lg bg-destructive text-destructive-foreground hover:opacity-90 transition"
        >
          Logout
        </button>
      </div>

      <p className="text-muted-foreground">
        Edit everything here
      </p>
    </div>
  );
};


export default () => (
  <ProtectedRoute>
    <Dashboard />
  </ProtectedRoute>
);
