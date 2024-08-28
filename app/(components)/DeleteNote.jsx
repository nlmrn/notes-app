"use client";

import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

export default function DeleteNote({ id, onDelete }) {
  const router = useRouter();
  async function deleteNote() {
    const res = await fetch(`http://localhost:3000/api/Notes/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      router.refresh();
    }
  }

  return (
    <div>
      <FontAwesomeIcon
        icon={faTrash}
        className="text-gray-700 hover:cursor-pointer hover:text-gray-800"
        onClick={deleteNote}
      ></FontAwesomeIcon>
    </div>
  );
}
