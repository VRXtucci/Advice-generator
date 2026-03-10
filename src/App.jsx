import React from "react";
import AdviceCard from "./components/AdviceCard";
import { useAdvice } from "./hooks/useAdvice";

function App() {
  const { advice, id, loading, error, fade, fetchAdvice, setAdvice } = useAdvice();

  return (
    <div className="bg-slate-900 min-h-screen flex items-center justify-center p-4 sm:p-6">
      <AdviceCard
        advice={advice}
        id={id}
        loading={loading}
        error={error}
        fade={fade}
        onClick={fetchAdvice}
        onTranslated={setAdvice}
      />
    </div>
  );
}

export default App;