/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useContact } from "@/hooks/useContact";
import { updateContact } from "@/services/contact.admin";

const ContactEditor = () => {
  const { data } = useContact();

  const [form, setForm] = useState({
    email: data?.email || "",
    phone: data?.phone || "",
    location: data?.location || "",
    linkedin: data?.linkedin || "",
    facebook: data?.facebook || "",
    quote: data?.quote || "",
  });

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async () => {
    await updateContact(form);
    alert("Contact updated");
  };

  if (!data) return null;

  return (
    <div className="space-y-4 max-w-xl">

      <input name="email" value={form.email} onChange={handleChange} placeholder="Email" />

      <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" />

      <input name="location" value={form.location} onChange={handleChange} placeholder="Location" />

      <input name="linkedin" value={form.linkedin} onChange={handleChange} placeholder="LinkedIn" />

      <input name="facebook" value={form.facebook} onChange={handleChange} placeholder="Facebook" />

      <textarea name="quote" value={form.quote} onChange={handleChange} placeholder="Quote" />

      <button onClick={handleSave}>
        Save
      </button>

    </div>
  );
};

export default ContactEditor;