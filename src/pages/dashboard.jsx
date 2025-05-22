import React from "react";
import Navbar from "../Components/Navbar";

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <h1>Welcome to the dashboard!</h1>
      <div className="grid grid-cols-4 ">
        <p>Rank</p>
        <p>Name</p>
        <p>Score</p>
        <p>Solved Challenges</p>
      </div>
    </>
  );
}
