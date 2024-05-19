import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileImage } from "@fortawesome/free-solid-svg-icons";

export default function ImageSelector() {
  return (
    <div className="flex flex-row gap-3 items-center">
      <button className="">
        <FontAwesomeIcon icon={faFileImage} />
      </button>
    </div>
  );
}
