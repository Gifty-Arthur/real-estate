import "./App.css";

import Blog from "./Components/Pages/Blog";
import Blogex from "./Components/Pages/Blogex";
import Home from "./Components/Pages/Home";
import Listings from "./Components/Pages/Listings";
import Members from "./Components/Pages/Members";
import Navbar from "./Components/Pages/Navbar";
import Pageex from "./Components/Pages/Pageex";
import Pages from "./Components/Pages/Pages";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Listings />
      <Members />
      <Blog />
      <Blogex />
      <Pages />
      <Pageex />
      <Extension />
      <Articles />
      <Popular />
    </>
  );
}
import SubPage from "./Components/Pages/Extension";
import Extension from "./Components/Pages/Extension";
import Articles from "./Components/Pages/Articles";
import Popular from "./Components/Pages/Popular";

export default App;
