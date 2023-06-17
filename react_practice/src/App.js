import "./App.css";
import Navbar from "./Components/Navbar";
import Text from "./Components/Text";
const myname = "Akash";
function App() {
  return (
    <div className="App">
      <Navbar name={myname} />
      <Text />
    </div>
  );
}

export default App;
