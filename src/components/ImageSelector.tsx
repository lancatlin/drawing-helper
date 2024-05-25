import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileImage } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { setImage } from "../features/image/imageSlice";

export default function ImageSelector() {
  const dispatch = useDispatch();
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const [file] = e.target.files;
      console.log(file);
      if (file) {
        const objectURL = window.URL.createObjectURL(file);
        dispatch(setImage(objectURL));
      }
    }
  };
  return (
    <>
      <label className="hover:scale-150 transition duration-100 cursor-pointer">
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={onChange}
        />
        <FontAwesomeIcon icon={faFileImage} />
      </label>
    </>
  );
}
