import React from "react";

function Usercard({ info }) {
  return (
    <div>
      {info.name} : {info.country}
    </div>
  );
}

export default Usercard;
