import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/api";
import "./EmailForm.css"; // Import the CSS file

const EmailForm = ({ setUserEmail }) => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await registerUser(email);
      setUserEmail(data.email);
      navigate("/game");
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="email-form">
      <h1 className="email-form-title">Enter Your Email</h1>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
        className="email-input"
      />
      <button type="submit" className="submit-button">
        Submit
      </button>
    </form>
  );
};

export default EmailForm;
