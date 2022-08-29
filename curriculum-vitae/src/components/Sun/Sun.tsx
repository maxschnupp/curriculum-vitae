import React, { CSSProperties, useEffect, useState } from "react";
import {getOrderedPath} from './sunUtils';
export const SUN_DIAMETER = 200;
interface ISunProps {
  isLightModeOn: boolean;
  containerWidth: number;
  sunMoving: boolean;
  setSunMoving: React.Dispatch<React.SetStateAction<boolean>>
}

const Sun = ({ isLightModeOn, containerWidth, sunMoving, setSunMoving }: ISunProps): JSX.Element => {
  const [sunPositionTarget, setSunPositionTarget] = useState({ x: 0, y: 0 });

  const [previousIsLightModeOn, setPreviousIsLightModeOn] = useState(false);

  useEffect(() => {
    if (isLightModeOn !== previousIsLightModeOn) {
      moveSun();
      setPreviousIsLightModeOn(isLightModeOn);
    }
  }, [isLightModeOn]);


  const moveSun = () => {
    if (sunMoving) return;
    //moving sun should be a protected process so you don't get a mixed bunch of targets
    setSunMoving(true);
    console.log("movingSun");
    //get set of pathTargets
    const pathTargets = getOrderedPath(containerWidth, isLightModeOn);
    console.log({ pathTargets });
    //every 100 milliseconds give the sun a new target
    pathTargets.forEach((target, idx) => {
      setTimeout(() => {
        console.log("changingTargets");
        setSunPositionTarget(target);
        console.log(sunPositionTarget.x);
        if (idx === pathTargets.length - 1) setSunMoving(false);
      }, idx * 100);
    });
  };

  const style: CSSProperties = {
    height: `${SUN_DIAMETER}px`,
    width: `${SUN_DIAMETER}px`,
    backgroundColor: !isLightModeOn ? "#9C1304" : "#FFDF00",
    transition: "top 0.1s ease, left 0.1s ease, background-color 2s ease",
    borderRadius: "50%",
    top: `${300 - sunPositionTarget.y}px`,
    left: `${sunPositionTarget.x}px`,
    position: "fixed",
    zIndex: -1,
    padding: 0,
  };
  return <div style={style} />;
};

export default Sun;
