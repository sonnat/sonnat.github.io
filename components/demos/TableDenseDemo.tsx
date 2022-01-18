import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHeader,
  TableRow,
  Tag
} from "@sonnat/ui";
import makeStyles from "@sonnat/ui/styles/makeStyles";
import DemoBox from "components/DemoBox";
import * as React from "react";

const componentName = "TableDenseDemo";

const demoCode = `<Table caption="Dense Table" dense>
  <TableHeader>
    <TableRow>
      <TableCell>Name</TableCell>
      <TableCell>Age</TableCell>
      <TableCell>Tags</TableCell>
      <TableCell>Actions</TableCell>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>John Doe</TableCell>
      <TableCell>25</TableCell>
      <TableCell>
        <Tag dense color="secondary" label="Front-end Developer" />
        <Tag dense color="primary" label="Senior" />
      </TableCell>
      <TableCell>
        <Button size="small" label="Delete" variant="inlined" />
        <Button size="small" label="Edit" variant="inlined" />
      </TableCell>
    </TableRow>
    <TableRow>
      <TableCell>Jim Halpert</TableCell>
      <TableCell>30</TableCell>
      <TableCell>
        <Tag dense color="secondary" label="Sales" />
        <Tag dense color="primary" label="Manager" />
      </TableCell>
      <TableCell>
        <Button size="small" label="Delete" variant="inlined" />
        <Button size="small" label="Edit" variant="inlined" />
      </TableCell>
    </TableRow>
    <TableRow>
      <TableCell>Jude Brown</TableCell>
      <TableCell>23</TableCell>
      <TableCell>
        <Tag dense color="secondary" label="Back-end Developer" />
        <Tag dense color="primary" label="Junior" />
      </TableCell>
      <TableCell>
        <Button size="small" label="Delete" variant="inlined" />
        <Button size="small" label="Edit" variant="inlined" />
      </TableCell>
    </TableRow>
  </TableBody>
  <TableFooter>
    <TableRow>
      <TableCell colSpan={4}>This is the footer</TableCell>
    </TableRow>
  </TableFooter>
</Table>`;

const useStyles = makeStyles(theme => {
  const {
    typography: { pxToRem }
  } = theme;

  return {
    tags: { "& > * + *": { marginLeft: pxToRem(8) } },
    actions: { "& > * + *": { marginLeft: pxToRem(8) } }
  };
});

const TableDenseDemo = () => {
  const classes = useStyles();

  return (
    <DemoBox flexDirection="column" code={demoCode}>
      <Table caption="Dense Table" dense>
        <TableHeader>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Tags</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>John Doe</TableCell>
            <TableCell>25</TableCell>
            <TableCell className={classes.tags}>
              <Tag dense color="secondary" label="Front-end Developer" />
              <Tag dense color="primary" label="Senior" />
            </TableCell>
            <TableCell className={classes.actions}>
              <Button size="small" label="Delete" variant="inlined" />
              <Button size="small" label="Edit" variant="inlined" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Jim Halpert</TableCell>
            <TableCell>30</TableCell>
            <TableCell className={classes.tags}>
              <Tag dense color="secondary" label="Sales" />
              <Tag dense color="primary" label="Manager" />
            </TableCell>
            <TableCell className={classes.actions}>
              <Button size="small" label="Delete" variant="inlined" />
              <Button size="small" label="Edit" variant="inlined" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Jude Brown</TableCell>
            <TableCell>23</TableCell>
            <TableCell className={classes.tags}>
              <Tag dense color="secondary" label="Back-end Developer" />
              <Tag dense color="primary" label="Junior" />
            </TableCell>
            <TableCell className={classes.actions}>
              <Button size="small" label="Delete" variant="inlined" />
              <Button size="small" label="Edit" variant="inlined" />
            </TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={4}>This is the footer</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </DemoBox>
  );
};

TableDenseDemo.displayName = componentName;

export default TableDenseDemo;
