import React, { useState } from "react";

export default function SearchBox({ onSearch }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) onSearch(input.trim());
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search GitHub users"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        aria-label="Search GitHub users"
      />
      <button type="submit">Search</button>
    </form>
  );
}
