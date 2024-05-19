import {
  faBorderAll,
  faRuler,
  faMagnifyingGlass,
  faFileImage,
} from "@fortawesome/free-solid-svg-icons";
import ToolButton from "./ToolButton";

export default function ToolBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 flex flex-row gap-3 py-2 items-center bg-white opacity-50 rounded-md mx-auto w-fit px-5 mb-5 hover:opacity-90 transition duration-100">
      <ToolButton icon={faFileImage} />
      <div className="w-px h-6 bg-gray-400"></div>
      <ToolButton icon={faBorderAll} />
      <ToolButton icon={faRuler} />
      <ToolButton icon={faMagnifyingGlass} />
    </div>
  );
}
