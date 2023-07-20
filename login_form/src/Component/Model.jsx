import React, { useState } from "react";
import "../ComponentStyles/model.css";
import EmailInput from "./EmailInput";

export const Model = ({ closeModal, onSubmit, defaultValue }) => {
  const [formState, setFormState] = useState(
    defaultValue || {
      fullName: "",
      email: "",
      contactNumber: "",
      faculty: "",
      university: "",
      status: "live",
    }
  );

  const [errors, setErrors] = useState(""); // Define the 'errors' state here

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (
      formState.fullName &&
      formState.email &&
      emailRegex.test(formState.email) &&
      formState.contactNumber &&
      formState.faculty &&
      formState.university &&
      formState.status
    ) {
      setErrors("");
      return true;
    } else {
      let errorFields = [];
      for (const [key, value] of Object.entries(formState)) {
        if (!value) {
          errorFields.push(key);
        }
      }
      if (formState.email && !emailRegex.test(formState.email)) {
        errorFields.push("email");
      }
      setErrors(errorFields.join(","));
      return false;
    }
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    onSubmit(formState);

    closeModal();
  };

  

  return (
    <div className="model-container">
      <div className="model">
        <form className="form-bg">
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              name="fullName"
              value={formState.fullName}
              onChange={handleChange}
              className="input-form-data"
            />
          </div>
          <EmailInput
            value={formState.email}
            className="input-form-data"
            onChange={(email) => setFormState({ ...formState, email })}
            
          />
          <div className="form-group">
            <label htmlFor="contactNumber">Contact Number</label>
            <input
              name="contactNumber"
              value={formState.contactNumber}
              onChange={handleChange}
              className="input-form-data"
            />
          </div>
          <div className="form-group">
            <label htmlFor="faculty">Faculty</label>
            <input
              name="faculty"
              value={formState.faculty}
              onChange={handleChange}
              className="input-form-data"
            />
          </div>
          <div className="form-group">
            <label htmlFor="university">University</label>
            <input
              name="university"
              value={formState.university}
              onChange={handleChange}
              className="input-form-data"
            />
          </div>
          
          {errors && <div className="error">{`Please include: ${errors}`}</div>}
          <button type="submit" className="btn" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
