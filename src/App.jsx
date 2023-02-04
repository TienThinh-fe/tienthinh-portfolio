import { Landing, Contact } from "./components";
import useStore from "./store";

function App() {
  const theme = useStore((state) => state.theme);

  return (
    <div className={`App App--${theme}`}>
      <Landing />
      <Contact />
    </div>
  );
}

export default App;
