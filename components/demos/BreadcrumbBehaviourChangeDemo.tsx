import Breadcrumb, { BreadcrumbItem } from "@sonnat/ui/Breadcrumb";
import DemoBox from "components/DemoBox";
import * as React from "react";

const componentName = "BreadcrumbBehaviourChangeDemo";

const demoCode = `<Breadcrumb showOnlyPreviousStep>
  <BreadcrumbItem><a href="#">Sonnat</a></BreadcrumbItem>
  <BreadcrumbItem><a href="#">Docs</a></BreadcrumbItem>
  <BreadcrumbItem><a href="#">Navigation</a></BreadcrumbItem>
  <BreadcrumbItem><a href="#">Breadcrumb</a></BreadcrumbItem>
</Breadcrumb>`;

const BreadcrumbBehaviourChangeDemo: React.FC = () => {
  return (
    <DemoBox code={demoCode}>
      <React.Fragment>
        <Breadcrumb showOnlyPreviousStep>
          <BreadcrumbItem>
            <a href="#">Sonnat</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="#">Docs</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="#">Navigation</a>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <a href="#">Breadcrumb</a>
          </BreadcrumbItem>
        </Breadcrumb>
      </React.Fragment>
    </DemoBox>
  );
};

BreadcrumbBehaviourChangeDemo.displayName = componentName;

export default BreadcrumbBehaviourChangeDemo;
