import React from "react";

const Row = ({ object, fields }) => {
  return (
    <tr>
      {fields.map((field) => (
        <td key={field}>
          {typeof object[field] === "object"
            ? object[field].map((val) => (
                <p key={val.name}>
                  <nobr>{val.name}</nobr>
                  <br />
                  <nobr>({val.email})</nobr>
                </p>
              ))
            : object[field]}
        </td>
      ))}
    </tr>
  );
};

export default Row;
