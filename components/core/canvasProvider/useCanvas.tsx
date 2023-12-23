import { useContext } from "react";
import { CanvasContext } from "./CanvasProvider";

function useCanvas() {
       let canvasContext=  useContext(CanvasContext);
       return canvasContext;
};

export default useCanvas;