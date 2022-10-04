import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setWidth } from "./features/userSlice/userSlice";
import Router from "./routing/route";

function App() {
  const dispatch = useDispatch();
  const [width, changeWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => changeWidth(window.innerWidth));
    return () =>
      window.removeEventListener("resize", () =>
        changeWidth(window.innerWidth)
      );
  }, []);

  useEffect(() => {
    dispatch(setWidth(width));
  }, [width]);

  return (
    <div className="App font-roboto">
      <Router />
    </div>
  );
}

export default App;
