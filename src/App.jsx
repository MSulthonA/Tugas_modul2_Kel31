import React from "react";
import "./App.css";
import ReactJSX, { ReactNoJSX } from "./components/ReactJSX";
import CompAndProps from "./components/CompAndProps";
import Button from "./elements/Button";
import TextInput from "./elements/TextInput";
import TextLabel from "./elements/TextLabel";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <ReactJSX />
        <ReactNoJSX /> */}
        <TextLabel background="steelblue">Tugas Praktikum Modul 2</TextLabel>
        <TextLabel background="skyblue">Kelompok 31</TextLabel>
        <div className="Components">
          <form action="">
            <TextInput border="darkblue" placeholder="NIM" />
            <Button background="steelblue">Search</Button>
          </form>
          <CompAndProps
            bgColor1="#0E2954"
            bgColor2="#1F6E8C"
            bgColor3="#2E8A99"
            bgColor4="#84A7A1"
          />
        </div>
      </header>
    </div>
  );
}
export default App;
