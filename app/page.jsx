import AddNote from "./(components)/AddNote";
import NotesList from "./(components)/NotesList";

export default async function page() {
  async function getNotes() {
    try {
      const res = await fetch("http://localhost:3000/api/Notes", {
        cache: "no-store",
      });

      return res.json();
    } catch (error) {
      console.log("Error loading notes");
    }
  }

  const data = await getNotes();

  if (!data?.notes) {
    return (
      <div>
        <AddNote />
      </div>
    );
  }

  const notes = data.notes;

  return (
    <div className="px-10 py-5">
      <AddNote />
      <NotesList notes={notes} />
    </div>
  );
}
