/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { toast } from "sonner";
import { useWorkshopsAdmin } from "@/hooks/useWorkshopsAdmin";
import { useQueryClient } from "@tanstack/react-query";
import {
  addWorkshop,
  updateWorkshop,
  deleteWorkshop,
} from "@/services/workshops.admin";

const WorkshopEditor = () => {
  const queryClient = useQueryClient();
  const { data, isLoading } = useWorkshopsAdmin();

  if (isLoading) return <p>Loading...</p>;

  return (
    <section className="bg-card border rounded-2xl p-8 space-y-8">
      <h2 className="text-2xl font-bold">Workshops</h2>

      <div className="flex gap-3">
        <button
          onClick={async () => {
                await addWorkshop("attended");
                queryClient.invalidateQueries({ queryKey: ["workshops-admin"] });
                toast.success("Workshop added");
            }}
          className="px-4 py-2 rounded-lg bg-primary text-primary-foreground " 
        >
          + Attended
        </button>
        <button
          onClick={async () => {
                await addWorkshop("conducted");
                queryClient.invalidateQueries({ queryKey: ["workshops-admin"] });
                toast.success("Workshop added");
            }}
          className="px-4 py-2 rounded-lg bg-primary text-primary-foreground"
        >
          + Conducted
        </button>
      </div>

      <div className="space-y-6">
        {data?.map((workshop) => (
          <WorkshopItem key={workshop.id} workshop={workshop} />
        ))}
      </div>
    </section>
  );
};

const WorkshopItem = ({ workshop }: any) => {
  const [form, setForm] = useState(workshop);
  const [saving, setSaving] = useState(false);
  const queryClient = useQueryClient();

  const save = async () => {
    try {
      setSaving(true);
      await updateWorkshop(workshop.id, form);
      toast.success("Workshop updated");
      queryClient.invalidateQueries({ queryKey: ["workshops-admin"] });
    } catch {
      toast.error("Update failed");
    } finally {
      setSaving(false);
    }
  };

  const remove = async () => {
    if (!confirm("Delete this workshop?")) return;

    try {
      await deleteWorkshop(workshop.id);
      toast.success("Workshop deleted");
      queryClient.invalidateQueries({ queryKey: ["workshops-admin"] });
    } catch {
      toast.error("Delete failed");
    }
  };


  return (
    <div className="border rounded-xl p-6 space-y-4 space-x-8">
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
                <span className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground">
                {form.type === "attended" ? "Attended" : "Conducted"}
                </span>

                <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary">
                Order: <input
                type="number"
                className="input text-center w-10"
                value={form.order || 0}
                onChange={(e) =>
                    setForm({ ...form, order: Number(e.target.value) })
                }
                placeholder="Order"
                />

                </span>
            </div>
        </div>
        


      <textarea
        className="input w-72"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
        placeholder="Title"
      />

      <input
        className="input"
        value={form.organization}
        onChange={(e) =>
          setForm({ ...form, organization: e.target.value })
        }
        placeholder="Organization"
      />

      <input
        className="input"
        value={form.date}
        onChange={(e) => setForm({ ...form, date: e.target.value })}
        placeholder="Date"
      />

      <textarea
        className="input"
        value={form.description}
        onChange={(e) =>
          setForm({ ...form, description: e.target.value })
        }
        placeholder="Description"
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

export default WorkshopEditor;
