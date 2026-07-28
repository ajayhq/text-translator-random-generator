import { useState, useCallback, useEffect } from "react";

export default function RandomString() {
  const [length, setLength] = useState(10);
  const [randomString, setRandomString] = useState("");

  const generateString = useCallback(() => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    let result = "";

    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }

    setRandomString(result);
  }, [length]);

  useEffect(() => {
    generateString();
  }, [generateString]);

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Random String Generator
      </h2>

      <label className="block mb-2 font-semibold">
        String Length
      </label>

      <input
        type="number"
        value={length}
        min="1"
        max="50"
        onChange={(e) => setLength(Number(e.target.value))}
        className="border p-2 w-full rounded"
      />

      <button
        onClick={generateString}
        className="bg-blue-600 text-white px-5 py-2 rounded mt-5 w-full"
      >
        Generate
      </button>

      <div className="mt-6 border rounded p-4 bg-gray-100">
        <p className="font-semibold">Generated String:</p>
        <p className="text-blue-700 break-all">{randomString}</p>
      </div>
    </div>
  );
}