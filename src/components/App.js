import React, { useEffect } from "react";
import Header from "./Header";
import MainSlider from "./MainSlider";
import TrendingAthletes from "./TrendingAthletes";
import NewMerch from "./NewMerch/NewMerch";
import PopularMerch from "./PopularMerch/PopularMerch";

function App() {
  useEffect(() => {
    console.log(window.innerWidth);
  }, []);

  return (
    <div className="App">
      <Header />
      <MainSlider />
      <TrendingAthletes />
      <NewMerch />
      <PopularMerch />
    </div>
  );
}

export default App;
