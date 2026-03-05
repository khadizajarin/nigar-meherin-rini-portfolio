/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { useGalleryAdmin } from "@/hooks/useGalleryAdmin";
import {
  addGalleryItem,
  updateGalleryItem,
  deleteGalleryItem,
} from "@/services/gallery.admin";
import { uploadToCloudinary } from "../../utils/cloudinary";

const PhotoGalleryEditor = () => {
  const queryClient = useQueryClient();
  const { data, isLoading } = useGalleryAdmin();

  if (isLoading) return <p>Loading...</p>;

  return (
    <section className="bg-card border rounded-2xl p-8 space-y-8">
      <h2 className="text-2xl font-bold">Gallery</h2>

      <button
        onClick={async () => {
          await addGalleryItem();
          queryClient.invalidateQueries({ queryKey: ["gallery-admin"] });
          toast.success("Photo added");
        }}
        className="px-4 py-2 rounded-lg bg-primary text-primary-foreground"
      >
        + Add Photo
      </button>

      <div className="space-y-6">
        {data?.map((item) => (
          <GalleryItemEditor key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

const GalleryItemEditor = ({ item }: any) => {
  const [form, setForm] = useState(item);
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);

  const queryClient = useQueryClient();

  const handleUpload = async (file: File) => {
    try {
      setUploading(true);

      const imageUrl = await uploadToCloudinary(file, "portfolio-gallery");

      setForm((prev: any) => ({
        ...prev,
        imageUrl: imageUrl,
      }));

      toast.success("Image uploaded");
    } catch (err: any) {
      toast.error(err.message || "Upload failed");
    } finally {
      setUploading(false);
    }
  };

  const save = async () => {
    if (!form.imageUrl) {
      toast.error("Upload an image first");
      return;
    }

    try {
      setSaving(true);

      await updateGalleryItem(item.id, form);

      toast.success("Updated");

      queryClient.invalidateQueries({ queryKey: ["gallery-admin"] });
    } catch {
      toast.error("Update failed");
    } finally {
      setSaving(false);
    }
  };

  const remove = async () => {
    if (!confirm("Delete this photo?")) return;

    try {
      await deleteGalleryItem(item.id);

      toast.success("Deleted");

      queryClient.invalidateQueries({ queryKey: ["gallery-admin"] });
    } catch {
      toast.error("Delete failed");
    }
  };

  return (
    <div className="border rounded-xl p-6 space-y-4 space-x-6">

      <textarea
        className="input"
        value={form.title}
        onChange={(e) =>
          setForm((prev: any) => ({ ...prev, title: e.target.value }))
        }
        placeholder="Title"
      />

      <textarea
        className="input"
        value={form.caption}
        onChange={(e) =>
          setForm((prev: any) => ({ ...prev, caption: e.target.value }))
        }
        placeholder="Caption"
      />

      {/* Image Upload */}
      <input
        type="file"
        accept="image/*"
        onChange={(e) => {
          if (!e.target.files?.[0]) return;
          handleUpload(e.target.files[0]);
        }}
      />

      {uploading && (
        <p className="text-sm text-muted-foreground">Uploading image...</p>
      )}

      {form.imageUrl && (
        <img
          src={form.imageUrl}
          alt="Preview"
          className="w-32 h-32 object-cover rounded-md"
        />
      )}

      <select
        className="input"
        value={form.size}
        onChange={(e) =>
          setForm((prev: any) => ({ ...prev, size: e.target.value }))
        }
      >
        <option value="normal">Normal</option>
        <option value="tall">Tall</option>
        <option value="wide">Wide</option>
      </select>

      <input
        type="number"
        className="input"
        value={form.order}
        onChange={(e) =>
          setForm((prev: any) => ({
            ...prev,
            order: Number(e.target.value),
          }))
        }
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
          disabled={saving || uploading}
          className="px-6 py-2 rounded-lg bg-primary text-primary-foreground disabled:opacity-60"
        >
          {saving ? "Saving..." : "Save"}
        </button>
      </div>
    </div>
  );
};

export default PhotoGalleryEditor;