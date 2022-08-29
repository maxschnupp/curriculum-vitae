import { useEffect, useState } from "react";

interface ITypographyProps {
  englishText: string;
  germanText: string;
  isInEnglish: boolean;
  size: "huge" | "big" | "medium";
}

const Typography = ({
  size,
  englishText,
  isInEnglish,
  germanText,
}: ITypographyProps) => {
  const [previousIsInEnglish, setPreviousIsInEnglish] = useState(isInEnglish);
  const [opacityTarget, setOpacityTarget] = useState(1);
  const [displayEnglish, setDisplayEnglish] = useState(isInEnglish);

  useEffect(() => {
    if (previousIsInEnglish !== isInEnglish) {
      setOpacityTarget(0);
      setTimeout(() => {
        setOpacityTarget(1);
      }, 1000);
      setTimeout(() => {
        setDisplayEnglish(isInEnglish);
      }, 500);
      setPreviousIsInEnglish(isInEnglish);
    }
  }, [isInEnglish]);

  const style = {
    fontFamily: "Roboto Mono, monospaced",
    maxWidth: "600px",
    opacity: opacityTarget,
    transition: 'opacity 0.5s ease'
  };

  switch (size) {
    case "huge":
      return <h3 style={style}>{displayEnglish ? englishText : germanText}</h3>;
    case "big":
      return <h5 style={style}>{displayEnglish ? englishText : germanText}</h5>;
    default:
      return <p style={style}>{displayEnglish ? englishText : germanText}</p>;
  }
};

export default Typography;
