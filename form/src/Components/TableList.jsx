import React from "react";

export const TableList = ({ item }) => {
  const { name, email, password, confirmpassword, dateofbirth } = item;
  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      {/* <td>{password}</td>
      <td>{confirmpassword}</td> */}
      <td>{dateofbirth}</td>
    </tr>
  );
};
