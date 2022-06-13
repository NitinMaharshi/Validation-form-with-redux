import React from "react";
import { TableList } from "./TableList";

export const Table = ({ showdata }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            {/* <th>Password</th>
            <th>Comfirm Password</th> */}
            <th>age</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(showdata) ? (
            showdata.map((item) => <TableList key={item.id} item={item} />)
          ) : (
            <tr></tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default Table;
