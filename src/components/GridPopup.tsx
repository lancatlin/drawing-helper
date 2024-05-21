export default function GridPopup({ toggle }: { toggle: boolean }) {
  return (
    <div
      className={`absolute bottom-20 left-1/2 -translate-x-1/2 bg-white opacity-90 rounded-lg p-5 transition duration-200 text-center ${
        toggle ? "opacity-90" : "opacity-0"
      }`}
    >
      <p>Setup Grid</p>
      <input
        type="number"
        min={1}
        max={6}
        className="w-10 border-2 rounded-md pl-2"
      />
      x
      <input
        type="number"
        min={1}
        max={6}
        className="w-10 border-2 rounded-md pl-2"
      />
    </div>
  );
}
