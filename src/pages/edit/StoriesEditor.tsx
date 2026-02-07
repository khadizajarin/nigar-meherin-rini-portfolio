/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { Trash2 } from "lucide-react";

import { useStoriesAdmin } from "@/hooks/useStoriesAdmin";
import { addStory, updateStory, deleteStory, Story } from "@/services/stories.admin";
import { useState } from "react";

const StoriesEditor = () => {
  const queryClient = useQueryClient();
  const { data: stories, isLoading } = useStoriesAdmin();

  if (isLoading) return <p>Loading...</p>;

  return (
    <section className="bg-card border rounded-2xl p-8 space-y-8">
      <h2 className="text-2xl font-bold">Stories</h2>

      {/* Add Story Button */}
      <button
        onClick={async () => {
          await addStory({
            title: "New Story",
            type: "",
            link: "",
            order: 99,
          });
          queryClient.invalidateQueries({ queryKey: ["stories-admin"] });
          toast.success("Story added");
        }}
        className="px-4 py-2 rounded-lg bg-primary text-primary-foreground"
      >
        + Add Story
      </button>

      {/* Stories List */}
      <div className="space-y-6">
        {stories?.map((story) => (
          <StoryItem key={story.id} story={story} queryClient={queryClient} />
        ))}
      </div>
    </section>
  );
};

const StoryItem = ({
  story,
  queryClient,
}: {
  story: Story;
  queryClient: any;
}) => {
  const [form, setForm] = useState(story);
  const [saving, setSaving] = useState(false);

  const save = async () => {
    try {
      setSaving(true);
      await updateStory(story.id, form);
      toast.success("Story updated");
      queryClient.invalidateQueries({ queryKey: ["stories-admin"] });
    } catch {
      toast.error("Update failed");
    } finally {
      setSaving(false);
    }
  };

  const remove = async () => {
    if (!confirm("Delete this story?")) return;

    try {
      await deleteStory(story.id);
      toast.success("Story deleted");
      queryClient.invalidateQueries({ queryKey: ["stories-admin"] });
    } catch {
      toast.error("Delete failed");
    }
  };

  return (
    <div className="border rounded-xl p-6 space-y-6 space-x-8">
      <input
        type="number"
        className="input w-24"
        value={form.order}
        onChange={(e) => setForm({ ...form, order: Number(e.target.value) })}
        placeholder="Order"
      />

      <textarea
        className="input"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
        placeholder="Title"
      />

      <input
        className="input"
        value={form.type}
        onChange={(e) => setForm({ ...form, type: e.target.value })}
        placeholder="Type"
      />

      <input
        className="input"
        value={form.link}
        onChange={(e) => setForm({ ...form, link: e.target.value })}
        placeholder="Link"
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

export default StoriesEditor;
