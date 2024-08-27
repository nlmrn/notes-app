import { faTrash, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DeleteNote() {
  return (
    <div>
      <FontAwesomeIcon
        icon={faTrash}
        className="text-gray-700 hover:cursor-pointer hover:text-gray-800"
      ></FontAwesomeIcon>
    </div>
  );
}
