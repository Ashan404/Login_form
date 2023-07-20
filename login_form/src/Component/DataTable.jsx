import React from 'react';
import "../ComponentStyles/datatable.css";
import { BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";

const DataTable = ({ rows, deleteRow, editRow }) => {
  return (
    <div className="table-wrapper">
      <table className="table">
        <thead>
          <tr>
            <th className="expand">FullName</th>
            <th className="expand">Email</th>
            <th className="expand">Contact number</th>
            <th className="expand">Faculty</th>
            <th className="expand">University</th>
            <th className="expand">Action</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => {
            const statusText = row.status.charAt(0).toUpperCase() + row.status.slice(1);

            return (
              <tr key={idx}>
                <td>{row.fullName}</td>
                <td className="expand">{row.email}</td>
                <td>{row.contactNumber}</td>
                <td>{row.faculty}</td>
                <td>{row.university}</td>
                <td className="fit">
                  <span className="actions">
                    <BsFillTrashFill
                      className="delete-btn"
                      onClick={() => deleteRow(idx)}
                    />
                    <BsFillPencilFill
                      className="edit-btn"
                      onClick={() => editRow(idx)}
                    />
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
