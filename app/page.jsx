import NoteCard from "./(components)/NoteCard";
import AddNote from "./(components)/AddNote";

async function getNotes() {
  try {
    const res = await fetch("http://localhost:3000/api/Notes", {
      cache: "no-store",
    });
  } catch (error) {
    console.log("Error loading notes");
  }
}

const { notes } = await getNotes();

export default function page() {
  return (
    <div className="px-10 py-5">
      <AddNote />
      <div className="md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <NoteCard />
      </div>
    </div>
  );
}
