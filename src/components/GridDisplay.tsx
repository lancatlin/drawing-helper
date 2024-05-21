import { useSelector } from "react-redux";
import { selectViewport } from "../features/viewport/viewportSlice";
import { selectGrid } from "../features/grid/gridSlice";
import { selectDimensions } from "../features/image/imageSlice";

export default function GridDisplay() {
  const viewport = useSelector(selectViewport);
  const grid = useSelector(selectGrid);
  const { width, height } = useSelector(selectDimensions);
  return (
    <div
      className="absolute top-0 left-0 w-full h-full border-2 border-red-500"
      style={{
        backgroundSize: `${width / grid.cols}px ${height / grid.rows}px`, // Adjust the grid size as needed
        backgroundImage:
          "linear-gradient(to right, rgba(255, 0, 0, 1) 2px, transparent 2px), linear-gradient(to bottom, rgba(255, 0, 0, 1) 2px, transparent 2px)",
        transform: `scale(${viewport.scale}) translate(${viewport.x}px, ${viewport.y}px)`,
      }}
    ></div>
  );
}
