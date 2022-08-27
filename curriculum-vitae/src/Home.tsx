import { useState, useRef, useEffect } from "react";
import Container from "./components/Container";
import Typography from "./components/Typography";
import { useMousePosition } from "./useMousePosition";
import Sun from "./components/Sun";
const Home = (): JSX.Element => {
  const [side, setSide] = useState<"left" | "right">("left");
  const [lightModeOn, setLightModeOn] = useState(true);
  const { x } = useMousePosition();
  const [sunMoving, setSunMoving] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const containerWidth = containerRef.current?.offsetWidth;

  const onContainerScroll = () => {
    if (sunMoving) return;
    if (side === "left" && !lightModeOn) setLightModeOn(true);
    if (side === "right" && lightModeOn) setLightModeOn(false);
  };

  useEffect(() => {
    if (!containerWidth) return;
    if (x < containerWidth / 2 && side !== "left") setSide("left");
    if (x > containerWidth / 2 && side !== "right") setSide("right");
  }, [x, containerWidth]);

  return (
    <Container
      lightModeOn={lightModeOn}
      ref={containerRef}
      onScroll={onContainerScroll}
    >
      {containerWidth && (
        <Sun
          isLightModeOn={lightModeOn}
          containerWidth={containerWidth}
          sunMoving={sunMoving}
          setSunMoving={setSunMoving}
        />
      )}
      <Typography size={"huge"}>
        Maximilian Schnupp - Full Stack Developer
      </Typography>
      <Typography size={"big"}>I Am A:</Typography>
      <Typography size={"medium"}>
        {`${containerWidth}, ${x}`}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Typography>
      <Typography size={"big"}>ETc Etc:</Typography>
      <Typography size={"medium"}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Typography>
      <Typography size={"big"}>ETc Etc:</Typography>
      <Typography size={"medium"}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Typography>
      <Typography size={"big"}>ETc Etc:</Typography>
      <Typography size={"medium"}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Typography>
    </Container>
  );
};

export default Home;
