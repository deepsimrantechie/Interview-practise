import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [currState, setCurrState] = useState("Login");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = " http://localhost:4000";
    const newUrl =
      currState === "Login"
        ? `${url}/api/user/login`
        : `${url}/api/user/register`;

    const data = {
      email,
      username,
      password,
    };

    try {
      const response = await axios.post(newUrl, data);

      if (response.data.success) {
        localStorage.setItem("token", response.data.token);

        alert("Login successful!");
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      console.error(err);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="border border-gray-300 rounded-xl shadow-lg p-8 bg-white">
        <h2 className="text-2xl font-semibold text-center mb-6">{currState}</h2>
        {error && (
          <div className="text-red-500 text-center mb-4">{error}</div>
        )}{" "}
        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your name here"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            placeholder="Enter your email here"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="password"
            placeholder="Enter your password here"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button className="border border-transparent bg-blue-600 rounded-md px-6 py-2 text-white hover:bg-blue-700 transition duration-300">
            Submit
          </button>
        </form>
        <div className="text-center mt-4">
          {currState === "Login" ? (
            <span>
              Don't have an account?{" "}
              <button
                onClick={() => setCurrState("Register")}
                className="text-blue-600 hover:underline"
              >
                Register
              </button>
            </span>
          ) : (
            <span>
              Already have an account?{" "}
              <button
                onClick={() => setCurrState("Login")}
                className="text-blue-600 hover:underline"
              >
                Login
              </button>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
