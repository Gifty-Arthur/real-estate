import "./App.css";
import Home from "./Components/Pages/Home";
import Listings from "./Components/Pages/Listings";
import Members from "./Components/Pages/Members";
import Navbar from "./Components/Pages/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Listings />
      <Members />
    </>
  );
}

export default App;
