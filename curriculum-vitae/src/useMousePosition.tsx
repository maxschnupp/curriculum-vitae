import {useEffect, useState} from "react";

interface IPosition {
    x: number,
    y: number,
}

export const useMousePosition = () : IPosition => {

    const [coordinates, setCoordinates] = useState<IPosition>({x:0, y:0});

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