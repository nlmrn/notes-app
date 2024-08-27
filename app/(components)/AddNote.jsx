"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import SaveNote from "./SaveNote";
import DeleteNote from "./DeleteNote";

export default function NoteForm() {
  const router = useRouter();
  async function handleSubmit(e) {
    const res = await fetch("/api/Notes", {
      method: "POST",
      body: JSON.stringify({ formData }),
      "Content-Type": "application/json",
    });
    if (!res.ok) {
      throw new Error("Failed to create ticket");
    }
  }

  function handleChange(e) {
    const value = e.target.value;
    const name = e.target.name;

    setFormData(function (prevState) {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  router.refresh();
  router.push("/");

  function resizeTextArea(e) {
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
  }

  function moveToContent(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      document.getElementById("content").focus();
    }
  }

  const startingNoteData = {
    title: "",
    content: "",
  };

  const [formData, setFormData] = useState(startingNoteData);
  return (
    <div className="flex justify-center">
      <form
        className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2 w-full max-w-2xl"
        onSubmit={handleSubmit}
      >
        <div className="flex mb-3">
          <button type="submit">
            <SaveNote />
          </button>
          <div className="ml-auto">
            <DeleteNote />
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
            onInput={resizeTextArea}
            value={formData.content}
          ></textarea>
        </div>
      </form>
    </div>
  );
}
