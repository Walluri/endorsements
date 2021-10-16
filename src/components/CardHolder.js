import React from "react";
import data from "../data/UserData";
import Usercard from "./UserCard";
function CardHolder() {
  return (
    <div>
      <ul>
        {data.map(function (v, i, a) {
          return (
            <li key={i}>
              <Usercard info={v} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CardHolder;
