import React, { useState } from "react";
import "./CodeEditor.css";

const CodeEditor = () => {
  const [code, setCode] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("Javascript");

  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };

  const handleSave = () => {
    const file = new Blob([code], { type: "text/plain" });
    const link = document.createElement("a");
    link.download = `code-${selectedLanguage}.txt`;
    link.href = URL.createObjectURL(file);
    link.click();
  };

  return (
    <div className="code-editor">
      <div className="code-editor-header">
        <h3>Text Editor</h3>
        <select
          className="language-select"
          value={selectedLanguage}
          onChange={(event) => setSelectedLanguage(event.target.value)}
        >
          <option value="Javascript">Javascript</option>
          <option value="Python">Python</option>
        </select>
        <button className="save-button" onClick={handleSave}>
          Save
        </button>
      </div>
      <textarea
        className="code-input"
        value={code}
        onChange={handleCodeChange}
      />
    </div>
  );
};

export default CodeEditor;
