import { fill, reverse, zip } from "lodash";
import { Position } from "../../types";
import { SUN_DIAMETER } from "./Sun";

const PADDING_PER_SIDE = 20;

const getLengthOfPathFromWidth = (containerWidth: number) =>
  containerWidth - 2 * PADDING_PER_SIDE - SUN_DIAMETER;

const getYFromX = (containerWidth: number, x: number) => {
  const pathLength = getLengthOfPathFromWidth(containerWidth);
  const xAdjustedToPathStart = x - PADDING_PER_SIDE;
  const xNormalisedToPathLength = xAdjustedToPathStart / pathLength;
  const radians = xNormalisedToPathLength * Math.PI;
  const sunCurve = Math.sin(radians);
  return sunCurve * 200;
};

const getNewPath = (containerWidth: number): Position[] => {

  const pathLength = getLengthOfPathFromWidth(containerWidth);
  const stepSize = pathLength / 15;

  //get xs from stepSize shift to allow padding and distance to circle center
  const allXs: number[] = fill(Array(15), 0).map(
    (_: any, idx: number) => idx * stepSize + PADDING_PER_SIDE
  );

  // sample the scaled sin curve at x values
  const allYs: number[] = allXs.map((elem: number) =>
    getYFromX(containerWidth, elem)
  );

  const path = zip(allXs, allYs).map(
    (coord: [number | undefined, number | undefined]) => ({
      x: coord[0],
      y: coord[1],
    })
  ) as Position[];
  return path;
};

export const getOrderedPath = (
  containerWidth: number,
  isLightModeOn: boolean
): Position[] => {
  const pathUnordered = getNewPath(containerWidth);
  if (!isLightModeOn) return pathUnordered;
  return reverse(pathUnordered);
};
