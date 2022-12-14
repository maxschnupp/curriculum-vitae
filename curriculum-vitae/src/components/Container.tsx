import {
  CSSProperties,
  ForwardedRef,
  forwardRef,
  MutableRefObject,
} from "react";
import GoogleFontLoader from "react-google-font-loader";

type ContainerWrapperProps = {
  lightModeOn: boolean;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

type ContainerProps = ContainerWrapperProps & {
  forwardedRef: ForwardedRef<unknown>;
};
const Container = ({
  lightModeOn,
  children,
  onScroll,
  forwardedRef,
  ...htmlAttributes
}: ContainerProps): JSX.Element => {
  const containerStyles = ({
    lightModeOn,
  }: {
    lightModeOn: boolean;
  }): React.CSSProperties => ({
    position: "absolute",
    top: "0px",
    right: "0px",
    bottom: "0px",
    left: "0px",
    paddingLeft: "20px",
    paddingTop: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: lightModeOn ? "#d1edf2" : " #191970",
    transition: "all 2s linear",
    color: lightModeOn ? "black" : "#DEDEDE",
    zIndex: -2,
  });

  const scrollContainerStyles = {
    position: "relative",
    overflowY: "scroll",
    width: '100%',
  } as CSSProperties;

  const ref = forwardedRef as MutableRefObject<HTMLDivElement>;

  return (
    <>
      {typeof document !== undefined && (
        <GoogleFontLoader
          fonts={[
            {
              font: "Roboto",
              weights: [400, "400i"],
            },
            {
              font: "Roboto Mono",
              weights: [400, 700],
            },
          ]}
          subsets={["cyrillic-ext", "greek"]}
        />
      )}

      <div
        {...htmlAttributes}
        ref={ref}
        style={containerStyles({ lightModeOn })}
      >
        <div style={scrollContainerStyles} onScroll={onScroll}>{children}</div>
      </div>
    </>
  );
};

const refForwardedContainer = forwardRef(
  (props: ContainerWrapperProps, ref) => {
    return <Container forwardedRef={ref} {...props} />;
  }
);

export default refForwardedContainer;
