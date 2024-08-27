import { faHome, faNoteSticky } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex justify-between bg-nav p-4">
      <div className="flex items-center space-x-4">
        <div>
          <Link href="/">
            <FontAwesomeIcon icon={faHome} className="icon"></FontAwesomeIcon>
          </Link>
        </div>
        <div>
          <Link href="/test">
            <FontAwesomeIcon
              icon={faNoteSticky}
              className="icon"
            ></FontAwesomeIcon>
          </Link>
        </div>
      </div>
      <div>
        <p className="text-default-text">nielmoran97@gmail.com</p>
      </div>
    </nav>
  );
}
