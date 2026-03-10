// src/components/Button.jsx
import React from "react";

export default function Button({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-green-400 hover:bg-green-300 text-black px-6 py-3 rounded-full transition"
    >
      🎲
    </button>
  );
}