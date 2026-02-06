import { useEducationAdmin } from "@/hooks/useEducationAdmin";
import { updateEducation } from "@/services/education.admin";
import { useState } from "react";
import { toast } from "sonner";

const EducationEditor = () => {
  const { data, isLoading } = useEducationAdmin();

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="space-y-6">
      {data?.map((edu) => (
        <EducationItem key={edu.id} edu={edu} />
      ))}
    </div>
  );
};

const EducationItem = ({ edu }: { edu: any }) => {
  const [form, setForm] = useState(edu);
  const [saving, setSaving] = useState(false);

  const save = async () => {
    setSaving(true);
    await updateEducation(edu.id, form);
    setSaving(false);
  };

  return (
    <div className="border rounded-xl p-6 bg-background space-y-5">
      {/* Item Header */}
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-lg">
          {form.degree}
        </h3>
        <span className="text-xs px-3 py-1 rounded-full bg-accent">
          Order: {form.order}
        </span>
      </div>

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

      {/* Action */}
      <div className="flex justify-end">
        <button
          onClick={save}
          disabled={saving}
          className="px-6 py-2 rounded-lg bg-primary text-primary-foreground"
        >
          {saving ? "Saving..." : "Save"}
        </button>
      </div>
    </div>
  );
};


export default EducationEditor;
