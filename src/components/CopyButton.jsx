// src/components/CopyButton.jsx
import React, { useState } from "react";

export default function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button
      onClick={handleCopy}
      className="bg-blue-400 hover:bg-blue-300 text-black px-4 py-2 rounded-full transition relative"
    >
      {copied ? "Copiado!" : "📋"}
    </button>
  );
}