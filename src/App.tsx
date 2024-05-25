import ImageDisplay from "./components/ImageDisplay";
import ToolBar from "./components/ToolBar";
import "./App.css";
import { useDispatch } from "react-redux";
import { useLayoutEffect } from "react";
import { setViewportDimensions } from "./features/viewport/viewportSlice";

function App() {
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    function updateSize() {
      dispatch(
        setViewportDimensions({
          width: window.innerWidth,
          height: window.innerHeight,
        })
      );
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, [dispatch]);
  return (
    <>
      <ImageDisplay />
      <ToolBar />
    </>
  );
}

export default App;
