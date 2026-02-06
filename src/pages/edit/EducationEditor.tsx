/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEducationAdmin } from "@/hooks/useEducationAdmin";
import { updateEducation, addEducation, deleteEducation  } from "@/services/education.admin";


import { useState } from "react";
import { toast } from "sonner";

const EducationEditor = () => {
  const { data, isLoading } = useEducationAdmin();

  if (isLoading) return <p>Loading...</p>;

  return (
    <section className="bg-card border rounded-2xl p-8 space-y-8">
      {/* ===== Education Section Header ===== */}
      <div>
        <h2 className="text-2xl font-display font-bold">
          Education
        </h2>
        <p className="text-sm text-muted-foreground">
          Edit education information shown on the website
        </p>
      </div>

       <button
            onClick={async () => {
            await addEducation();
            toast.success("New education added");
            window.location.reload();
            }}
            className="px-4 py-2 rounded-lg bg-primary text-primary-foreground"
        >
            + Add Education
        </button>

      {/* ===== Education Items ===== */}
      <div className="space-y-6">
        {data?.map((edu) => (
          <EducationItem key={edu.id} edu={edu} />
        ))}
      </div>
    </section>
  );
};

const EducationItem = ({ edu }: { edu: any }) => {
  const [form, setForm] = useState(edu);
  const [saving, setSaving] = useState(false);

  const save = async () => {
    try {
      setSaving(true);
      await updateEducation(edu.id, form);
      toast.success("Education updated");
    } catch {
      toast.error("Update failed");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="border rounded-xl p-6 bg-background space-y-5">
      {/* Item title */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">
          {form.degree}
        </h3>
        <span className="text-xs px-3 py-1 rounded-full bg-accent">
          Order {form.order}
        </span>
      </div>

        <button
        onClick={async () => {
            if (!confirm("Delete this education?")) return;
            await deleteEducation(edu.id);
            toast.success("Education deleted");
            window.location.reload();
        }}
        className="text-xs px-3 py-1 rounded-full bg-destructive text-destructive-foreground"
        >
        Delete
        </button>

      {/* Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          className="input"
          placeholder="Degree"
          value={form.degree}
          onChange={(e) =>
            setForm({ ...form, degree: e.target.value })
          }
        />

        <input
          className="input"
          placeholder="Institution"
          value={form.institution}
          onChange={(e) =>
            setForm({ ...form, institution: e.target.value })
          }
        />

        <input
          className="input"
          placeholder="Period"
          value={form.period}
          onChange={(e) =>
            setForm({ ...form, period: e.target.value })
          }
        />

        <input
          type="number"
          className="input"
          placeholder="Display Order"
          value={form.order}
          onChange={(e) =>
            setForm({ ...form, order: Number(e.target.value) })
          }
        />
      </div>

      {/* Save button */}
      <div className="flex justify-end border-t pt-4">
        <button
          onClick={save}
          disabled={saving}
          className="px-6 py-2 rounded-lg bg-primary text-primary-foreground disabled:opacity-60"
        >
          {saving ? "Saving..." : "Save Changes"}
        </button>
      </div>
    </div>
  );
};

export default EducationEditor;
