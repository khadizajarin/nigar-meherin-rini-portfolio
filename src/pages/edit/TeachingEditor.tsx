/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";
import { useTeachingAdmin } from "@/hooks/useTeachingAdmin";
import {
  addTeaching,
  updateTeaching,
  deleteTeaching,
} from "@/services/teaching.admin";

const TeachingEditor = () => {
  const queryClient = useQueryClient();
  const { data, isLoading } = useTeachingAdmin();

  if (isLoading) return <p>Loading...</p>;

  return (
    <section className="bg-card border rounded-2xl p-8 space-y-8">
      <h2 className="text-2xl font-bold">Teaching</h2>

      <button
        onClick={async () => {
          await addTeaching();
          queryClient.invalidateQueries({ queryKey: ["teaching-admin"] });
          toast.success("Teaching item added");
        }}
        className="px-4 py-2 rounded-lg bg-primary text-primary-foreground"
      >
        + Add Teaching
      </button>

      <div className="space-y-6">
        {data?.map((item) => (
          <TeachingItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

const TeachingItem = ({ item }: any) => {
  const [form, setForm] = useState(item);
  const [saving, setSaving] = useState(false);
  const queryClient = useQueryClient();

  const save = async () => {
    try {
      setSaving(true);
      await updateTeaching(item.id, form);
      toast.success("Teaching updated");
      queryClient.invalidateQueries({ queryKey: ["teaching-admin"] });
    } catch {
      toast.error("Update failed");
    } finally {
      setSaving(false);
    }
  };

  const remove = async () => {
    if (!confirm("Delete this teaching item?")) return;

    try {
      await deleteTeaching(item.id);
      toast.success("Teaching deleted");
      queryClient.invalidateQueries({ queryKey: ["teaching-admin"] });
    } catch {
      toast.error("Delete failed");
    }
  };

  return (
    <div className="border rounded-xl p-6 space-y-4">
      <input
        type="number"
        className="input w-24"
        value={form.order}
        onChange={(e) =>
          setForm({ ...form, order: Number(e.target.value) })
        }
        placeholder="Order"
      />

      <input
        className="input"
        value={form.role}
        onChange={(e) => setForm({ ...form, role: e.target.value })}
        placeholder="Role"
      />

      <input
        className="input"
        value={form.period}
        onChange={(e) => setForm({ ...form, period: e.target.value })}
        placeholder="Period"
      />

      <input
        className="input"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
        placeholder="Course Title"
      />

      <textarea
        className="input"
        value={form.supervisor}
        onChange={(e) =>
          setForm({ ...form, supervisor: e.target.value })
        }
        placeholder="Supervisor"
      />

      <textarea
        className="input"
        value={(form.points || []).join("\n")}
        onChange={(e) =>
          setForm({
            ...form,
            points: e.target.value.split("\n"),
          })
        }
        placeholder="Points (one per line)"
      />

      <div className="flex justify-between">
        <button
          onClick={remove}
          className="text-xs px-3 py-1 rounded-full bg-destructive text-destructive-foreground"
        >
          Delete
        </button>

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

export default TeachingEditor;
