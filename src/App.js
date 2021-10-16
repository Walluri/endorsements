import "./App.css";
import CardHolder from "./components/CardHolder";
import CardContent from "./components/cardContent";

function App() {
  return (
    <div>
      <h3>
        Endorsements for VALLURI - Select a Profile on the left to view their
        appreciation on the right.
      </h3>
      <div className="container">
        <CardHolder></CardHolder>
        <CardContent></CardContent>
      </div>
    </div>
  );
}

export default App;
