import React, { useEffect } from "react";
import Header from "./Header";

function App() {
  useEffect(() => {
    console.log(window.innerWidth);
  }, []);

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
