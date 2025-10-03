import React, { useState } from "react";
import { supabase } from "@/integrations/supabase/client";

const Update = () => {
  const [name, setName] = useState("");
  const [numberGuests, setNumberGuests] = useState<number | "">("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);

    if (!name.trim()) {
      setMessage("Please enter a name.");
      return;
    }

    const guests = Number(numberGuests) || 0;

    setLoading(true);
    try {
      const { data, error } = await (supabase as any)
        .from("confirmacion")
        .insert([
          {
            name: name.trim(),
            number_guests: guests,
          },
        ]);

      if (error) {
        console.error("Insert error:", error);
        setMessage("Error saving data. Please try again.");
      } else {
        setMessage("Saved successfully.");
        setName("");
        setNumberGuests("");
      }
    } catch (err) {
      console.error(err);
      setMessage("Unexpected error. Check console.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">Update confirmation</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full name"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Numero de pases</label>
          <input
            type="number"
            min={0}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            value={numberGuests as any}
            onChange={(e) => setNumberGuests(e.target.value === "" ? "" : Number(e.target.value))}
            placeholder="0"
          />
        </div>

        <div>
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md"
            disabled={loading}
          >
            {loading ? "Saving..." : "Save"}
          </button>
        </div>

        {message && <p className="text-sm text-gray-700">{message}</p>}
      </form>
    </div>
  );
};

export default Update;
