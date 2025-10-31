import React, { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

const InvitesList = () => {
  const [invites, setInvites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInvites = async () => {
      const { data, error } = await (supabase as any)
        .from("confirmacion")
        .select("id, created_at, name, confirmation, number_guests, message");

      if (error) {
        console.error("Error fetching invites:", error);
      } else {
        setInvites(data || []);
      }
      setLoading(false);
    };

    fetchInvites();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Invites List</h1>
      {invites.length === 0 ? (
        <p>No invites found.</p>
      ) : (
        <table className="table-auto border-collapse border border-gray-300 w-full">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">ID</th>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Confirmation</th>
              <th className="border border-gray-300 px-4 py-2">
                Numero de pases
              </th>
              <th className="border border-gray-300 px-4 py-2">Message</th>
            </tr>
          </thead>
          <tbody>
            {invites.map((invite) => (
              <tr key={invite.id}>
                <td className="border border-gray-300 px-4 py-2">
                  {invite.id}
                </td>

                <td className="border border-gray-300 px-4 py-2">
                  {invite.name}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {invite.confirmation ? "Yes" : "No"}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {invite.number_guests}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {invite.message}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default InvitesList;
