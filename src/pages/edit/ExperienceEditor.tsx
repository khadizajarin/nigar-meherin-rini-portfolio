/* eslint-disable @typescript-eslint/no-explicit-any */
import { useExperiencesAdmin } from "../../hooks/useExperiencesAdmin";
import {
  addExperience,
  updateExperience,
  deleteExperience,
} from "@/services/experience.admin";

import { useState } from "react";
import { toast } from "sonner";


const ExperienceEditor = () => {
  const { data, isLoading } = useExperiencesAdmin();

  if (isLoading) return <p>Loading...</p>;

  return (
    <section className="bg-card border rounded-2xl p-8 space-y-8">
      {/* ===== Experiences Section Header ===== */}
      <div>
        <h2 className="text-2xl font-display font-bold">
          Experiences
        </h2>
        <p className="text-sm text-muted-foreground">
          Edit professional experience shown on the website
        </p>
      </div>

      {/* Add Experience */}
      <button
        onClick={async () => {
          await addExperience();
          toast.success("New experience added");
          window.location.reload();
        }}
        className="px-4 py-2 rounded-lg bg-primary text-primary-foreground"
      >
        + Add Experience
      </button>

      {/* Experience Items */}
      <div className="space-y-6">
        {data?.map((exp) => (
          <ExperienceItem key={exp.id} exp={exp} />
        ))}
      </div>
    </section>
  );
};

const ExperienceItem = ({ exp }: { exp: any }) => {
  const [form, setForm] = useState(exp);
  const [saving, setSaving] = useState(false);

  const save = async () => {
    try {
      setSaving(true);
      await updateExperience(exp.id, form);
      toast.success("Experience updated");
    } catch {
      toast.error("Update failed");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="border rounded-xl p-6 bg-background space-y-5">
      {/* Item header */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">{form.title}</h3>
        <span className="text-xs px-3 py-1 rounded-full bg-accent">
          Order {form.order}
        </span>
      </div>

      {/* Delete button */}
      <button
        onClick={async () => {
          if (!confirm("Delete this experience?")) return;
          await deleteExperience(exp.id);
          toast.success("Experience deleted");
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
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />

        <input
          className="input"
          placeholder="Company"
          value={form.company}
          onChange={(e) => setForm({ ...form, company: e.target.value })}
        />

        <input
          className="input"
          placeholder="Period"
          value={form.period}
          onChange={(e) => setForm({ ...form, period: e.target.value })}
        />

        <input
          className="input"
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />

        <input
          className="input"
          placeholder="Icon Key (briefcase, tv, users...)"
          value={form.icon}
          onChange={(e) => setForm({ ...form, icon: e.target.value })}
        />

        <input
          type="number"
          className="input"
          placeholder="Display Order"
          value={form.order}
          onChange={(e) => setForm({ ...form, order: Number(e.target.value) })}
        />

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={form.current || false}
            onChange={(e) => setForm({ ...form, current: e.target.checked })}
          />
          Current
        </label>
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

export default ExperienceEditor;
