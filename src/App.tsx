import ImageSelector from "./components/ImageSelector";
import "./App.css";

function App() {
  return (
    <div className="flex flex-col items-center h-screen mt-5">
      <h1 className="text-3xl mb-5">Drawing Helper</h1>
      <ImageSelector />
    </div>
  );
}

export default App;
