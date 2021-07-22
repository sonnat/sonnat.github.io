import Button from "@sonnat/ui/Button";
import Checkbox from "@sonnat/ui/Checkbox";
import makeStyles from "@sonnat/ui/styles/makeStyles";
import Table, {
  TableBody,
  TableCell,
  TableFooter,
  TableHeader,
  TableRow
} from "@sonnat/ui/Table";
import Tag from "@sonnat/ui/Tag";
import Text from "@sonnat/ui/Text";
import DemoBox from "components/DemoBox";
import * as React from "react";

const componentName = "TableSelectionDemo";

const demoCode = `import Button from "@sonnat/ui/Button";
import Checkbox from "@sonnat/ui/Checkbox";
import makeStyles from "@sonnat/ui/styles/makeStyles";
import Table, {
  TableBody,
  TableCell,
  TableFooter,
  TableHeader,
  TableRow
} from "@sonnat/ui/Table";
import Tag from "@sonnat/ui/Tag";
import Text from "@sonnat/ui/Text";
import * as React from "react";

const useStyles = makeStyles(theme => {
  const {
    typography: { pxToRem }
  } = theme;

  return {
    tags: { "& > * + *": { marginLeft: pxToRem(8) } },
    footBar: {
      display: "flex",
      alignItems: "center"
    }
  };
});

interface DataRow {
  name: string;
  age: number;
  tags: [string, string];
}

const dataRows: DataRow[] = [
  { name: "John Doe", age: 25, tags: ["Front-end Developer", "Senior"] },
  { name: "Jim Halpert", age: 30, tags: ["Sales", "Manager"] },
  { name: "Jude Brown", age: 23, tags: ["Back-end Developer", "Junior"] }
];

const Demo: React.FC = () => {
  const classes = useStyles();

  const [selected, setSelected] = React.useState<DataRow[]>([]);
  const [isIndeterminated, setIndeterminated] = React.useState(false);

  const toggleSelectAll = (checkedState: boolean) => {
    if (checkedState) setSelected(dataRows);
    else setSelected([]);
  };

  const toggleSelectRow = (checkedState: boolean, dataRow: DataRow) => {
    if (checkedState) {
      setSelected(s => [...s, dataRow]);
    } else {
      setSelected(s => s.filter(i => i.name !== dataRow.name));
    }
  };

  React.useEffect(() => {
    if (selected.length > 0 && selected.length !== dataRows.length) {
      setIndeterminated(true);
    } else setIndeterminated(false);
  }, [selected.length]);

  return (
    <Table caption="Table With Selection">
      <TableHeader>
        <TableRow>
          <TableCell>
            <Checkbox
              checked={selected.length === dataRows.length}
              indeterminated={isIndeterminated}
              onChange={(_, checkedState) =>
                void toggleSelectAll(checkedState)
              }
              inputProps={{ "aria-label": "Select all names" }}
            />
            Name
          </TableCell>
          <TableCell>Age</TableCell>
          <TableCell>Tags</TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {dataRows.map(dataRow => {
          return (
            <TableRow key={JSON.stringify(dataRow)}>
              <TableCell>
                <Checkbox
                  checked={selected.some(s => s.name === dataRow.name)}
                  onChange={(_, checkedState) =>
                    void toggleSelectRow(checkedState, dataRow)
                  }
                  inputProps={{ "aria-label": \`Select $\{dataRow.name}\` }}
                />
                {dataRow.name}
              </TableCell>
              <TableCell>{dataRow.age}</TableCell>
              <TableCell className={classes.tags}>
                <Tag color="secondary" label={dataRow.tags[0]} />
                <Tag color="primary" label={dataRow.tags[1]} />
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
      {selected.length > 0 && (
        <TableFooter>
          <TableRow>
            <TableCell colSpan={4}>
              <div className={classes.footBar}>
                <Text variant="subtitleSmall">
                  {selected.length} selected
                </Text>
                <Button
                  style={{ marginLeft: "auto" }}
                  label="Delete Selected Items"
                  variant="outlined"
                />
              </div>
            </TableCell>
          </TableRow>
        </TableFooter>
      )}
    </Table>
  );
};

export default Demo;`;

const useStyles = makeStyles(theme => {
  const {
    typography: { pxToRem }
  } = theme;

  return {
    tags: { "& > * + *": { marginLeft: pxToRem(8) } },
    footBar: {
      display: "flex",
      alignItems: "center"
    }
  };
});

interface DataRow {
  name: string;
  age: number;
  tags: [string, string];
}

const dataRows: DataRow[] = [
  { name: "John Doe", age: 25, tags: ["Front-end Developer", "Senior"] },
  { name: "Jim Halpert", age: 30, tags: ["Sales", "Manager"] },
  { name: "Jude Brown", age: 23, tags: ["Back-end Developer", "Junior"] }
];

const TableSelectionDemo: React.FC = () => {
  const classes = useStyles();

  const [selected, setSelected] = React.useState<DataRow[]>([]);
  const [isIndeterminated, setIndeterminated] = React.useState(false);

  const toggleSelectAll = (checkedState: boolean) => {
    if (checkedState) setSelected(dataRows);
    else setSelected([]);
  };

  const toggleSelectRow = (checkedState: boolean, dataRow: DataRow) => {
    if (checkedState) {
      setSelected(s => [...s, dataRow]);
    } else {
      setSelected(s => s.filter(i => i.name !== dataRow.name));
    }
  };

  React.useEffect(() => {
    if (selected.length > 0 && selected.length !== dataRows.length) {
      setIndeterminated(true);
    } else setIndeterminated(false);
  }, [selected.length]);

  return (
    <DemoBox flexDirection="column" code={demoCode}>
      <Table caption="Table With Selection">
        <TableHeader>
          <TableRow>
            <TableCell>
              <Checkbox
                checked={selected.length === dataRows.length}
                indeterminated={isIndeterminated}
                onChange={(_, checkedState) =>
                  void toggleSelectAll(checkedState)
                }
                inputProps={{ "aria-label": "Select all names" }}
              />
              Name
            </TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Tags</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {dataRows.map(dataRow => {
            return (
              <TableRow key={JSON.stringify(dataRow)}>
                <TableCell>
                  <Checkbox
                    checked={selected.some(s => s.name === dataRow.name)}
                    onChange={(_, checkedState) =>
                      void toggleSelectRow(checkedState, dataRow)
                    }
                    inputProps={{ "aria-label": `Select ${dataRow.name}` }}
                  />
                  {dataRow.name}
                </TableCell>
                <TableCell>{dataRow.age}</TableCell>
                <TableCell className={classes.tags}>
                  <Tag color="secondary" label={dataRow.tags[0]} />
                  <Tag color="primary" label={dataRow.tags[1]} />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
        {selected.length > 0 && (
          <TableFooter>
            <TableRow>
              <TableCell colSpan={4}>
                <div className={classes.footBar}>
                  <Text variant="subtitleSmall">
                    {selected.length} selected
                  </Text>
                  <Button
                    style={{ marginLeft: "auto" }}
                    label="Delete Selected Items"
                    variant="outlined"
                  />
                </div>
              </TableCell>
            </TableRow>
          </TableFooter>
        )}
      </Table>
    </DemoBox>
  );
};

TableSelectionDemo.displayName = componentName;

export default TableSelectionDemo;
