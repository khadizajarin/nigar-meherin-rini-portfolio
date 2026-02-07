/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";
import { useProjectsAdmin } from "@/hooks/useProjectsAdmin";
import {
  addProject,
  updateProject,
  deleteProject,
  Project,
} from "@/services/projects.admin";

const ProjectsEditor = () => {
  const queryClient = useQueryClient();
  const { data, isLoading } = useProjectsAdmin();

  if (isLoading) return <p>Loading...</p>;

  return (
    <section className="bg-card border rounded-2xl p-8 space-y-8">
      <h2 className="text-2xl font-bold">Projects</h2>

      <button
        onClick={async () => {
          await addProject();
          queryClient.invalidateQueries({ queryKey: ["projects-admin"] });
          toast.success("Project added");
        }}
        className="px-4 py-2 rounded-lg bg-primary text-primary-foreground"
      >
        + Add Project
      </button>

      <div className="space-y-6">
        {data?.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

const ProjectItem = ({ project }: { project: Project }) => {
  const [form, setForm] = useState<Project>(project);
  const [saving, setSaving] = useState(false);
  const queryClient = useQueryClient();

  const save = async () => {
    try {
      setSaving(true);
      await updateProject(project.id, form);
      toast.success("Project updated");
      queryClient.invalidateQueries({ queryKey: ["projects-admin"] });
    } catch {
      toast.error("Update failed");
    } finally {
      setSaving(false);
    }
  };

  const remove = async () => {
    if (!confirm("Delete this project?")) return;
    try {
      await deleteProject(project.id);
      toast.success("Project deleted");
      queryClient.invalidateQueries({ queryKey: ["projects-admin"] });
    } catch {
      toast.error("Delete failed");
    }
  };

  return (
    <div className="border rounded-xl p-6 space-y-4">
      <input
        className="input w-full"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
        placeholder="Title"
      />

      <input
        className="input w-full"
        value={form.organization}
        onChange={(e) => setForm({ ...form, organization: e.target.value })}
        placeholder="Organization"
      />

      <input
        className="input w-full"
        value={form.period}
        onChange={(e) => setForm({ ...form, period: e.target.value })}
        placeholder="Period"
      />

      <textarea
        className="input w-full"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
        placeholder="Description"
      />

      <input
        className="input w-full"
        value={form.link || ""}
        onChange={(e) => setForm({ ...form, link: e.target.value })}
        placeholder="Link"
      />

      <input
        className="input w-full"
        value={form.icon}
        onChange={(e) => setForm({ ...form, icon: e.target.value })}
        placeholder="Icon (Video, Mic, Newspaper, etc.)"
      />

      <input
        className="input w-full"
        type="number"
        value={form.order}
        onChange={(e) => setForm({ ...form, order: Number(e.target.value) })}
        placeholder="Order"
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

export default ProjectsEditor;
