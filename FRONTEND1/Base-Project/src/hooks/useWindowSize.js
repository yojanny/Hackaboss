import { useEffect, useState } from "react";

function useWindowSize() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const updateSize = () => {
    console.log("resize");
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", updateSize);

    return () => {
      console.log("Desmonta");
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  return { width, height };
}

export default useWindowSize;
