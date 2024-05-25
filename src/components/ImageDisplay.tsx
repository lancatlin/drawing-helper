import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectImage, setDimensions } from "../features/image/imageSlice";
import {
  selectViewport,
  zoomIn,
  zoomOut,
} from "../features/viewport/viewportSlice";
import GridDisplay from "./GridDisplay";

export default function ImageDisplay() {
  const imageSrc = useSelector(selectImage);
  const viewport = useSelector(selectViewport);
  const screenElement = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();

  const handleWheel = (e: React.WheelEvent) => {
    if (e.deltaY < 0) {
      dispatch(zoomIn(e.deltaY));
    } else {
      dispatch(zoomOut(e.deltaY));
    }
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
      className="fixed top-0 left-0 w-full h-full -z-10"
      onWheel={handleWheel}
      ref={screenElement}
    >
      {imageSrc ? (
        <>
          <img
            src={imageSrc || ""}
            alt="image display"
            className="w-fit h-fit object-fit"
            style={{
              transform: `scale(${viewport.scale}) translate(${viewport.x}px, ${viewport.y}px)`,
            }}
            onLoad={imgOnLoad}
          />
          <GridDisplay />
        </>
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <p className="text-2xl">No image selected. Open one to view it.</p>
        </div>
      )}
    </div>
  );
}
