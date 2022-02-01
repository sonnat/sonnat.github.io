import AccountPlusO from "@sonnat/icons/AccountPlusO";
import {
  Button,
  Dialog,
  DialogActionBar,
  DialogBody,
  DialogHeader,
  Text
} from "@sonnat/ui";
import makeStyles from "@sonnat/ui/styles/makeStyles";
import DemoBox from "components/DemoBox";
import * as React from "react";

const componentName = "BasicDialogDemo";

const demoCode = `import AccountPlusO from "@sonnat/icons/AccountPlusO";
import {
  Button,
  Dialog,
  DialogActionBar,
  DialogBody,
  DialogHeader,
  Text
} from "@sonnat/ui";
import makeStyles from "@sonnat/ui/styles/makeStyles";
import * as React from "react";

const useStyles = makeStyles(theme => {
  const {
    colors,
    typography: { pxToRem }
  } = theme;

  return {
    description: { marginBottom: pxToRem(16) },
    accounts: { display: "flex", flexDirection: "column" },
    accountRow: {
      display: "flex",
      alignItems: "center",
      height: pxToRem(48),
      boxShadow: \`0 1px 0 0 $\{colors.divider.dark}\`,
      cursor: "pointer",
      backgroundColor: colors.transparent,
      transition: "background-color 180ms ease",
      "&:hover": {
        backgroundColor: "rgba(0, 0, 0, 0.04)"
      }
    },
    avatar: {
      width: pxToRem(32),
      height: pxToRem(32),
      borderRadius: "50%",
      marginRight: pxToRem(16),
      backgroundColor: colors.text.dark.secondary
    },
    accountName: { display: "flex", flexDirection: "column" },
    addBtn: { marginTop: pxToRem(8), alignSelf: "flex-start" }
  };
});

const Demo= () => {
  const classes = useStyles();

  const [isDialogOpen, setDialogOpen] = React.useState(false);

  return (
    <React.Fragment>
      <Button
        label="Toggle the Dialog"
        onClick={() => void setDialogOpen(o => !o)}
      />
      <Dialog
        onBackdropClick={() => void setDialogOpen(false)}
        onEscapeKeyUp={() => void setDialogOpen(false)}
        open={isDialogOpen}
        aria-labelledby="dialog-header-0"
        aria-describedby="dialog-body-0"
      >
        <DialogHeader id="dialog-header-0" title="Choose your google account" />
        <DialogBody>
          <Text
            as="p"
            variant="body"
            color="textSecondary"
            className={classes.description}
            id="dialog-body-0"
          >
            Choose one of the accounts below or add a new account:
          </Text>
          <div className={classes.accounts}>
            <div className={classes.accountRow} role="button" tabIndex={0}>
              <div className={classes.avatar}></div>
              <div className={classes.accountName}>
                <Text variant="subtitleSmall" as="strong">
                  Mostafa Shamsitabar
                </Text>
                <Text variant="caption" as="strong" color="textSecondary">
                  mostafa.sh.coderino@gmail.com
                </Text>
              </div>
            </div>
            <div className={classes.accountRow} role="button" tabIndex={0}>
              <div className={classes.avatar}></div>
              <div className={classes.accountName}>
                <Text variant="subtitleSmall" as="strong">
                  Mostafa Shamsitabar
                </Text>
                <Text variant="caption" as="strong" color="textSecondary">
                  mostafa.sh.jobs@gmail.com
                </Text>
              </div>
            </div>
            <Button
              className={classes.addBtn}
              leadingIcon={<AccountPlusO />}
              label="Add another account"
              variant="inlined"
            />
          </div>
        </DialogBody>
        <DialogActionBar>
          <Button
            label="Close"
            variant="inlined"
            onClick={() => void setDialogOpen(false)}
          />
        </DialogActionBar>
      </Dialog>
    </React.Fragment>
  );
};

export default Demo;`;

const useStyles = makeStyles(theme => {
  const {
    darkMode,
    radius,
    colors: { divider, text, transparent },
    spacings: { spaces },
    typography: { pxToRem }
  } = theme;

  return {
    description: { marginBottom: spaces[7].rem },
    accounts: { display: "flex", flexDirection: "column" },
    accountRow: {
      display: "flex",
      alignItems: "center",
      height: pxToRem(48),
      boxShadow: `0 1px 0 0 ${!darkMode ? divider.dark : divider.light}`,
      cursor: "pointer",
      backgroundColor: transparent,
      transition: "background-color 180ms ease",
      "&:hover": {
        backgroundColor: darkMode
          ? "rgba(255, 255, 255, 0.04)"
          : "rgba(0, 0, 0, 0.04)"
      }
    },
    avatar: {
      width: pxToRem(32),
      height: pxToRem(32),
      borderRadius: radius.rounded,
      marginRight: spaces[7].rem,
      backgroundColor: !darkMode ? text.dark.secondary : text.light.secondary
    },
    accountName: { display: "flex", flexDirection: "column" },
    addBtn: { marginTop: spaces[3].rem, alignSelf: "flex-start" }
  };
});

const BasicDialogDemo = () => {
  const classes = useStyles();

  const [isDialogOpen, setDialogOpen] = React.useState(false);

  return (
    <DemoBox flexDirection="column" code={demoCode}>
      <Button
        label="Toggle the Dialog"
        onClick={() => void setDialogOpen(o => !o)}
      />
      <Dialog
        onBackdropClick={() => void setDialogOpen(false)}
        onEscapeKeyUp={() => void setDialogOpen(false)}
        open={isDialogOpen}
        aria-labelledby="dialog-header-0"
        aria-describedby="dialog-body-0"
      >
        <DialogHeader id="dialog-header-0" title="Choose your google account" />
        <DialogBody>
          <Text
            as="p"
            variant="body"
            color="textSecondary"
            className={classes.description}
            id="dialog-body-0"
          >
            Choose one of the accounts below or add a new account:
          </Text>
          <div className={classes.accounts}>
            <div className={classes.accountRow} role="button" tabIndex={0}>
              <div className={classes.avatar}></div>
              <div className={classes.accountName}>
                <Text variant="subtitleSmall" as="strong">
                  Mostafa Shamsitabar
                </Text>
                <Text variant="caption" as="strong" color="textSecondary">
                  mostafa.sh.coderino@gmail.com
                </Text>
              </div>
            </div>
            <div className={classes.accountRow} role="button" tabIndex={0}>
              <div className={classes.avatar}></div>
              <div className={classes.accountName}>
                <Text variant="subtitleSmall" as="strong">
                  Mostafa Shamsitabar
                </Text>
                <Text variant="caption" as="strong" color="textSecondary">
                  mostafa.sh.jobs@gmail.com
                </Text>
              </div>
            </div>
            <Button
              className={classes.addBtn}
              leadingIcon={<AccountPlusO />}
              label="Add another account"
              variant="inlined"
            />
          </div>
        </DialogBody>
        <DialogActionBar>
          <Button
            label="Close"
            variant="inlined"
            onClick={() => void setDialogOpen(false)}
          />
        </DialogActionBar>
      </Dialog>
    </DemoBox>
  );
};

BasicDialogDemo.displayName = componentName;

export default BasicDialogDemo;
