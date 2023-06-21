import "@/styles/globals.css";
import React from "react";
import type { AppProps } from "next/app";
import Btn from "./components/Btn";

const App: React.FC = () => {
  return (
    <div className="h-[100vh] overflow-hidden w-full bg-corPrincipal flex flex-col gap-3 ">
      <div className="">
        <Btn onClick={() => console.log("CLIQUEI LOGIN")} text="Login" />
      </div>
      <div>
        <Btn onClick={() => console.log("CLIQUEI SIGNUP")} text="Signup" />
      </div>
    </div>
  );
};

export default App;
