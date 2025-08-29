
// src/App.jsx
import React, { useState } from "react";
import "./App.css";
import { pairings, resolveKey } from "./database";

function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(null);

  const getRandomItems = (arr, count = 3) => {
    if (!arr || arr.length === 0) return [];
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const runSearch = () => {
    // clear before new results (in case user clicks button without focusing)
    setResults(null);

    const key = resolveKey(query);
    if (key && pairings[key]) {
      setResults({
        wines: getRandomItems(pairings[key].wine, 3),
        beers: getRandomItems(pairings[key].beer, 3),
        cocktails: getRandomItems(pairings[key].cocktail, 3),
      });
    } else {
      // intelligent random fallback: pick a random category
      const keys = Object.keys(pairings);
      const randomKey = keys[Math.floor(Math.random() * keys.length)];
      setResults({
        wines: getRandomItems(pairings[randomKey].wine, 3),
        beers: getRandomItems(pairings[randomKey].beer, 3),
        cocktails: getRandomItems(pairings[randomKey].cocktail, 3),
      });
    }
  };

  return (
    <div className="app-container">
      <h1 className="title">Beverage Picker</h1>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter a food…"
          value={query}
          onFocus={() => setResults(null)}          // clear on click/tap into box
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && runSearch()}
          aria-label="Food input"
        />
        <button onClick={runSearch}>Suggest Drinks</button>
      </div>

      <p className="helper-text">Get beverage suggestions that pair with your meal.</p>

      {results && (
        <div className="results">
          <div className="card">
            <h2>Wines</h2>
            <ul>
              {results.wines.map((v, i) => (
                <li key={`wine-${i}`}>{v}</li>
              ))}
            </ul>
          </div>

          <div className="card">
            <h2>Beers</h2>
            <ul>
              {results.beers.map((v, i) => (
                <li key={`beer-${i}`}>{v}</li>
              ))}
            </ul>
          </div>

          <div className="card">
            <h2>Cocktails</h2>
            <ul>
              {results.cocktails.map((v, i) => (
                <li key={`cocktail-${i}`}>{v}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
