import Breadcrumb, { BreadcrumbItem } from "@sonnat/ui/Breadcrumb";
import DemoBox from "components/DemoBox";
import * as React from "react";

const componentName = "BreadcrumbSimpleDemo";

const demoCode = `<Breadcrumb>
  <BreadcrumbItem><a href="#">Sonnat</a></BreadcrumbItem>
  <BreadcrumbItem><a href="#">Docs</a></BreadcrumbItem>
  <BreadcrumbItem><a href="#">Navigation</a></BreadcrumbItem>
  <BreadcrumbItem><a href="#">Breadcrumb</a></BreadcrumbItem>
</Breadcrumb>`;

const BreadcrumbSimpleDemo: React.FC = () => {
  return (
    <DemoBox code={demoCode}>
      <React.Fragment>
        <Breadcrumb>
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

BreadcrumbSimpleDemo.displayName = componentName;

export default BreadcrumbSimpleDemo;
