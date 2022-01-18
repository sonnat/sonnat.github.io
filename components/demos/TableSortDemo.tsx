import { ArrowDown, ArrowUp } from "@sonnat/icons";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  Tag
} from "@sonnat/ui";
import makeStyles from "@sonnat/ui/styles/makeStyles";
import clx from "classnames";
import DemoBox from "components/DemoBox";
import * as React from "react";

const componentName = "TableSortDemo";

const demoCode = `import { ArrowDown, ArrowUp } from "@sonnat/icons";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  Tag
} from "@sonnat/ui";
import makeStyles from "@sonnat/ui/styles/makeStyles";
import clx from "classnames";
import * as React from "react";

const useStyles = makeStyles(theme => {
  const {
    colors,
    spacings: { spaces }
  } = theme;

  return {
    tags: { "& > * + *": { marginLeft: spaces[3].rem } },
    interactableHead: {},
    headContent: {
      display: "inline-flex",
      alignItems: "center",
      cursor: "pointer",
      "&:hover > $sortIcon": { opacity: 1, visibility: "visible" }
    },
    sortIcon: {
      marginLeft: spaces[3].rem,
      opacity: 0,
      visibility: "hidden",
      color: colors.text.disabled,
      transition: ["opacity 180ms ease", "visibility 180ms ease"].join(", ")
    },
    active: {
      "& > $sortIcon": {
        opacity: 1,
        visibility: "visible",
        color: colors.text.primary
      }
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

type OrderBy = "name" | "age";
type Order = "asc" | "desc";

const descendingComparator = (a: DataRow, b: DataRow, orderBy: OrderBy) => {
  if (b[orderBy] < a[orderBy]) return -1;
  if (b[orderBy] > a[orderBy]) return 1;
  return 0;
};

const getComparator = (order: Order, orderBy: OrderBy) => {
  return order === "desc"
    ? (a: DataRow, b: DataRow) => descendingComparator(a, b, orderBy)
    : (a: DataRow, b: DataRow) => -descendingComparator(a, b, orderBy);
};

const sort = (
  data: DataRow[],
  comparator: ReturnType<typeof getComparator>
): DataRow[] => {
  const stabilizedThis = data.map((el, index) => [el, index]);

  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0] as DataRow, b[0] as DataRow);
    if (order !== 0) return order;
    return (a[1] as number) - (b[1] as number);
  });

  return stabilizedThis.map(touple => touple[0] as DataRow);
};

const Demo = () => {
  const classes = useStyles();

  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<OrderBy>("name");

  const requestSort = (orderByProp: OrderBy) => {
    const isAsc = orderBy === orderByProp && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(orderByProp);
  };

  const ArrowUpIcon = <ArrowUp size={20} className={classes.sortIcon} />;
  const ArrowDownIcon = <ArrowDown size={20} className={classes.sortIcon} />;

  return (
    <Table caption="Table With Selection">
      <TableHeader>
        <TableRow>
          <TableCell
            className={classes.interactableHead}
            onClick={() => void requestSort("name")}
          >
            <div
              className={clx(classes.headContent, {
                [classes.active]: orderBy === "name"
              })}
            >
              Name
              {orderBy !== "name"
                ? ArrowUpIcon
                : order === "asc"
                ? ArrowUpIcon
                : ArrowDownIcon}
            </div>
          </TableCell>
          <TableCell
            className={classes.interactableHead}
            onClick={() => void requestSort("age")}
          >
            <div
              className={clx(classes.headContent, {
                [classes.active]: orderBy === "age"
              })}
            >
              Age
              {orderBy !== "age"
                ? ArrowUpIcon
                : order === "asc"
                ? ArrowUpIcon
                : ArrowDownIcon}
            </div>
          </TableCell>
          <TableCell>Tags</TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sort(dataRows, getComparator(order, orderBy)).map(dataRow => {
          return (
            <TableRow key={JSON.stringify(dataRow)}>
              <TableCell>{dataRow.name}</TableCell>
              <TableCell>{dataRow.age}</TableCell>
              <TableCell className={classes.tags}>
                <Tag color="secondary" label={dataRow.tags[0]} />
                <Tag color="primary" label={dataRow.tags[1]} />
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default Demo;`;

