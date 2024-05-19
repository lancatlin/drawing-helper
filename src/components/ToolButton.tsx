import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export default function ToolButton({
  icon,
  onClick,
}: {
  icon: IconDefinition;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="hover:scale-150 transition duration-100"
    >
      <FontAwesomeIcon icon={icon} />
    </button>
  );
}
