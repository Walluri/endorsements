import React from "react";
import data from "../data/UserData";
import UserProfile from "./UserProfile";

function CardHolder({ cb }) {
  return (
    <div className="cardHolderContainer">
      <ul className="cardHolder">
        {data.map(function (v, i, a) {
          return (
            <li key={i}>
              <UserProfile info={v} cb={cb} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CardHolder;
