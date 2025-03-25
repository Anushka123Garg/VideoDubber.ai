import { Group, Button, Text, Tooltip } from "@mantine/core";

const ANSI_COLORS = {
  30: { tooltip: "Dark Grey", color: "#4f545c" },
  31: { tooltip: "Red", color: "#dc322f" },
  32: { tooltip: "Green", color: "#859900" },
  33: { tooltip: "Yellow", color: "#b58900" },
  34: { tooltip: "Blue", color: "#268bd2" },
  35: { tooltip: "Magenta", color: "#d33682" },
  36: { tooltip: "Cyan", color: "#2aa198" },
  37: { tooltip: "White", color: "#ffffff" },
  40: { tooltip: "Dark Blue", color: "#002b36" },
  41: { tooltip: "Orange", color: "#cb4b16" },
  42: { tooltip: "Slate", color: "#586e75" },
  43: { tooltip: "Gray", color: "#657b83" },
  44: { tooltip: "Light Gray", color: "#839496" },
  45: { tooltip: "Purple", color: "#6c71c4" },
  46: { tooltip: "Light Slate", color: "#93a1a1" },
  47: { tooltip: "Cream", color: "#fdf6e3" }
};

function ColorSelection() {
  const handleColorSelect = (ansiCode) => {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0 || selection.toString().trim() === '') {
      alert('Please select some text first!');
      return;
    }

    const range = selection.getRangeAt(0);
    const selectedText = range.toString();

    const span = document.createElement("span");
    span.textContent = selectedText;
    span.className = `ansi-${ansiCode}`;

    range.deleteContents();
    range.insertNode(span);
    selection.removeAllRanges();
  };

  return (
    <>
      <Group position="left" style={{ display: 'flex', alignItems: "center", marginTop: "1rem" }} spacing="xl" mt="lg">
        <Text style={{ fontWeight: "bold", marginRight: "0.4rem" }}>FG</Text>
        <Group spacing="xs">
          {[30, 31, 32, 33, 34, 35, 36, 37].map((code) => (
            <Tooltip key={code} label={ANSI_COLORS[code].tooltip}>
              <Button
                style={{
                  backgroundColor: ANSI_COLORS[code].color,
                  width: "37px",
                  cursor: "pointer",
                  height: "34px",
                  marginRight: "0.3rem",
                  minWidth: "30px",
                  borderRadius: "3px",
                  border: "none",
                }}
                onClick={() => handleColorSelect(code)}
              />
            </Tooltip>
          ))}
        </Group>
      </Group>

      <Group position="left" style={{ display: 'flex', alignItems: "center", marginTop: "3rem", marginBottom: "0.5rem" }} spacing="xl" mt="xl">
        <Text style={{ fontWeight: "bold", marginRight: "0.4rem" }}>BG</Text>
        <Group spacing="xs">
          {[40, 41, 42, 43, 44, 45, 46, 47].map((code) => (
            <Tooltip key={code} label={ANSI_COLORS[code].tooltip} position="top" withArrow>
              <Button
                style={{
                  backgroundColor: ANSI_COLORS[code].color,
                  cursor: "pointer",
                  width: "37px",
                  height: "34px",
                  marginRight: "0.3rem",
                  minWidth: "30px",
                  borderRadius: "3px",
                  border: "none",
                  position: "relative",
                }}
                onClick={() => handleColorSelect(code)}
              />
            </Tooltip>
          ))}
        </Group>
      </Group>
    </>
  );
}

export default ColorSelection;
