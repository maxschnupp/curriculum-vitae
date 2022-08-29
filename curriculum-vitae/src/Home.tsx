import { useState, useRef, useEffect } from "react";
import Container from "./components/Container";
import Typography from "./components/Typography";
import { useMousePosition } from "./useMousePosition";
import Sun from "./components/Sun";
import Content from "./components/Content";
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
      <div
        style={{
          writingMode: "vertical-rl",
          textOrientation: "upright",
          position: "absolute",
          fontSize: '12px',
          left: 0,
          maxWidth: '20px',
          top: '15%',
          fontFamily: "Roboto Mono, monospaced",
        }}
      >
        scroll on the left for english
      </div>
      <div
        style={{
          writingMode: "vertical-rl",
          textOrientation: "upright",
          position: "absolute",
          fontSize: '12px',
          right: 0,
          maxWidth: '20px',
          top: '15%',
          fontFamily: "Roboto Mono, monospaced",
        }}
      >
        rechts scrollen für deutsch
      </div>
      {containerWidth && (
        <Sun
          isLightModeOn={lightModeOn}
          containerWidth={containerWidth}
          sunMoving={sunMoving}
          setSunMoving={setSunMoving}
        />
      )}
      <Content isInEnglish={lightModeOn} />
    </Container>
  );
};

export default Home;
