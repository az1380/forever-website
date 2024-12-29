import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate for redirection

const LoginSignup = () => {
  const [currentState, setCurrentState] = useState("Login");
  const [formData, setFormData] = useState({
    name: "", // Initial value for name field
    email: "", // Initial value for email field
    password: "", // Initial value for password field
  });
  const [message, setMessage] = useState(""); // State to hold error message
  const navigate = useNavigate(); // Initialize useNavigate hook for redirection

  // Function to update state on input change
  const handleChange = (e) => {
    const { name, value } = e.target; // Destructure the name and value from the event target
    setFormData({
      ...formData, // Keep the previous state values intact
      [name]: value, // Update the specific field value
    });
  };

  // Form submission handler
  const onSubmitHandler = async (event) => {
    event.preventDefault(); // Prevent form submission from refreshing the page

    const { name, email, password } = formData; // Destructure the data to send in the request

    if (currentState === "Signup") {
      try {
        const response = await fetch(
          "http://localhost:4000/api/user/register",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, password }),
          }
        );
        const data = await response.json();

        if (response.ok) {
          setMessage("User registered successfully!");
          setFormData({ name: "", email: "", password: "" }); // Clear form after success
          setTimeout(() => {
            // Redirect to login page after 2 seconds
            navigate("/LoginSignup");
          }, 1000);
        } else {
          setMessage(data.message || "Something went wrong.");
        }
      } catch (err) {
        setMessage("Error: " + err.message);
      }


    } else {
      try {
        const response = await fetch("http://localhost:4000/api/user/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });
        const data = await response.json();

        if (response.ok) {
          setMessage("Login successful!");
          
          // Handle storing JWT token or redirect logic here
          localStorage.setItem("authToken", data.token);
          navigate("/"); // Redirect to another page on successful login
        } else {
          setMessage(data.message || "Invalid credentials");
        }
      } catch (err) {
        setMessage("Error: " + err.message);
      }
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col gap-4 items-center w-[90%] sm:max-w-96 m-auto"
    >
      <div className="flex items-center gap-2 mt-14">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="h-[1.5px] border-none w-8 bg-gray-800"></hr>
      </div>

      {currentState === "Signup" && (
        <input
          type="text"
          placeholder="Name"
          name="name" // Make sure the input has the same 'name' attribute as the state field
          className="border border-gray-600 rounded px-3 py-2 w-full"
          value={formData.name} // Bind the value to the state
          onChange={handleChange} // Handle input change
          required
        />
      )}
      <input
        type="email"
        placeholder="Email"
        name="email"
        className="border border-gray-600 rounded px-3 py-2 w-full"
        value={formData.email} // Bind the value to the state
        onChange={handleChange} // Handle input change
        required
      />
      <input
        type="password" // Password input type
        placeholder="Password"
        name="password"
        className="border border-gray-600 rounded px-3 py-2 w-full"
        value={formData.password} // Bind the value to the state
        onChange={handleChange} // Handle input change
        required
      />
      <div className="flex justify-between w-full text-sm">
        <Link>Forgot your password?</Link>
        {currentState === "Login" ? (
          <Link onClick={() => setCurrentState("Signup")}>Signup</Link>
        ) : (
          <Link onClick={() => setCurrentState("Login")}>Login</Link>
        )}
      </div>

      {message && (
        <p
          className={
            message.includes("successfully") ? "text-green-500" : "text-red-500"
          }
        >
          {message}
        </p>
      )}

      <button
        type="submit"
        className="bg-black text-white font-normal py-2 px-9"
      >
        {currentState}
      </button>
    </form>
  );
};

export default LoginSignup;
