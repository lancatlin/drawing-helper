import { useSelector } from "react-redux";
import { selectImage } from "../features/image/imageSlice";

export default function ImageDisplay() {
  const imageSrc = useSelector(selectImage);
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      {imageSrc ? (
        <img
          src={imageSrc || ""}
          alt="image display"
          className="w-full h-full object-contain"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <p className="text-2xl">No image selected. Open one to view it.</p>
        </div>
      )}
    </div>
  );
}
