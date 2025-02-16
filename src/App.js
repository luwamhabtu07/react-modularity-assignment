import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ContentA } from "./components/ContentA";  // ✅ Import only ContentA from ContentA.js
import { ContentB } from "./components/ContentB";  // ✅ Import ContentB from ContentB.js

function App() {
  return (
    <div>
      <Header />
      <ContentA />
      <ContentB />
      <Footer />
    </div>
  );
}

export default App;