const useStyles = makeStyles(theme => {
  const {
    colors,
    spacings: { spaces }
  } = theme;

  return {
    tags: { "& > * + *": { marginLeft: spaces[3].rem } },
    interactableHead: {},
    headContent: {
      display: "inline-flex",
      alignItems: "center",
      cursor: "pointer",
      "&:hover > $sortIcon": { opacity: 1, visibility: "visible" }
    },
    sortIcon: {
      marginLeft: spaces[3].rem,
      opacity: 0,
      visibility: "hidden",
      color: colors.text.disabled,
      transition: ["opacity 180ms ease", "visibility 180ms ease"].join(", ")
    },
    active: {
      "& > $sortIcon": {
        opacity: 1,
        visibility: "visible",
        color: colors.text.primary
      }
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

type OrderBy = "name" | "age";
type Order = "asc" | "desc";

const descendingComparator = (a: DataRow, b: DataRow, orderBy: OrderBy) => {
  if (b[orderBy] < a[orderBy]) return -1;
  if (b[orderBy] > a[orderBy]) return 1;
  return 0;
};

const getComparator = (order: Order, orderBy: OrderBy) => {
  return order === "desc"
    ? (a: DataRow, b: DataRow) => descendingComparator(a, b, orderBy)
    : (a: DataRow, b: DataRow) => -descendingComparator(a, b, orderBy);
};

const sort = (
  data: DataRow[],
  comparator: ReturnType<typeof getComparator>
): DataRow[] => {
  const stabilizedThis = data.map((el, index) => [el, index]);

  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0] as DataRow, b[0] as DataRow);
    if (order !== 0) return order;
    return (a[1] as number) - (b[1] as number);
  });

  return stabilizedThis.map(touple => touple[0] as DataRow);
};

const TableSortDemo = () => {
  const classes = useStyles();

  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<OrderBy>("name");

  const requestSort = (orderByProp: OrderBy) => {
    const isAsc = orderBy === orderByProp && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(orderByProp);
  };

  const ArrowUpIcon = <ArrowUp size={20} className={classes.sortIcon} />;
  const ArrowDownIcon = <ArrowDown size={20} className={classes.sortIcon} />;

  return (
    <DemoBox flexDirection="column" code={demoCode}>
      <Table caption="Table With Sort">
        <TableHeader>
          <TableRow>
            <TableCell
              className={classes.interactableHead}
              onClick={() => void requestSort("name")}
            >
              <div
                className={clx(classes.headContent, {
                  [classes.active]: orderBy === "name"
                })}
              >
                Name
                {orderBy !== "name"
                  ? ArrowUpIcon
                  : order === "asc"
                  ? ArrowUpIcon
                  : ArrowDownIcon}
              </div>
            </TableCell>
            <TableCell
              className={classes.interactableHead}
              onClick={() => void requestSort("age")}
            >
              <div
                className={clx(classes.headContent, {
                  [classes.active]: orderBy === "age"
                })}
              >
                Age
                {orderBy !== "age"
                  ? ArrowUpIcon
                  : order === "asc"
                  ? ArrowUpIcon
                  : ArrowDownIcon}
              </div>
            </TableCell>
            <TableCell>Tags</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sort(dataRows, getComparator(order, orderBy)).map(dataRow => {
            return (
              <TableRow key={JSON.stringify(dataRow)}>
                <TableCell>{dataRow.name}</TableCell>
                <TableCell>{dataRow.age}</TableCell>
                <TableCell className={classes.tags}>
                  <Tag color="secondary" label={dataRow.tags[0]} />
                  <Tag color="primary" label={dataRow.tags[1]} />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </DemoBox>
  );
};

TableSortDemo.displayName = componentName;

export default TableSortDemo;
