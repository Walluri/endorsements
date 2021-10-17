import React from "react";
import data from "../data/UserData";
import UserCard from "./UserCard";
function CardHolder({ cb }) {
  return (
    <div className="cardHolderContainer">
      <ul className="cardHolder">
        {data.map(function (v, i, a) {
          return (
            <li key={i}>
              <UserCard info={v} cb={cb} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CardHolder;
