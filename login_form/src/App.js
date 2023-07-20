import React, { useState } from 'react';
import "./App.css";
import DataTable from "./Component/DataTable";
import {Model }from "./Component/Model"; // Corrected the component import
import LoginForm from "./Component/LoginForm";

const App = () => {
  const [modalOpen, setModalOpen] = useState(false); // Renamed modelOpen to modalOpen
  const [rows, setRows] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [rowToEdit, setRowToEdit] = useState(null);

  const handleDeleteRow = (targetIndex) => {
    setRows(rows.filter((_, idx) => idx !== targetIndex));
  };

  const handleEditRow = (idx) => {
    setModalOpen(true); // Close the model before setting the rowToEdit state
    setRowToEdit(idx);
  };

  const handleSubmit = (newRow) => {
    rowToEdit === null
      ? setRows([...rows, newRow])
      : setRows(rows.map((currRow, idx) => (idx !== rowToEdit ? currRow : newRow)));

    setModalOpen(false); // Close the model after submitting the form
    setRowToEdit(null); // Clear rowToEdit state after submitting
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setModalOpen(false);
    setRowToEdit(null);
  };

  return (
    <div className="App-bg">
      {isAuthenticated ? (
        <>
          <DataTable rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} />
          <button className="btn-add" onClick={() => setModalOpen(true)}>
            Add
          </button>
          <button onClick={handleLogout} className="btn-logout">Logout</button>
          {modalOpen && (
            <Model
              closeModal={() => {
                setModalOpen(false);
                setRowToEdit(null);
              }}
              onSubmit={handleSubmit}
              defaultValue={rowToEdit !== null && rows[rowToEdit]}
            />
          )}
        </>
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
