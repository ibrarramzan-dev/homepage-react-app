import React, { useEffect } from "react";
import Header from "./Header";
import MainSlider from "./MainSlider";

function App() {
  useEffect(() => {
    console.log(window.innerWidth);
  }, []);

  return (
    <div className="App">
      <Header />
      <MainSlider />
    </div>
  );
}

export default App;
