import {
  FormControl,
  FormControlDescription,
  FormControlFeedback,
  FormControlLabel,
  TextField
} from "@sonnat/ui";
import makeStyles from "@sonnat/ui/styles/makeStyles";
import DemoBox from "components/DemoBox";
import * as React from "react";

const componentName = "FormControlDemo";

const useStyles = makeStyles(
  ({ spacings: { spaces } }) => ({
    root: {},
    label: {},
    descriptor: { paddingBottom: spaces[3].rem },
    feedback: { paddingTop: spaces[1].rem }
  }),
  { name: componentName }
);

const demoCode = `import {
  FormControl,
  FormControlDescription,
  FormControlFeedback,
  FormControlLabel,
  TextField
} from "@sonnat/ui";
import makeStyles from "@sonnat/ui/styles/makeStyles";
import * as React from "react";

const useStyles = makeStyles(
  ({ spacings: { spaces } }) => ({
    root: {},
    label: {},
    descriptor: { paddingBottom: spaces[3].rem },
    feedback: { paddingTop: spaces[1].rem }
  })
);

const Demo = () => {
  const classes = useStyles();

  const [hasError, setHasError] = React.useState(false);
  const [feedback, setFeedback] = React.useState("");
  const [value, setValue] = React.useState("");

  React.useEffect(() => {
    if (value.length > 0) {
      setFeedback("");
      setHasError(false);
    } else {
      setFeedback("This field is required!");
      setHasError(true);
    }
  }, [value]);

  return (
    <React.Fragment>
      <FormControl
        fluid
        required
        hasError={hasError}
        className={classes.root}
      >
        <FormControlLabel className={classes.label} htmlFor="input-0">
          Forgot your password?
        </FormControlLabel>
        <FormControlDescription
          className={classes.descriptor}
          id="descriptor-0"
        >
          Don&apos;t worry! Just fill in your email address and we&apos;ll
          send you a link to reset your password.
        </FormControlDescription>
        <TextField
          value={value}
          onChange={v => void setValue(v)}
          placeholder="Your email address goes here"
          inputProps={{ id: "input-0", "aria-describedby": "descriptor-0" }}
        />
        {feedback && (
          <FormControlFeedback className={classes.feedback}>
            {feedback}
          </FormControlFeedback>
        )}
      </FormControl>
    </React.Fragment>
  );
};

export default Demo;
`;

const FormControlDemo = () => {
  const classes = useStyles();

  const [hasError, setHasError] = React.useState(false);
  const [feedback, setFeedback] = React.useState("");
  const [value, setValue] = React.useState("");

  React.useEffect(() => {
    if (value.length > 0) {
      setFeedback("");
      setHasError(false);
    } else {
      setFeedback("This field is required!");
      setHasError(true);
    }
  }, [value]);

  return (
    <DemoBox flexDirection="column" code={demoCode}>
      <React.Fragment>
        <FormControl
          fluid
          required
          hasError={hasError}
          className={classes.root}
        >
          <FormControlLabel className={classes.label} htmlFor="input-0">
            Forgot your password?
          </FormControlLabel>
          <FormControlDescription
            className={classes.descriptor}
            id="descriptor-0"
          >
            Don&apos;t worry! Just fill in your email address and we&apos;ll
            send you a link to reset your password.
          </FormControlDescription>
          <TextField
            value={value}
            onChange={v => void setValue(v)}
            placeholder="Your email address goes here"
            inputProps={{ id: "input-0", "aria-describedby": "descriptor-0" }}
          />
          {feedback && (
            <FormControlFeedback className={classes.feedback}>
              {feedback}
            </FormControlFeedback>
          )}
        </FormControl>
      </React.Fragment>
    </DemoBox>
  );
};

FormControlDemo.displayName = componentName;

export default FormControlDemo;
