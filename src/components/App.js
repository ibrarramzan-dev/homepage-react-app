import React, { useEffect } from "react";
import Header from "./Header";
import MainSlider from "./MainSlider";
import TrendingAthletes from "./TrendingAthletes";
import NewMerch from "./NewMerch";
import PopularMerch from "./PopularMerch";
import EnrollmentBanner from "./EnrollmentBanner";
import PersonalVideos from "./PersonalVideos";
import Organizations from "./Organizations";
import LatestNews from "./LatestNews";
import Footer from "./Footer";

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

      <EnrollmentBanner />

      <PersonalVideos />

      <Organizations />

      <LatestNews />

      <Footer />
    </div>
  );
}

export default App;
