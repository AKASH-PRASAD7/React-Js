import "./App.css";
import Navbar from "./Components/Navbar";
const myname = "Akash";
function App() {
  return (
    <div className="App">
      <Navbar name={myname} />
    </div>
  );
}

export default App;
