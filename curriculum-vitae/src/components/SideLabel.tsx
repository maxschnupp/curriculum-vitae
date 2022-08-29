import { CSSProperties, ReactNode } from "react";

interface ISideLabelProps {
  children: ReactNode;
  displaySide: "left" | "right";
}

const SideLabel = ({ children, displaySide }: ISideLabelProps) => {
  const baseStyle = {
    writingMode: "vertical-rl",
    textOrientation: "upright",
    position: "fixed",
    fontSize: "12px",
    maxWidth: "20px",
    top: "15%",
    paddingLeft: '10px',
    paddingRight: '10px',
    fontFamily: "Roboto Mono, monospaced",
  };
  const styleWithLeftAlign = { ...baseStyle, left: 0 } as CSSProperties;
  const styleWithRightAlign = { ...baseStyle, right: 0 } as CSSProperties;

  return (
    <div
      style={displaySide === "left" ? styleWithLeftAlign : styleWithRightAlign}
    >
      {children}
    </div>
  );
};

export default SideLabel;
