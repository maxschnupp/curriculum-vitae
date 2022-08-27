interface ITypographyProps {
  children: React.ReactNode;
  size: "huge" | "big" | "medium";
}

const Typography = ({ size, children }: ITypographyProps) => {
  const style = { fontFamily: "Roboto Mono, monospaced", maxWidth: "600px", zIndex: 0 };

  switch (size) {
    case "huge":
      return <h3 style={style}>{children}</h3>;
    case "big":
      return <h5 style={style}>{children}</h5>;
    default:
      return <p style={style}>{children}</p>;
  }
};

export default Typography;
