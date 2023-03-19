import React from "react";

const Rank = ({ user }) => {
  return (
    <div className="wrapper">
      <p className="text-center">{user.name}, your entries are {user.entries}</p>
    </div>
  );
}

export default Rank;