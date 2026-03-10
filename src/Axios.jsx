// src/axios.js
import axios from "axios";

// Obtener advice
export const getAdviceFromAPI = async () => {
  try {
    const res = await axios.get("https://api.adviceslip.com/advice");
    return {
      id: res.data.slip.id,
      advice: res.data.slip.advice,
    };
  } catch (error) {
    console.error("Error al obtener advice:", error);
    return null;
  }
};

// Traducir texto (usa LibreTranslate)
export const translateText = async (text, target = "es") => {
  try {
    const res = await axios.post(
      "https://libretranslate.de/translate",
      {
        q: text,
        source: "en",
        target: target,
        format: "text",
      },
      { headers: { "Content-Type": "application/json" } }
    );
    return res.data.translatedText;
  } catch (error) {
    console.error("Error al traducir:", error);
    return null;
  }
};