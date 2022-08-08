import React from "react";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar"
import Container from "./Components/Container/Container";
import './index.css'


function App() {
  return (
    <div className="App">
      <Navbar />
        <Container />
      <Footer />
    </div>
  );
}

export default App;
