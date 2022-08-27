import React, { CSSProperties, useEffect, useState } from "react";
import { fill, reverse, zip } from "lodash";

interface ISunProps {
  isLightModeOn: boolean;
  containerWidth: number;
  sunMoving: boolean;
  setSunMoving: React.Dispatch<React.SetStateAction<boolean>>
}

interface ISunPosition {
  x: number;
  y: number;
}

const Sun = ({ isLightModeOn, containerWidth, sunMoving, setSunMoving }: ISunProps): JSX.Element => {
  const [sunPositionTarget, setSunPositionTarget] = useState({ x: 100, y: 0 });
  
  const pastCenterPoint = sunPositionTarget.x > containerWidth / 2;

  const [previousIsLightModeOn, setPreviousIsLightModeOn] =
    useState<boolean>(false);

  useEffect(() => {
    if (isLightModeOn !== previousIsLightModeOn) {
      moveSun();
      setPreviousIsLightModeOn(isLightModeOn);
    }
  }, [isLightModeOn]);

  const getYOffset = (containerWidth: number, x: number) => {
    const xWidthAdjusted = x / (containerWidth - 200);
    const radians = xWidthAdjusted * Math.PI;
    const sunCurve = Math.sin(radians);
    return sunCurve * 200;
  };

  const getNewPath = (containerWidth: number): ISunPosition[] => {
    const totalDistance = containerWidth - 300;
    const stepSize = totalDistance / 15;
    console.log({ totalDistance, stepSize });
    const allXs: number[] = fill(Array(15), 0).map(
      (_ : any, idx: number) => idx * stepSize + 100
    );
    console.log({ allXs });
    const allYs: number[] = allXs.map((elem: number) =>
      getYOffset(containerWidth, elem)
    );
    const path = zip(allXs, allYs).map(
      (coord: [number | undefined, number | undefined]) => ({
        x: coord[0],
        y: coord[1],
      })
    ) as ISunPosition[];
    return path;
  };

  const getOrderedPath = (
    containerWidth: number,
    isLightModeOn: boolean
  ): ISunPosition[] => {
    const pathUnordered = getNewPath(containerWidth);
    if (!isLightModeOn) return pathUnordered;
    return reverse(pathUnordered);
  };

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
    height: "200px",
    width: "200px",
    backgroundColor: pastCenterPoint ? "grey" : "#FFDF00",
    transition: "all 0.1s ease",
    borderRadius: "50%",
    top: `${300 - sunPositionTarget.y}px`,
    left: `${sunPositionTarget.x}px`,
    position: "fixed",
    zIndex: -1,
  };
  return <div style={style} />;
};

export default Sun;
