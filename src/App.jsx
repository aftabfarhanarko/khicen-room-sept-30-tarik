import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import FullItems from "./Components/Items/FullItems";

const App = () => {
  return (
    <div className="lexend-font w-11/12 mx-auto ">
      <header>
        <Navbar></Navbar>
        <Hero></Hero>
      </header>
      <main>
        <FullItems></FullItems>
      </main>
    </div>
  );
};

export default App;
