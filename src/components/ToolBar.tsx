import ImageSelector from "./ImageSelector";

export default function ToolBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 flex flex-row items-center bg-white opacity-50 rounded-md mx-auto w-fit px-5 mb-5 hover:opacity-90 transition duration-100">
      <ImageSelector />
    </div>
  );
}
