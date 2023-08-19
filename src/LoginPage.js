import React, { useState } from "react";
import axios from "axios"; // Import Axios

const LoginPage = () => {

  const [message, setMessage] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/register", {
        username: e.target.usernamee.value, // Use the value from the input field
        password: e.target.password.value,
      });

      if (response.status === 200) {
        setMessage(response.data.message);
      } else {
        setMessage("Registration failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
          name="usernamee"
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
          />
        </div>
        <button type="submit">Log In</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default LoginPage;

