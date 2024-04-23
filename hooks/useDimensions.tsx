"use cilent";
import { useState, useEffect } from "react";

export default function useDimensions() {
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  function updateDimension() {
    const { innerWidth, innerHeight } = window;
    setDimension({ width: innerWidth, height: innerHeight });
  }

  useEffect(() => {
    updateDimension();

    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, []);

  return dimension;
}
