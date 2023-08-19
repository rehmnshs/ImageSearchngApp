// LoginPage.js
import React, { useState } from "react";
import { useAuth } from "./AuthContext";

const LoginPage = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Basic validation - Check if username and password are not empty
    if (!username || !password) {
      setError("Please enter your username and password.");
      return;
    }

    // Assuming the login function handles authentication with the server
    // and returns an error message if login fails
    const error = login({ username, password });

    // If there's an error, display it to the user
    if (error) {
      setError(error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p>{error}</p>}
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default LoginPage;
