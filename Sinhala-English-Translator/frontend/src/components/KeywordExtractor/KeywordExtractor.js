import React, { useEffect, useState } from "react";
import "../../translator/translator.css";
import { keywordExtractSinhala } from "../../services/keyword_service";

const KeywordExtractor = () => {
  const [inputText, setInputText] = useState("");
  const [load, setLoad] = useState(false);
  const [keywords, setKeywords] = useState([]);

  const extract = async () => {
    setLoad(true);
    try {
      const extractedKeywords = await keywordExtractSinhala(inputText);
      setKeywords(extractedKeywords);
    } catch (error) {
      console.log(`${error}`);
    }
    setLoad(false);
  };

  return (
    <div className="container">
      <h1>Extract Keywords</h1>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      {load && <p>Extracting ..... </p>}
      {!load && (
        <div className="app">
          <textarea
          className="extract-textarea"
            placeholder="Enter text here"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            rows={4}
            style={{
              border: "2px solid white",
              borderRadius: "8px",
              padding: "8px",
              fontSize: 20,
            }}
          />
          <div style={{ width: 16 }} />
          <button
            style={{
              backgroundColor: "#4CAF50",
              color: "white",
              border: "2px solid white",
              padding: "10px 20px",
              borderRadius: "5px",
              cursor: "pointer",
              marginTop: "10px",
              height: 50,
              width:"200px",
              // fontSize:"20px"
            }}
            onClick={extract}
          >
            Extract Keywords
          </button>
        </div>
      )}
      {keywords.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <h3 style={{ color: "white" }}>Extracted Keywords:</h3>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {keywords.map((keyword, index) => (
              <li key={index} style={{ color: "white" }}>
                {keyword}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default KeywordExtractor;
