import { useRef, useEffect } from "react";
import { Textarea } from "@mantine/core";
import "./styles.css";

function FloatingLabelInput({ text, setText, textAreaRef }) {
  const editableDivRef = useRef(null);

  useEffect(() => {
    if (editableDivRef.current) {
      editableDivRef.current.innerHTML = text; // Sync formatted text
    }
  }, [text]);

  const handleInput = () => {
    if (editableDivRef.current) {
      setText(editableDivRef.current.innerHTML); // Store formatted text
    }
  };

  return (
    <div>
      {/* Editable div for formatting */}
      <div
        ref={editableDivRef}
        contentEditable
        onInput={handleInput}
        style={{
          resize: "both",
          overflow: "auto",
          textAlign: "left",
          fontFamily: "monospace",
          backgroundColor: "#2F3136",
          color: "#B9BBBE",
          border: "1px solid #202225",
          padding: "5px",
          display: "inline-block",
          fontSize: "0.875rem",
          lineHeight: "1.125rem",
          height: "200px",
          width: "600px",
          borderRadius: "5px",
          whiteSpace: "pre-wrap",
          minHeight: "5rem",
        }}
      />

      {/* Hidden textarea to store raw text */}
      <Textarea
        ref={textAreaRef}
        value={text}
        onChange={(event) => setText(event.target.value)}
        style={{ display: "none" }}
      />
    </div>
  );
}

export { FloatingLabelInput };
