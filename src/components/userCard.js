import React, { useState } from "react";

function Usercard({ info, cb }) {
  const [user, setUser] = useState(info);
  function clickHandler(e) {
    console.log(`clicked on ${user.name}`);
    cb(user.url);
  }
  return (
    <div onClick={clickHandler.bind(this)}>
      {info.name} : {info.country}
    </div>
  );
}

export default Usercard;
