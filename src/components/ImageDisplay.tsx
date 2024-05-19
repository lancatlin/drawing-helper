import { useSelector } from "react-redux";
import { selectImage } from "../features/image/imageSlice";

export default function ImageDisplay() {
  const imageSrc = useSelector(selectImage);
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      <p>{imageSrc}</p>
      <img
        src="../../public/leopard.jpg"
        alt="image display"
        className="w-full h-full object-contain"
      />
    </div>
  );
}
