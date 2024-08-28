"use client";

import DeleteNote from "./DeleteNote";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

const NoteCard = ({ note, onDelete }) => {
  const textareaRef = useRef(null);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    if (formData == startingNoteData) {
    } else {
      const res = await fetch(`api/Notes/${note._id}`, {
        method: "PUT",
        body: JSON.stringify({ formData }),
        "Content-Type": "application/json",
      });
    }

    router.refresh();
  };

  const resizeTextArea = (textarea) => {
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  const moveToContent = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const textarea = textareaRef.current;
      textarea.focus();
      textarea.setSelectionRange(textarea.value.length, textarea.value.length);
    }
  };

  const startingNoteData = {
    title: note.title,
    content: note.content,
  };

  const [formData, setFormData] = useState(startingNoteData);

  return (
    <form
      onBlur={handleSubmit}
      className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2"
    >
      <div className="flex mb-3">
        <div className="ml-auto">
          <DeleteNote id={note._id} onDelete={onDelete} />
        </div>
      </div>
      <input
        type="text"
        name="title"
        id="title"
        placeholder="Title"
        onChange={handleChange}
        onKeyDown={moveToContent}
        value={formData.title}
      />
      <hr className="h-px border-0 bg-page my-2" />
      <div className="relative overflow-hidden max-h-80">
        <textarea
          name="content"
          id="content"
          placeholder="Note"
          required={true}
          className="max-h-60"
          onChange={handleChange}
          onInput={(e) => resizeTextArea(e.target)}
          ref={textareaRef}
          value={formData.content}
        ></textarea>
      </div>
    </form>
  );
};

export default NoteCard;
