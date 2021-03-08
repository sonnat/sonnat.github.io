import makeStyles from "@sonnat/ui/styles/makeStyles";
import createClassName from "classnames";
import * as React from "react";

const componentName = "Logo";

const allowedVariants = ["fill", "line"];

interface Props {
  className?: string;
  variant?: "fill" | "line";
  size?: number;
}

const useStyles = makeStyles(
  theme => {
    const { colors } = theme;

    return {
      root: { verticalAlign: "middle" },
      lineColor: { fill: colors.text.secondary }
    };
  },
  { name: componentName }
);

const Logo = React.memo(function Logo(props: Props) {
  const { variant = "fill", size = 16, className, ...otherProps } = props;

  const classes = useStyles();

  const titleText =
    variant === "fill"
      ? "Sonnat Design System's filled logo"
      : variant === "line"
      ? "Sonnat Design System's outlined logo"
      : null;

  return allowedVariants.includes(variant) ? (
    variant === "fill" ? (
      <svg
        className={createClassName(classes.root, className)}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        style={{ width: size, height: size }}
        {...otherProps}
      >
        <title>{titleText}</title>
        <circle cx="24" cy="24" r="24" fill="#ea475b" />
        <rect
          x="9.6"
          y="9.6"
          width="28.8"
          height="28.8"
          fill="#fff"
          fillOpacity="0"
        />
        <path
          d="M33.46,32.49,21.18,35.94h0a3.79,3.79,0,0,1-3.9-.92l-3.56-3.56a.55.55,0,0,1,.23-.92l11-3a.7.7,0,0,1,.8.23l3.91,3.9a3.74,3.74,0,0,0,2.75,1.15A3.92,3.92,0,0,1,33.46,32.49Z"
          transform="translate(0 0)"
          fill="#e5e5e5"
          opacity="0.9"
          style={{ isolation: "isolate" }}
        />
        <path
          d="M35.19,26.07l-7.35-7.35-1.26-1.26h0a3.88,3.88,0,0,1,0-5.51h0A2.52,2.52,0,0,1,28.07,11L15.9,14.24a7.41,7.41,0,0,0-1.83,1,3.94,3.94,0,0,0,0,5.51l7.46,7.57,1.14,1.15a3.88,3.88,0,0,1,0,5.51h0a3.27,3.27,0,0,1-1.6.92l12.28-3.33h0a3.1,3.1,0,0,0,1.72-1,3.77,3.77,0,0,0,1.15-2.76A3.49,3.49,0,0,0,35.19,26.07Z"
          transform="translate(0 0)"
          fill="#f4f4f4"
          opacity="0.84"
          style={{ isolation: "isolate" }}
        />
        <path
          d="M32,12a3.76,3.76,0,0,0-3.9-.92h0L15.9,14.24c.35,0,.69-.11.92-.11a3.73,3.73,0,0,1,2.76,1.15h0l4,4a.76.76,0,0,0,.81.23l3.33-.91,8-2.07c.34-.12.46-.46.23-.69Z"
          transform="translate(0 0)"
          fill="#fff"
          opacity="0.9"
          style={{ isolation: "isolate" }}
        />
      </svg>
    ) : (
      <svg
        className={createClassName(classes.root, className)}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        style={{ width: size, height: size }}
        {...otherProps}
      >
        <title>{titleText}</title>
        <polygon
          points="0 32 32 32 32 0 0 0 0 32"
          fill="#fff"
          fillOpacity="0"
        />
        <path
          className={classes.lineColor}
          d="M23.23,21.77a3.33,3.33,0,0,1-4.67,0l-4.37-4.35a.1.1,0,0,0,0,0,.42.42,0,0,0-.14-.09l-.09,0a.4.4,0,0,0-.15,0h-.21l-3.5,1L2.63,10.78A3.3,3.3,0,0,1,7.29,6.11h0l4.53,4.53.06,0a.38.38,0,0,0,.13.09l.1,0a.35.35,0,0,0,.14,0h.21l3.51-1,7.24,7.24a3.31,3.31,0,0,1,0,4.67Zm-9.7-3.14,4.09,4.08a4.59,4.59,0,0,0,1,.75l-6.48,1.77a4.54,4.54,0,0,0,.66-2.34,4.63,4.63,0,0,0-1.36-3.27l-.34-.34ZM8.18,26.2a3.29,3.29,0,0,1-2.33-1L2.31,21.68l7.34-2,.88.88A3.31,3.31,0,0,1,8.19,26.2ZM12.5,9.43,8.24,5.17h0a4.82,4.82,0,0,0-1-.74l6.47-1.76a4.58,4.58,0,0,0,.71,5.61l.5.51ZM20,2.66l3.71,3.72-7.34,2-1-1A3.3,3.3,0,0,1,20,2.66Zm-2.54,6.8,7.71-2.1a.66.66,0,0,0,.47-.47.64.64,0,0,0-.17-.64L20.94,1.72A4.6,4.6,0,0,0,16.45.55a.33.33,0,0,0-.1,0L3.65,4a.6.6,0,0,0-.11.06A4.48,4.48,0,0,0,1.69,5.17a4.65,4.65,0,0,0,0,6.55L8.56,18.6.85,20.69a.69.69,0,0,0-.47.48.66.66,0,0,0,.17.64l4.36,4.35a4.6,4.6,0,0,0,3.26,1.37h0a4.57,4.57,0,0,0,1.11-.15l.12,0,12.7-3.46a.45.45,0,0,0,.12-.06,4.59,4.59,0,0,0,1.93-7.68Z"
          transform="translate(3 2)"
        />
      </svg>
    )
  ) : null;
});

Logo.displayName = componentName;

export default Logo;
