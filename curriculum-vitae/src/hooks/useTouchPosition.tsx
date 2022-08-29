import { first } from "lodash";
import { useEffect, useState } from "react";
import { Position } from "../types";

export const useTouchPosition = (): Position | undefined => {
  const [coordinates, setCoordinates] = useState<Position>();

  useEffect(() => {
    // 👇️ get global touch coordinates
    const handleWindowTouch = (event: TouchEvent) => {
      const firstTouch = first(event.touches);
      if (!firstTouch) return;
      setCoordinates({
        x: firstTouch.clientX,
        y: firstTouch.clientY,
      });
    };
    window.addEventListener("touchstart", handleWindowTouch);

    return () => {
      window.removeEventListener("touchstart", handleWindowTouch);
    };
  }, []);

  return coordinates;
};
