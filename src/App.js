import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Table from "./pages/Table.js";
import Hand from "./pages/Hand.js";


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/table" element={<Table />} />
      <Route path="/table/:tableName" element={<Table />} />
      <Route path="hand" element={<Hand />} />
      <Route path="hand/:nickname" element={<Hand />} />
    </Routes>



  </>

  );
}


export default App;
