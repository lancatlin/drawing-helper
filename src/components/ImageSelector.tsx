export default function ImageSelector() {
  return (
    <div className="flex flex-row gap-3 items-center">
      <label htmlFor="image" className="">
        Upload Image
      </label>
      <input
        id="image"
        type="file"
        accept="image/*"
        className="rounded-md border-2 border-gray-300"
      />
    </div>
  );
}
