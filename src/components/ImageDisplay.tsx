import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  selectDisplayDimensions,
  selectImage,
  setDimensions,
} from "../features/image/imageSlice";
import { selectViewport, zoom } from "../features/viewport/viewportSlice";
import GridDisplay from "./GridDisplay";

export default function ImageDisplay() {
  const imageSrc = useSelector(selectImage);
  const viewport = useSelector(selectViewport);
  const displayDimensions = useSelector(selectDisplayDimensions);
  const dispatch = useDispatch();
  const [isDragging, setIsDragging] = useState(false);

  const handleWheel = (e: React.WheelEvent) => {
    dispatch(zoom({ x: e.clientX, y: e.clientY, delta: e.deltaY }));
  };
  const imgOnLoad = (e: React.SyntheticEvent) => {
    console.log(e.target);
    const elem = e.target as HTMLImageElement;
    dispatch(
      setDimensions({
        width: elem.naturalWidth,
        height: elem.naturalHeight,
      })
    );
  };
  return (
    <div
      className="fixed top-0 left-0 border-2 border-green-500"
      style={{
        width: displayDimensions.width,
        height: displayDimensions.height,
        transformOrigin: "0 0",
        transform: `translate(${viewport.x}px, ${viewport.y}px) scale(${viewport.scale})`,
      }}
      onWheel={handleWheel}
      onClick={() => console.log("clicked image")}
      onMouseDown={(ev) => {
        setIsDragging(true);
        console.log("mouse down", ev);
      }}
      onMouseUp={(ev) => {
        setIsDragging(false);
        console.log("mouse up", ev);
      }}
      onMouseMove={(ev) => {
        if (isDragging) {
          console.log("mouse move", ev);
        }
      }}
    >
      <img src={imageSrc ?? ""} alt="image display" onLoad={imgOnLoad} />
      <GridDisplay />
    </div>
  );
}
