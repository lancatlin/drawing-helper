import ImageSelector from "./ImageSelector";

export default function ToolBar() {
  return (
    <div className="flex flex-col items-center mt-5">
      <h1 className="text-3xl mb-5">Drawing Helper</h1>
      <ImageSelector />
    </div>
  );
}
