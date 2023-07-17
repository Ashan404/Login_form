import React from 'react';

const Table = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Full Name</th>
          <th>Email</th>
          <th>Password</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.fullName}</td>
            <td>{item.email}</td>
            <td>{item.password}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
