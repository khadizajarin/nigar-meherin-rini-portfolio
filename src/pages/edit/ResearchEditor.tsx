/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";
import { useResearchAdmin } from "@/hooks/useResearchAdmin";
import {
  addResearch,
  updateResearch,
  deleteResearch,
} from "@/services/research.admin";

const ResearchEditor = () => {
  const queryClient = useQueryClient();
  const { data, isLoading } = useResearchAdmin();

  if (isLoading) return <p>Loading...</p>;

  return (
    <section className="bg-card border rounded-2xl p-8 space-y-8">
      <h2 className="text-2xl font-bold">Research</h2>

      <div className="flex gap-3">
        <button
          onClick={async () => {
            await addResearch("assistant");
            queryClient.invalidateQueries({ queryKey: ["research-admin"] });
            toast.success("Research item added");
          }}
          className="px-4 py-2 rounded-lg bg-primary text-primary-foreground"
        >
          + Assistant
        </button>

        <button
          onClick={async () => {
            await addResearch("monograph");
            queryClient.invalidateQueries({ queryKey: ["research-admin"] });
            toast.success("Research item added");
          }}
          className="px-4 py-2 rounded-lg bg-primary text-primary-foreground"
        >
          + Monograph
        </button>
      </div>

      <div className="space-y-6">
        {data?.map((item) => (
          <ResearchItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

const ResearchItem = ({ item }: any) => {
  const [form, setForm] = useState(item);
  const [saving, setSaving] = useState(false);
  const queryClient = useQueryClient();

  const save = async () => {
    try {
      setSaving(true);
      await updateResearch(item.id, form);
      toast.success("Research updated");
      queryClient.invalidateQueries({ queryKey: ["research-admin"] });
    } catch {
      toast.error("Update failed");
    } finally {
      setSaving(false);
    }
  };

  const remove = async () => {
    if (!confirm("Delete this research item?")) return;

    try {
      await deleteResearch(item.id);
      toast.success("Research deleted");
      queryClient.invalidateQueries({ queryKey: ["research-admin"] });
    } catch {
      toast.error("Delete failed");
    }
  };

  return (
    <div className="border rounded-xl p-6 space-y-4 space-x-8">
      {/* Type + Order */}
      <div className="flex justify-between items-center">
        <span className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground">
          {form.type === "assistant" ? "Assistant" : "Monograph"}
        </span>

        <input
          type="number"
          className="input w-20"
          value={form.order}
          onChange={(e) =>
            setForm({ ...form, order: Number(e.target.value) })
          }
          placeholder="Order"
        />
      </div>

      <textarea
        className="input"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
        placeholder="Title"
      />

      <input
        className="input"
        value={form.subtitle}
        onChange={(e) => setForm({ ...form, subtitle: e.target.value })}
        placeholder="Subtitle"
      />

      <textarea
        className="input"
        value={form.description || ""}
        onChange={(e) =>
          setForm({ ...form, description: e.target.value })
        }
        placeholder="Description"
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

      <input
        className="input"
        value={form.achievement || ""}
        onChange={(e) =>
          setForm({ ...form, achievement: e.target.value })
        }
        placeholder="Achievement"
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
          className="px-6 py-2 rounded-lg bg-primary text-primary-foreground disabled:opacity-60"
        >
          {saving ? "Saving..." : "Save"}
        </button>
      </div>
    </div>
  );
};

export default ResearchEditor;
