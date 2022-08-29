import { useState, useRef, useEffect } from "react";
import Container from "./components/Container";
import SideLabel from './components/SideLabel';
import { useMousePosition } from "./hooks/useMousePosition";
import Sun from "./components/Sun/Sun";
import Content from "./components/Content";
import { useTouchPosition } from "./hooks/useTouchPosition";
const Home = (): JSX.Element => {
  const [side, setSide] = useState<"left" | "right">("left");
  const [lightModeOn, setLightModeOn] = useState(true);
  const { x } = useMousePosition();
  const touchPos = useTouchPosition();
  
  //little ts workaround
  const {x : xTouch} = touchPos ?? {x : undefined};

  const [sunMoving, setSunMoving] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const containerWidth = containerRef.current?.offsetWidth;

  const onContainerScroll = () => {
    if (sunMoving) return;
    if (side === "left" && !lightModeOn) setLightModeOn(true);
    if (side === "right" && lightModeOn) setLightModeOn(false);
  };

  
  useEffect(() => {
    if(!containerWidth || !xTouch) return;
    if (xTouch < containerWidth / 2 && side !== "left") setSide("left");
    if (xTouch > containerWidth / 2 && side !== "right") setSide("right");
  }, [xTouch, containerWidth]);

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
      <SideLabel displaySide="left">
          scroll left for english
      </SideLabel>
      <SideLabel displaySide="right">
          rechts scrollen für deutsch
      </SideLabel>
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
