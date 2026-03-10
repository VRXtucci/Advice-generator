// src/components/TranslateButton.jsx
import React, { useState } from "react";
import { translateText } from "../Axios";

export default function TranslateButton({ text, onTranslated }) {
  const [loading, setLoading] = useState(false);

  const handleTranslate = async () => {
    if (!text) return;
    setLoading(true);
    const translated = await translateText(text);
    if (translated) onTranslated(translated);
    setLoading(false);
  };

  return (
    <button
      onClick={handleTranslate}
      className="bg-yellow-400 hover:bg-yellow-300 text-black px-4 py-2 rounded-full transition"
      disabled={loading}
    >
      {loading ? "Traduciendo..." : "🌐 Traducir"}
    </button>
  );
}