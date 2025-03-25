import { Group, Button, Text, Tooltip } from "@mantine/core";

const fgColors = [
    "#4f545c",
    "#dc322f",
    "#859900",
    "#b58900",
    "#268bd2",
    "#d33682",
    "#2aa198",
    "#ffffff",
  ];
  const bgColors = [
    "#002b36",
    "#cb4b16",
    "#586e75",
    "#657b83",
    "#839496",
    "#6c71c4",
    "#93a1a1",
    "#fdf6e3",
  ];
  const fgTooltips = [
    "Dark Grey", "Red", "Green", "Yellow", "Blue", "Magenta", "Cyan", "White"
  ];
  
  // Define specific tooltips for the background colors
  const bgTooltips = [
    "Dark Blue", "Orange", "Slate", "Gray", "Light Gray", "Purple", "Light Slate", "Cream"
  ];
const colors = [
    { class: 'ansi-31', name: 'Red' },
    { class: 'ansi-32', name: 'Green' },
    { class: 'ansi-33', name: 'Yellow' },
    { class: 'ansi-34', name: 'Blue' },
    { class: 'ansi-35', name: 'Magenta' },
    { class: 'ansi-36', name: 'Cyan' },
    { class: 'ansi-37', name: 'White' },
  ];
  

  function ColorSelection({ onColorSelect }) {
    const handleColorSelect = (ansiCode) => {
      if (onColorSelect) {
        onColorSelect(`\x1b[${ansiCode}m`);
      }
    };

  return (
    <>
      {/* FG (Text Color) */}
      <Group position="left" style={{display: 'flex', alignItems: "center", marginTop: "1rem"}} spacing="xl" mt="lg">
        <Text
          style={{
            fontWeight: "bold",
            marginRight: "0.4rem",
          }}>FG
          </Text>
          <Group spacing="xs">
          {fgColors.map((color, index) => (
            <Tooltip key={index} title={fgTooltips[index]}>
            <Button
              style={{
                backgroundColor: color,
                width: "37px",
                cursor: "pointer",
                height: "34px",
                marginRight: "0.3rem",
                minWidth: "30px",
                borderRadius: "3px",
                border: "none",
              }}
              onClick={() => handleColorSelect(30 + index)}
            />
            </Tooltip>
          ))}
        </Group>
      </Group>

      <Group position="left" style={{display: 'flex', alignItems: "center", marginTop: "3rem", marginBottom: "0.5rem"}} spacing="xl" mt="xl">
        <Text
          style={{
            fontWeight: "bold",
            marginRight: "0.4rem",
          }}>BG
          </Text>
          <Group spacing="xs">
          {bgColors.map((color, index) => (
            <Tooltip key={index} title={bgTooltips[index]} position="top" withArrow>
            <Button
              style={{
                backgroundColor: color,
                cursor: "pointer",
                width: "37px",
                height: "34px",
                marginRight: "0.3rem",
                minWidth: "30px",
                borderRadius: "3px",
                border: "none",
                position: "relative",
              }}
              onClick={() => handleColorSelect(40 + index)}
            />
            </Tooltip>
          ))}
        </Group>
      </Group>
    </>
  );
}

export default ColorSelection;
