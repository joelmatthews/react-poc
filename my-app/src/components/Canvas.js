import { useEffect, useRef } from "react";

import classes from "./Canvas.module.css";

const Canvas = ({ draw, height, width }) => {
  const canvas = useRef();
  useEffect(() => {
    const context = canvas.current.getContext("2d");
    draw(context);
  }, [draw]);
  return (
    <canvas
      className={classes["alert-canvas"]}
      ref={canvas}
      height={height}
      width={width}
    >
    </canvas>
  );
};

export default Canvas;
