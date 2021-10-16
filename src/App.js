import "./App.css";
import UserCard from "./components/userCard";
import CardContent from "./components/cardContent";

function App() {
  return (
    <div>
      <h3>
        Endorsements for VALLURI - Select a Profile on the left to view their
        appreciation on the right.
      </h3>
      <div className="container">
        <UserCard></UserCard>
        <CardContent></CardContent>
      </div>
    </div>
  );
}

export default App;
