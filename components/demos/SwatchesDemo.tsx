import * as React from "react";
import makeStyles from "@sonnat/ui/styles/makeStyles";
import { useTheme } from "@sonnat/ui/styles";

const useStyles = makeStyles(
  ({
    breakpoints,
    spacings: { spacer, spaces },
    typography: { pxToRem, fontFamily, variants, fontWeight }
  }) => ({
    root: {
      fontFamily: fontFamily.monospace,
      display: "flex",
      flexWrap: "wrap",
      marginLeft: "-".concat(spaces[3].rem),
      marginRight: "-".concat(spaces[3].rem)
    },
    swatch: {
      flexGrow: 0,
      flexShrink: 0,
      maxWidth: "50%",
      flexBasis: "50%",
      paddingLeft: spaces[3].rem,
      paddingRight: spaces[3].rem,
      marginTop: spaces[7].rem,
      [breakpoints.down("sm")]: { maxWidth: "100%", flexBasis: "100%" }
    },
    swatchHead: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      padding: spacer.rem
    },
    swatchName: {
      ...variants.subtitle,
      fontWeight: fontWeight.bold,
      textTransform: "uppercase"
    },
    swatchAccess: { ...variants.caption },
    swatchSteps: { display: "flex", flexDirection: "column" },
    swatchStep: {
      height: pxToRem(48),
      ...variants.subtitleSmall,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: spacer.rem
    },
    swatchStepNumber: { ...variants.bodySmall },
    swatchStepCode: { ...variants.bodySmall, fontWeight: fontWeight.bold }
  }),
  { name: "SwatchesDemo" }
);

const steps = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] as const;

const SwatchesDemo = () => {
  const classes = useStyles();

  const {
    colors: { getContrastColorOf },
    swatches
  } = useTheme();

  return (
    <div className={classes.root}>
      {Object.keys(swatches).map(key => {
        const swatch = swatches[key as unknown as keyof typeof swatches];

        return (
          <div key={key} className={classes.swatch}>
            <div
              className={classes.swatchHead}
              style={{
                backgroundColor: swatch[500],
                color: getContrastColorOf(swatch[500])
              }}
            >
              <strong className={classes.swatchName}>{key}</strong>
              <code
                className={classes.swatchAccess}
              >{`theme.swatches.${key}`}</code>
            </div>
            <div className={classes.swatchSteps}>
              {steps.map(step => (
                <div
                  key={step}
                  className={classes.swatchStep}
                  style={{
                    backgroundColor: swatch[step],
                    color: getContrastColorOf(swatch[step])
                  }}
                >
                  <code className={classes.swatchStepNumber}>{step}</code>
                  <code className={classes.swatchStepCode}>{swatch[step]}</code>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SwatchesDemo;
