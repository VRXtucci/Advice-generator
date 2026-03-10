// src/hooks/useAdvice.js
import { useState, useEffect } from "react";
import { getAdviceFromAPI } from "../Axios";

export function useAdvice() {
  const [advice, setAdvice] = useState("");
  const [id, setId] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [fade, setFade] = useState(false);

  const fetchAdvice = async () => {
    setFade(true);
    setLoading(true);
    setError(null);

    const data = await getAdviceFromAPI();
    if (data) {
      setTimeout(() => {
        setId(data.id);
        setAdvice(data.advice);
        setFade(false);
      }, 200);
    } else {
      setError("No se pudo cargar el consejo");
      setFade(false);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return { advice, id, loading, error, fade, fetchAdvice, setAdvice };
}