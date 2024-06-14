import { useSelector } from "react-redux";
import { selectGrid } from "../features/grid/gridSlice";
import { selectDisplayDimensions } from "../features/image/imageSlice";

export default function GridDisplay() {
  const grid = useSelector(selectGrid);
  const { width, height } = useSelector(selectDisplayDimensions);
  return (
    <div
      className="absolute top-0 left-0 w-full h-full border-2 border-red-500"
      style={{
        backgroundSize: `${width / grid.cols}px ${height / grid.rows}px`, // Adjust the grid size as needed
        backgroundImage:
          "linear-gradient(to right, rgba(255, 0, 0, 1) 2px, transparent 2px), linear-gradient(to bottom, rgba(255, 0, 0, 1) 2px, transparent 2px)",
      }}
    ></div>
  );
}
