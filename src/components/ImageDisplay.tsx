import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  selectDisplayDimensions,
  selectImage,
  setDimensions,
} from "../features/image/imageSlice";
import {
  selectViewport,
  zoom,
  setTranslation,
} from "../features/viewport/viewportSlice";
import GridDisplay from "./GridDisplay";

export default function ImageDisplay() {
  const imageSrc = useSelector(selectImage);
  const viewport = useSelector(selectViewport);
  const displayDimensions = useSelector(selectDisplayDimensions);
  const dispatch = useDispatch();
  const [isDragging, setIsDragging] = useState(false);
  const [startPoint, setStartPoint] = useState([0, 0]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartPoint([e.clientX - viewport.x, e.clientY - viewport.y]);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setStartPoint([0, 0]);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      dispatch(
        setTranslation({
          x: e.clientX - startPoint[0],
          y: e.clientY - startPoint[1],
        })
      );
    }
  };

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
      className="fixed top-0 left-0"
      style={{
        width: displayDimensions.width,
        height: displayDimensions.height,
        transformOrigin: "0 0",
        transform: `translate(${viewport.x}px, ${viewport.y}px) scale(${viewport.scale})`,
      }}
      onWheel={handleWheel}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseUp}
    >
      <img src={imageSrc ?? ""} alt="image display" onLoad={imgOnLoad} />
      <GridDisplay />
    </div>
  );
}
