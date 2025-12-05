"use client";
import { useState } from "react";
import { Wand2, Image as ImageIcon, Loader2 } from "lucide-react";

export default function AITools() {
  const [productName, setProductName] = useState("");
  const [descResult, setDescResult] = useState("");
  const [loading, setLoading] = useState(false);

  // Background Remover State
  const [imageUrl, setImageUrl] = useState("");
  const [bgResult, setBgResult] = useState("");
  const [bgLoading, setBgLoading] = useState(false);

  const generateDescription = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/ai/generate", {
        method: "POST",
        body: JSON.stringify({ productName }),
      });
      const data = await res.json();
      setDescResult(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const removeBackground = async () => {
    setBgLoading(true);
    try {
        // In prod, you'd upload the file first. Here we assume a URL for simplicity
      const res = await fetch("/api/remove-bg", {
        method: "POST",
        body: JSON.stringify({ imageUrl }),
      });
      const data = await res.json();
      setBgResult(data.output);
    } catch (e) {
      console.error(e);
    } finally {
      setBgLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Tool 1: Description Gen */}
      <div className="bg-card border border-gray-800 p-6 rounded-xl">
        <div className="flex items-center gap-3 mb-4 text-purple-400">
          <Wand2 />
          <h3 className="font-bold text-xl">Description Generator</h3>
        </div>
        <input 
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          placeholder="e.g. Baggy Y2K Jeans"
          className="w-full bg-gray-900 border border-gray-700 p-3 rounded-lg text-white mb-4 focus:ring-2 ring-purple-500 outline-none"
        />
        <button 
          onClick={generateDescription}
          disabled={loading}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-lg flex justify-center items-center gap-2"
        >
          {loading && <Loader2 className="animate-spin" />} Generate
        </button>
        {descResult && (
          <div className="mt-4 p-4 bg-gray-900 rounded-lg text-gray-300 text-sm whitespace-pre-wrap">
            {descResult}
          </div>
        )}
      </div>

      {/* Tool 2: Background Remover */}
      <div className="bg-card border border-gray-800 p-6 rounded-xl">
        <div className="flex items-center gap-3 mb-4 text-pink-400">
          <ImageIcon />
          <h3 className="font-bold text-xl">Background Remover</h3>
        </div>
        <input 
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          placeholder="Paste Image URL..."
          className="w-full bg-gray-900 border border-gray-700 p-3 rounded-lg text-white mb-4 focus:ring-2 ring-pink-500 outline-none"
        />
        <button 
          onClick={removeBackground}
          disabled={bgLoading}
          className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 rounded-lg flex justify-center items-center gap-2"
        >
          {bgLoading && <Loader2 className="animate-spin" />} Remove BG
        </button>
        {bgResult && (
          <div className="mt-4">
            <img src={bgResult} alt="Clean BG" className="rounded-lg w-full" />
            <a href={bgResult} download className="block text-center mt-2 text-sm text-pink-400 hover:underline">Download</a>
          </div>
        )}
      </div>
    </div>
  );
}
