import { Badge, Button } from "@sonnat/ui";
import DemoBox from "components/DemoBox";
import * as React from "react";

const componentName = "BadgeVisibilityDemo";

const demoCode = `import { Badge, Button } from "@sonnat/ui";
import * as React from "react";

const BadgeVisibilityDemo: React.FC = () => {
  const [isVisible, setVisible] = React.useState(true);

  return (
    <React.Fragment>
      <Badge
        visible={isVisible}
        variant="dotted"
        color="secondary"
      >
        // Rectangular shape
        <div></div>
      </Badge>
      <Button
        size="small"
        variant="outlined"
        label="Toggle visibility"
        onClick={() => void setVisible(v => !v)}
      />
    </React.Fragment>
  );
};

export default BadgeVisibilityDemo;
`;

const BadgeVisibilityDemo: React.FC = () => {
  const [isVisible, setVisible] = React.useState(true);

  return (
    <DemoBox code={demoCode}>
      <React.Fragment>
        <div className="demoSubject">
          <Badge
            visible={isVisible}
            variant="dotted"
            childShape="rectangular"
            color="secondary"
          >
            <div
              style={{
                width: 32,
                height: 32,
                backgroundColor: "#eaeaea"
              }}
            ></div>
          </Badge>
        </div>
        <Button
          className="demoSubject"
          size="small"
          variant="outlined"
          label="Toggle visibility"
          onClick={() => void setVisible(v => !v)}
        />
      </React.Fragment>
    </DemoBox>
  );
};

BadgeVisibilityDemo.displayName = componentName;

export default BadgeVisibilityDemo;
