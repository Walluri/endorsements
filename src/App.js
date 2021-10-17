import "./App.css";
import CardHolder from "./components/CardHolder";
import CardContent from "./components/cardContent";

import { useState } from "react";
function App() {
  const [url, setUrl] = useState("");
  function clickedOnUser(url) {
    setUrl(url);
  }
  return (
    <div>
      <h3>
        Endorsements for VALLURI - Select a Profile on the left to view their
        appreciation on the right.
      </h3>
      <div className="container">
        <CardHolder cb={clickedOnUser}></CardHolder>
        <CardContent url={url}></CardContent>
      </div>
    </div>
  );
}

export default App;
