import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileImage } from "@fortawesome/free-solid-svg-icons";

export default function ImageSelector() {
  return (
    <>
      <label className="hover:scale-150 transition duration-100 cursor-pointer">
        <input type="file" className="hidden" />
        <FontAwesomeIcon icon={faFileImage} />
      </label>
    </>
  );
}
