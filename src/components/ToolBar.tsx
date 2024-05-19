import {
  faBorderAll,
  faRuler,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import ToolButton from "./ToolButton";
import ImageSelector from "./ImageSelector";

export default function ToolBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 flex flex-row gap-3 py-2 items-center bg-white opacity-50 rounded-md mx-auto w-fit px-5 mb-5 hover:opacity-90 transition duration-100">
      <ImageSelector />
      <div className="w-px h-6 bg-gray-400"></div>
      <ToolButton icon={faBorderAll} />
      <ToolButton icon={faRuler} />
      <ToolButton icon={faMagnifyingGlass} />
    </div>
  );
}
