import React, { useEffect } from "react";
import Header from "./Header";
import MainSlider from "./MainSlider";
import TrendingAthletes from "./TrendingAthletes";

function App() {
  useEffect(() => {
    console.log(window.innerWidth);
  }, []);

  return (
    <div className="App">
      <Header />
      <MainSlider />
      <TrendingAthletes />
    </div>
  );
}

export default App;
