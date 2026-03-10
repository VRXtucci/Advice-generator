import React from "react";
import Button from "./Button";
import CopyButton from "./CopyButton";
import TranslateButton from "./TranslateButton";

function Spinner() {
  return (
    <div className="flex justify-center items-center">
      <div className="w-6 h-6 border-4 border-green-400 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}

export default function AdviceCard({
  advice,
  id,
  loading,
  error,
  fade,
  onClick,
  onTranslated
}) {
  return (
    <div className="bg-slate-800 text-center p-6 sm:p-8 rounded-xl max-w-md w-full shadow-lg h-80 flex flex-col justify-between">
      {/* ID */}
      <h2 className="text-green-400 tracking-widest text-sm sm:text-base mb-3 sm:mb-4">
        ADVICE #{id || "..."}
      </h2>

      {/* Advice con fade-in/out */}
      <p
        className={`text-white text-base sm:text-xl transition-opacity duration-500 flex-1 flex items-center justify-center px-2 sm:px-0 ${
          fade ? "opacity-0" : "opacity-100"
        }`}
      >
        {loading ? <Spinner /> : error ? error : `"${advice}"`}
      </p>

      {/* Botones responsive */}
      <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-3 sm:mt-4">
        <Button onClick={onClick} />
        <CopyButton text={advice} />
        <TranslateButton text={advice} onTranslated={onTranslated} />
      </div>
    </div>
  );
}