import { CloseLarge, AccountPlusO } from "@sonnat/icons";
import Button from "@sonnat/ui/Button";
import Dialog, { DialogBody, DialogHeader } from "@sonnat/ui/Dialog";
import makeStyles from "@sonnat/ui/styles/makeStyles";
import Text from "@sonnat/ui/Text";
import DemoBox from "components/DemoBox";
import * as React from "react";

const componentName = "FullScreenDialogDemo";

const demoCode = `import { CloseLarge, AccountPlusO } from "@sonnat/icons";
import Button from "@sonnat/ui/Button";
import Dialog, { DialogBody, DialogHeader } from "@sonnat/ui/Dialog";
import makeStyles from "@sonnat/ui/styles/makeStyles";
import Text from "@sonnat/ui/Text";
import * as React from "react";

const useStyles = makeStyles(theme => {
  const {
    colors,
    darkMode,
    typography: { pxToRem }
  } = theme;

  return {
    description: { marginBottom: pxToRem(16) },
    accounts: { display: "flex", flexDirection: "column" },
    accountRow: {
      display: "flex",
      alignItems: "center",
      height: pxToRem(48),
      boxShadow: \`0 1px 0 0 $\{colors.divider}\`,
      cursor: "pointer",
      backgroundColor: colors.transparent,
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
      borderRadius: "50%",
      marginRight: pxToRem(16),
      backgroundColor: colors.text.secondary
    },
    accountName: { display: "flex", flexDirection: "column" },
    addBtn: { marginTop: pxToRem(8), alignSelf: "flex-start" },
    closeBtn: { marginLeft: "auto" }
  };
});

const Demo: React.FC = () => {
  const classes = useStyles();

  const [isDialogOpen, setDialogOpen] = React.useState(false);

  return (
    <React.Fragment>
      <Button
        label="Toggle the Dialog"
        onClick={() => void setDialogOpen(o => !o)}
      />
      <Button
        label="Toggle the Dialog"
        onClick={() => void setDialogOpen(o => !o)}
      />
      <Dialog
        fullScreen
        onEscapeKeyUp={() => void setDialogOpen(false)}
        open={isDialogOpen}
        className={classes.root}
        aria-labelledby="dialog-header-1"
        aria-describedby="dialog-body-1"
      >
        <DialogHeader id="dialog-header-1" title="Choose your google account">
          <Button
            aria-label="Close the Dialog"
            leadingIcon={<CloseLarge />}
            variant="inlined"
            className={classes.closeBtn}
            onClick={() => void setDialogOpen(false)}
          />
        </DialogHeader>
        <DialogBody>
          <Text
            rootNode="p"
            variant="body"
            color="textSecondary"
            className={classes.description}
            id="dialog-body-1"
          >
            Choose one of the accounts below or add a new account:
          </Text>
          <div className={classes.accounts}>
            <div className={classes.accountRow} role="button" tabIndex={0}>
              <div className={classes.avatar}></div>
              <div className={classes.accountName}>
                <Text variant="subtitleSmall" rootNode="strong">
                  Mostafa Shamsitabar
                </Text>
                <Text variant="caption" rootNode="strong" color="textSecondary">
                  mostafa.sh.coderino@gmail.com
                </Text>
              </div>
            </div>
            <div className={classes.accountRow} role="button" tabIndex={0}>
              <div className={classes.avatar}></div>
              <div className={classes.accountName}>
                <Text variant="subtitleSmall" rootNode="strong">
                  Mostafa Shamsitabar
                </Text>
                <Text variant="caption" rootNode="strong" color="textSecondary">
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
      </Dialog>
    </React.Fragment>
  );
};

export default Demo;`;

const useStyles = makeStyles(theme => {
  const {
    colors,
    darkMode,
    typography: { pxToRem }
  } = theme;

  return {
    description: { marginBottom: pxToRem(16) },
    accounts: { display: "flex", flexDirection: "column" },
    accountRow: {
      display: "flex",
      alignItems: "center",
      height: pxToRem(48),
      boxShadow: `0 1px 0 0 ${colors.divider}`,
      cursor: "pointer",
      backgroundColor: colors.transparent,
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
      borderRadius: "50%",
      marginRight: pxToRem(16),
      backgroundColor: colors.text.secondary
    },
    accountName: { display: "flex", flexDirection: "column" },
    addBtn: { marginTop: pxToRem(8), alignSelf: "flex-start" },
    closeBtn: { marginLeft: "auto" }
  };
});

const FullScreenDialogDemo: React.FC = () => {
  const classes = useStyles();

  const [isDialogOpen, setDialogOpen] = React.useState(false);

  return (
    <DemoBox flexDirection="column" code={demoCode}>
      <Button
        label="Toggle the Dialog"
        onClick={() => void setDialogOpen(o => !o)}
      />
      <Dialog
        fullScreen
        onEscapeKeyUp={() => void setDialogOpen(false)}
        open={isDialogOpen}
        className={classes.root}
        aria-labelledby="dialog-header-1"
        aria-describedby="dialog-body-1"
      >
        <DialogHeader id="dialog-header-1" title="Choose your google account">
          <Button
            aria-label="Close the Dialog"
            leadingIcon={<CloseLarge />}
            variant="inlined"
            className={classes.closeBtn}
            onClick={() => void setDialogOpen(false)}
          />
        </DialogHeader>
        <DialogBody>
          <Text
            rootNode="p"
            variant="body"
            color="textSecondary"
            className={classes.description}
            id="dialog-body-1"
          >
            Choose one of the accounts below or add a new account:
          </Text>
          <div className={classes.accounts}>
            <div className={classes.accountRow} role="button" tabIndex={0}>
              <div className={classes.avatar}></div>
              <div className={classes.accountName}>
                <Text variant="subtitleSmall" rootNode="strong">
                  Mostafa Shamsitabar
                </Text>
                <Text variant="caption" rootNode="strong" color="textSecondary">
                  mostafa.sh.coderino@gmail.com
                </Text>
              </div>
            </div>
            <div className={classes.accountRow} role="button" tabIndex={0}>
              <div className={classes.avatar}></div>
              <div className={classes.accountName}>
                <Text variant="subtitleSmall" rootNode="strong">
                  Mostafa Shamsitabar
                </Text>
                <Text variant="caption" rootNode="strong" color="textSecondary">
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
      </Dialog>
    </DemoBox>
  );
};

FullScreenDialogDemo.displayName = componentName;

export default FullScreenDialogDemo;
