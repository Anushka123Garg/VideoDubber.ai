import { useState, useEffect, useRef } from "react";
import "./styles.css";
import { ToANSI } from './copy.jsx';
import {
  Container,
  Title,
  Text,
  Button,
  Group,
} from "@mantine/core";
import ColorSelection from "./colors";

function App() {
  const [text, setText] = useState(
    'Welcome to <span class="ansi-33">Rebane</span>\'s <span class="ansi-45"><span class="ansi-37">Discord</span></span> <span class="ansi-31">C</span><span class="ansi-32">o</span><span class="ansi-33">l</span><span class="ansi-34">o</span><span class="ansi-35">r</span><span class="ansi-36">e</span><span class="ansi-37">d</span>&nbsp;Text Generator!'
  );

  const textAreaRef = useRef(null);
  useEffect(() => {
    setText(
      'Welcome to <span class="ansi-33">Rebane</span>\'s <span class="ansi-45"><span class="ansi-37">Discord</span></span> <span class="ansi-31">C</span><span class="ansi-32">o</span><span class="ansi-33">l</span><span class="ansi-34">o</span><span class="ansi-35">r</span><span class="ansi-36">e</span><span class="ansi-37">d</span>&nbsp;Text Generator!'
    );
  }, []);

  const applyStyle = (ansi) => {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0 || selection.toString().trim() === '') {
        alert('Please select some text first!');
        return;
    }

    const range = selection.getRangeAt(0);
    const selectedText = range.toString();

    // For reset/removing formatting
    if (ansi === '0') {
        const textNode = document.createTextNode(selectedText);
        range.deleteContents();
        range.insertNode(textNode);
        return;
    }

    const span = document.createElement("span");
    span.textContent = selectedText;
    
    // Add background or foreground class based on the code
    if (parseInt(ansi) >= 40) {
        span.className = `ansi-${ansi}`;
    } else {
        span.className = `ansi-${ansi}`;
    }

    range.deleteContents();
    range.insertNode(span);

    // Clear selection
    selection.removeAllRanges();
};

const copyToClipboard = async () => {
  if (!textAreaRef.current) return;

  const toCopy = "```ansi\n" + ToANSI(textAreaRef.current.childNodes, [{ fg: 2, bg: 2, st: 2 }]) + "\n```";
  await navigator.clipboard.writeText(toCopy); 
};


  return (
    <Container
      fluid
      style={{
        backgroundColor: "#36393F",
        color: "white",
        minHeight: "55rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: 0,
        margin: 0,
        fontFamily: "sans-serif",
      }}
    >
      <Title
        order={1}
        align="center"
        style={{ fontSize: "2rem", fontWeight: "bold" }}
      >
        Rebane's Discord{" "}
        <Text span style={{ color: "#5865F2" }} inherit>
          Colored
        </Text>{" "}
        Text Generator
      </Title>

      <Title
        order={2}
        align="center"
        style={{
          fontSize: "1.2rem",
          fontWeight: "bold",
          marginBottom: "0rem",
          marginTop: "0rem",
        }}
      >
        About
      </Title>

      <Text align="center" style={{ maxWidth: "500px" }}>
        This is a simple app that creates colored Discord messages using the
        ANSI color codes available on the latest Discord desktop versions.
        <br />
        <br />
        To use this, write your text, select parts of it and assign colors to
        them, then copy it using the button below, and send in a Discord
        message.
      </Text>

      <Title
        order={3}
        align="center"
        style={{
          fontSize: "1.2rem",
          fontWeight: "bold",
          marginBottom: "0rem",
          marginTop: "0rem",
        }}
      >
        Source Code
      </Title>

      <Text align="center" size="md" mx="md" style={{ maxWidth: "500px" }}>
        This app runs entirely in your browser and the source code is freely
        available on{" "}
        <Text
          component="a"
          href="https://gist.github.com/rebane2001/07f2d8e80df053c70a1576d27eabe97c"
          style={{ color: "#00a1e4", textDecoration: "underline" }}
        >
          GitHub
        </Text>
        . Shout out to kkrypt0nn for{" "}
        <Text
          component="a"
          href="https://gist.github.com/kkrypt0nn/a02506f3712ff2d1c8ca7c9e0aed7c06"
          style={{ color: "#00a1e4", textDecoration: "underline" }}
        >
          this guide
        </Text>{" "}
        .
      </Text>

      <Title
        order={4}
        align="center"
        style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          marginBottom: "0rem",
          marginTop: "0.5rem",
        }}
      >
        Create your text
      </Title>

      <Group
        gap="xl"
        position="center"
        style={{ marginBottom: "1.5rem", marginTop: "1.2rem" }}
      >

        <Button variant="default" onClick={() => applyStyle('0')} style={buttonStyle}>Reset All</Button>
        <Button variant="default" onClick={() => applyStyle('1')} style={buttonStyle} fw={700}>Bold</Button>
        <Button variant="default" onClick={() => applyStyle('4')} style={buttonStyle} td="underline">Line</Button>
      </Group>

      <ColorSelection onColorSelect={applyStyle}/>

      <div
        ref={textAreaRef}
        contentEditable
        onInput={() => setText(textAreaRef.current.innerHTML)}
        style={{
          backgroundColor: "#2F3136",
          height: "200px",
          width: "600px",
          color: "#B9BBBE",
          border: "1px solid #202225",
          padding: "5px",
          borderRadius: "5px",
          fontFamily: "monospace",
          marginBottom: "1rem",
          fontSize: "14px",
          resize: "both",
          overflow: "auto",
        }}
        dangerouslySetInnerHTML={{ __html: text }}
      ></div>

      <Button
          style={{
            padding: "0.5rem 1rem",
            border: 'none',
            borderRadius: "0.2rem",
            cursor: "pointer",
            backgroundColor: "#4f545c",
            color: "white",
            marginTop: '0.5rem',
            
          }}
          variant="default"
          onClick={copyToClipboard}
        >Copy text as Discord formatted</Button>

      <Text size="xs" style={{fontSize: '0.8rem', marginBottom: '1rem'}}>This is an unofficial tool, it is not made or endorsed by Discord</Text>
    </Container>
  );
}
const buttonStyle = {
  padding: "0.5rem 1rem",
  border: "none",
  borderRadius: "0.2rem",
  backgroundColor: "#4f545c",
  color: "white",
  cursor: "pointer",
  marginRight: '0.4rem',
};

export default App;
