import React, { Suspense } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import OderCointner from "./Components/OderCointner";
import {  HashLoader } from "react-spinners";
const promise = fetch("/orders.json").then((res) => res.json());

const App = () => {
  return (
    <div >
      <header className=" w-11/12 mx-auto ">
        <Navbar></Navbar>
        <Hero></Hero>
      </header>
      <main>
        <Suspense fallback={<div className="min-h-screen flex justify-center items-center"><HashLoader color="#19cf30" /></div>}>
          <OderCointner promise={promise}></OderCointner>
        </Suspense>
      </main>
    </div>
  );
};

export default App;
