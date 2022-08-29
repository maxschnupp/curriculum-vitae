import {useEffect, useState} from "react";
import { Position } from "../types";

export const useMousePosition = () : Position => {

    const [coordinates, setCoordinates] = useState<Position>({x:0, y:0});

    useEffect(() => {
        // 👇️ get global mouse coordinates
        const handleWindowMouseMove = (event : MouseEvent) => {
          setCoordinates({
            x: event.clientX,
            y: event.clientY,
          });
        };
        window.addEventListener('mousemove', handleWindowMouseMove);
    
        return () => {
          window.removeEventListener('mousemove', handleWindowMouseMove);
        };
      }, []);



    return coordinates

}