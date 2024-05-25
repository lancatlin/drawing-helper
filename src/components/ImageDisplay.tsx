import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectDisplayDimensions,
  selectImage,
  setDimensions,
} from "../features/image/imageSlice";
import {
  selectViewport,
  zoomIn,
  zoomOut,
} from "../features/viewport/viewportSlice";
import GridDisplay from "./GridDisplay";

export default function ImageDisplay() {
  const imageSrc = useSelector(selectImage);
  const viewport = useSelector(selectViewport);
  const displayDimensions = useSelector(selectDisplayDimensions);
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
      className="w-screen h-screen flex flex-col justify-center items-center overflow-hidden"
      onWheel={handleWheel}
    >
      <div className="w-fit h-fit relative -z-10 border-2 border-green-500">
        {imageSrc ? (
          <>
            <img
              src={imageSrc}
              alt="image display"
              style={{
                width: displayDimensions.width,
                height: displayDimensions.height,
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
    </div>
  );
}
