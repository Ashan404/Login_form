import React, { useState } from "react";

const EmailInput = ({ value, onChange }) => {
  const [isValid, setIsValid] = useState(true);

  const handleChange = (e) => {
    const email = e.target.value.trim();
    onChange(email);
    setIsValid(isValidEmail(email));
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const hasValidDomain = emailRegex.test(email) && isValidDomain(email);
    return hasValidDomain;
  };

  const isValidDomain = (email) => {
    const parts = email.split("@");
    if (parts.length === 2) {
      const domain = parts[1];
      const domainParts = domain.split(".");
      if (domainParts.length >= 2) {
        const topLevelDomain = domainParts[domainParts.length - 1];
        return topLevelDomain.length >= 2;
      }
    }
    return false;
  };

  return (
    <div className="form-group">
      <label htmlFor="email">Email</label>
      <input
        name="email"
        value={value}
        onChange={(e) => handleChange(e)}
        className={isValid ? "" : "invalid"}
      />
      {!isValid && <div className="error">Please enter a valid email address.</div>}
    </div>
  );
};

export default EmailInput;
