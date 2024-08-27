import Note from "../(models)/Note";
import DeleteNote from "./DeleteNote";

export default function NoteCard(note) {
  return (
    <div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
      <div className="flex mb-3">
        <div className="ml-auto">
          <DeleteNote id={Note._id} />
        </div>
      </div>
      <h4>{note.title}</h4>
      <hr className="h-px border-0 bg-page mb-2" />
      <p>{note.content}</p>
    </div>
  );
}
