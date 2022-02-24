import React from "react";
import {
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Chip
} from "@material-ui/core";
import useStyles from "../../styles";

const states = {
  sent: "success",
  pending: "warning",
  declined: "secondary",
};

export default function TableComponent({ data }) {
  console.log("data in table:",data);
  const classes = useStyles();
  var keys = Object.keys(data[0]).map(i => i.toUpperCase());
  keys.shift(); // delete "id" key

  return (
    <Table className="mb-0">
      <TableHead>
        <TableRow>
          {["id","school name","principal"].map(key => (
            <TableCell key={key}>{key}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map(({ id, school_name, school_principal }) => (
          <TableRow key={id}>
            <TableCell className="pl-3 fw-normal">{id}</TableCell>
            <TableCell>{school_name}</TableCell>
            <TableCell>{school_principal}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
