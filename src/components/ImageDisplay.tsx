export default function ImageDisplay() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      <img
        src="../../public/leopard.jpg"
        alt="image display"
        className="w-full h-full object-contain"
      />
    </div>
  );
}
