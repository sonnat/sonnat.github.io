import useTheme from "@sonnat/ui/styles/useTheme";
import dynamic from "next/dynamic";
import * as React from "react";

const componentName = "JsonViewBox";

interface Props {
  className?: string;
}

const JsonViewBox = React.memo(function JsonViewBox(props: Props) {
  const { className, ...otherProps } = props;
  const theme = useTheme();

  const JsonView = dynamic(() => import("react-json-view"), { ssr: false });

  return (
    <div {...otherProps} className={className}>
      <JsonView
        style={{ backgroundColor: theme.colors.transparent }}
        src={theme}
        theme={theme.darkMode ? "google" : "rjv-default"}
        name="defaultTheme"
        indentWidth={2}
        collapsed={true}
        enableClipboard={false}
        displayObjectSize={false}
      />
    </div>
  );
});

JsonViewBox.displayName = componentName;

export default JsonViewBox;
