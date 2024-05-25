import {
  faRuler,
  faMagnifyingGlass,
  faBorderAll,
} from "@fortawesome/free-solid-svg-icons";
import ToolButton from "./ToolButton";
import ImageSelector from "./ImageSelector";
import GridPopup from "./GridPopup";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectViewport } from "../features/viewport/viewportSlice";

export default function ToolBar() {
  const [toggleGrid, setToggleGrid] = useState(true);
  const viewport = useSelector(selectViewport);
  const onClick = () => {
    setToggleGrid(!toggleGrid);
  };
  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 flex flex-row gap-3 py-2 items-center bg-white opacity-50 rounded-md mx-auto w-fit px-5 mb-5 hover:opacity-90 transition duration-100">
        <ImageSelector />
        <div className="w-px h-6 bg-gray-400"></div>
        <ToolButton icon={faMagnifyingGlass} />
        <ToolButton icon={faBorderAll} onClick={onClick} />
        <ToolButton icon={faRuler} />
        width: {viewport.width} height: {viewport.height}
      </div>
      <GridPopup toggle={toggleGrid} />
    </>
  );
}
