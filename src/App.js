import Content from "./Content";
import { ThemeContext, ThemeProvider } from "./ThemeContext";
import "./App.css";
import { useContext } from "react";
function App() {
  const context = useContext(ThemeContext);
  return (
    <div style={{ padding: 20 }}>
      <button onClick={context.handleTheme}>Toggle</button>
      <Content />
    </div>
  );
}

export default App;
