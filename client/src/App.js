import React, { useState } from "react";

const API = "http://localhost:4000/api/user";


function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !phone) {
      setErrors({
        name: !name ? "Name is required" : "",
        email: !email ? "Email is required" : "",
        phone: !phone ? "Phone is required" : "",
      });
      return;
    }
    const response = await fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, phone }),
    });
    if (response.ok) {
      setSubmitted(true);
      setName("");
      setEmail("");
      setPhone("");
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl mb-6 text-blue-400 font-bold">Basic Form - Heroteck</h1>
      {submitted ? (
        <p className="text-green-600">Form submitted successfully!</p>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-sm">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">
              Name:
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`form-input border rounded mt-1 py-2 block w-full  ${
                errors.name ? "border-red-500" : "border-blue-400"
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-xs italic">{errors.name}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`form-input border rounded mt-1 py-2 block w-full ${
                errors.email ? "border-red-500" : "border-blue-400"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs italic">{errors.email}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700">
              Phone:
            </label>
            <input
              type="text"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={`form-input border rounded py-2 mt-1 block w-full ${
                errors.phone ? "border-red-500" : "border-blue-400"
              }`}
            />
            {errors.phone && (
              <p className="text-red-500 text-xs italic">{errors.phone}</p>
            )}
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
}

export default App;
