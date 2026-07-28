import { useState } from "react";
import axios from "axios";

export default function Translator() {
  const [text, setText] = useState("");
  const [language, setLanguage] = useState("ta");
  const [translatedText, setTranslatedText] = useState("");

  const translateText = async () => {
    const options = {
      method: "POST",
      url: "https://google-translator9.p.rapidapi.com/v2",
      headers: {
  "x-rapidapi-key": import.meta.env.VITE_RAPIDAPI_KEY,
  "x-rapidapi-host": "google-translator9.p.rapidapi.com",
  "Content-Type": "application/json",
},
      data: {
        q: text,
        source: "en",
        target: language,
        format: "text",
      },
    };

    try {
      const response = await axios.request(options);

      console.log(response.data);

      // Display translated text
      setTranslatedText(
        response.data.data.translations[0].translatedText
      );
    } catch (error) {
  console.error("Full Error:", error);

  if (error.response) {
    console.log("Status:", error.response.status);
    console.log("Data:", error.response.data);
    alert(JSON.stringify(error.response.data, null, 2));
  } else {
    alert(error.message);
  }
}
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-6">
        🌍 Text Translator
      </h1>

      <textarea
        className="w-full border rounded-lg p-3"
        rows="5"
        placeholder="Enter English text..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <select
        className="w-full border rounded-lg p-2 mt-4"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
      >
        <option value="ta">Tamil</option>
        <option value="hi">Hindi</option>
        <option value="fr">French</option>
        <option value="es">Spanish</option>
        <option value="zh-CN">Chinese</option>
      </select>

      <button
        onClick={translateText}
        className="w-full bg-blue-600 text-white py-2 rounded-lg mt-4 hover:bg-blue-700"
      >
        Translate
      </button>

      <div className="mt-6 p-4 border rounded-lg bg-gray-100">
        <h2 className="font-bold mb-2">Translated Text</h2>
        <p>{translatedText}</p>
      </div>
    </div>
  );
}