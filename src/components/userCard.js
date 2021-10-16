import React from "react";

function UserCard() {
  function fetchFromS3() {
    console.log("start fetching");
  }
  return (
    <div>
      <div>User Name</div>
      <button onClick={fetchFromS3}>Click To Get Info</button>
    </div>
  );
}

export default UserCard;
