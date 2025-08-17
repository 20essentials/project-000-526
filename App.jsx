import React from "react";
import { createRoot } from "react-dom/client";
import { createStitches } from "@stitches/react";

const { styled, keyframes } = createStitches({
  utils: {},
});

const move = keyframes({
  "0%": { backgroundPosition: "0px" },
  "100%": { backgroundPosition: "200px" },
});

const Container = styled("body", {
  height: "100vh",
  width: "100%",
  display: "flex",
  flexWrap: "wrap",
  placeContent: "center",
  backgroundColor: "#212121",
  margin: 0,
  fontFamily:
    "sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue'",
});

const WaveTitle = styled("h2", {
  fontSize: "4em",
  position: "relative",
  color: "#fff1",
  "&::before, &::after": {
    content: "attr(data-text)",
    position: "absolute",
    left: 0,
    top: 0,
    backgroundImage: "url('assets/wave.png')",
    backgroundClip: "text",
    backgroundRepeat: "repeat-x",
    animation: `${move} 2s linear infinite`,
  },
  "&::after": {
    filter: "blur(10px) saturate(900%)",
  },
  "@media (max-width: 1111px)": {
    zoom: 0.5,
    marginInline: "auto",
  },
});

function App() {
  return (
    <Container>
      <WaveTitle data-text="GOOD MORNING">GOOD MORNING</WaveTitle>
    </Container>
  );
}

const rootElement = document.createElement("div");
document.body.appendChild(rootElement);
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;
