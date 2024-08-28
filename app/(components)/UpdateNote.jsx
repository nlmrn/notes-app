"use client";

import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import SaveNote from "./SaveNote";

const UpdateNote = () => {
  const router = useRouter();
  const textareaRef = useRef(null);

  const handleSubmit = async (e) => {
    const res = await fetch("/api/Notes", {
      method: "POST",
      body: JSON.stringify({ formData }),
      "Content-Type": "application/json",
    });
    if (!res.ok) {
      throw new Error("Failed to create note");
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData(function (prevState) {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const resizeTextArea = () => {
    const textarea = textareaRef.current;
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
    title: "",
    content: "",
  };

  const [formData, setFormData] = useState(startingNoteData);

  useEffect(() => {
    resizeTextArea();
  }, [formData.content]);

  return (
    <div className="flex justify-center">
      <form
        className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2 w-full max-w-2xl"
        onSubmit={handleSubmit}
        method="POST"
      >
        <div className="flex mb-3">
          <button type="submit">
            <SaveNote />
          </button>
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
            ref={textareaRef}
            id="content"
            placeholder="Note"
            required={true}
            className="max-h-60"
            onChange={handleChange}
            onInput={resizeTextArea}
            value={formData.content}
          ></textarea>
        </div>
      </form>
    </div>
  );
};

export default UpdateNote;
