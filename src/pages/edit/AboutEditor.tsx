/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState, useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { useAboutAdmin } from "@/hooks/useAboutAdmin";
import { updateAbout } from "@/services/about.admin";

const AboutEditor = () => {
  const { data, isLoading } = useAboutAdmin();
  const queryClient = useQueryClient();

  const [form, setForm] = useState<any>(null);

  // 🔑 Sync state when data arrives
  useEffect(() => {
    if (data) {
      setForm(data);
    }
  }, [data]);

  if (isLoading) return <p>Loading...</p>;
  if (!form) return null;

  const save = async () => {
    await updateAbout(form);
    toast.success("About updated");

    queryClient.invalidateQueries({ queryKey: ["about-admin"] });
    queryClient.invalidateQueries({ queryKey: ["about"] });
  };

  return (
    <section className="bg-card border rounded-2xl p-8 space-y-6">
      <h2 className="text-2xl font-bold">Hero Section</h2>

      <input
        className="input w-96"
        value={form.tagline}
        onChange={(e) =>
          setForm({ ...form, tagline: e.target.value })
        }
        placeholder="Hero tagline"
      />

      <textarea
        className="input w-full"
        value={form.heroIntro}
        onChange={(e) =>
          setForm({ ...form, heroIntro: e.target.value })
        }
        rows={4}
        placeholder="Hero intro text"
      />

      <h2 className="text-2xl font-bold">About Section</h2>

      <p>Paragraphs (separate by blank line)</p>
      <textarea
        className="input w-full"
        value={form.paragraphs.join("\n\n")}
        onChange={(e) =>
          setForm({
            ...form,
            paragraphs: e.target.value.split("\n\n"),
          })
        }
        rows={10}
      />

      <input
        className="input"
        value={form.location}
        onChange={(e) =>
          setForm({ ...form, location: e.target.value })
        }
        placeholder="Location"
      />

      <input
        className="input"
        value={form.birthDate}
        onChange={(e) =>
          setForm({ ...form, birthDate: e.target.value })
        }
        placeholder="Birth Date"
      />

      <p>Languages (one per line)</p>
      <textarea
        className="input h-44"
        value={form.languages.join("\n")}
        onChange={(e) =>
          setForm({
            ...form,
            languages: e.target.value.split("\n"),
          })
        }
      />

       

      <button
        onClick={save}
        className="px-6 py-2 rounded-lg bg-primary text-primary-foreground"
      >
        Save
      </button>

    </section>
  );
};

export default AboutEditor;