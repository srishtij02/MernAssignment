import React, { useState } from "react";

// Task 1: TextUpdater Component
const TextUpdater = () => {
  const [text, setText] = useState("");
  return (
    <div className="p-4 bg-gradient-to-r from-purple-200 to-purple-100 rounded shadow-md w-full max-w-md border border-purple-300">
      <h2 className="text-lg font-semibold mb-2 text-purple-800">📝 Live Text Updater</h2>
      <input
        type="text"
        className="border p-2 rounded w-full focus:outline-purple-400"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p className="mt-2 text-gray-700">
        You typed: <span className="font-semibold text-purple-700">{text}</span>
      </p>
    </div>
  );
};

// Task 2: InputForm with Console Logging
const InputForm = () => {
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Input Value:", input);
  };
  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gradient-to-r from-yellow-100 to-yellow-50 rounded shadow-md w-full max-w-md border border-yellow-300">
      <h2 className="text-lg font-semibold mb-2 text-yellow-700">🔍 Console Logger</h2>
      <input
        type="text"
        className="border p-2 rounded w-full focus:outline-yellow-400"
        placeholder="Enter something to log"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="bg-yellow-500 text-white p-2 mt-2 rounded w-full hover:bg-yellow-600 transition"
      >
        Log to Console
      </button>
    </form>
  );
};

// Task 3: UserCard Component
const UserCard = ({ name, email }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 border w-64 text-center border-blue-300 bg-blue-50">
      <h2 className="text-xl font-bold text-blue-800">👤 {name}</h2>
      <p className="text-gray-600">{email}</p>
    </div>
  );
};

// Task 4: Styled Button
const StyledButton = () => {
  return (
    <button
      className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 shadow-md transition"
      onClick={() => console.log("Button clicked!")}
    >
      🎯 Click Me!
    </button>
  );
};

// Task 5: LoginForm Component
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email}\nPassword: ${password}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 bg-gradient-to-br from-green-100 to-green-50 rounded-lg shadow-md w-full max-w-md flex flex-col gap-4 border border-green-300"
    >
      <h2 className="text-lg font-semibold text-green-700">🔐 Login Form</h2>
      <input
        type="email"
        className="border p-2 rounded focus:outline-green-400"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        className="border p-2 rounded focus:outline-green-400"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button
        type="submit"
        className="bg-green-600 text-white p-2 rounded hover:bg-green-700 transition"
      >
        Login ✅
      </button>
    </form>
  );
};

// Main App Component
const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-pink-100 to-yellow-100 flex flex-col items-center gap-6 p-6 font-sans">
      <h1 className="text-4xl font-bold text-indigo-900 mb-4 underline decoration-dotted">
        🎓 Assignment 3 - Srishti Jitpure
      </h1>
      <TextUpdater />
      <InputForm />
      <UserCard name="Srishti Jitpure" email="srishti.jitpure@example.com" />
      <StyledButton />
      <LoginForm />
    </div>
  );
};

export default App;
