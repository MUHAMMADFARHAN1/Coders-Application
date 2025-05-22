import React from "react";
import Navbar from "../Components/Navbar";
import data from "./../api/LeaderData.json";

export default function Leaderboard() {
  console.log(data);
  return (
    <>
      <Navbar />
      <h1 className="ml-4 mt-4 text-3xl">Leaderboard</h1>
      <br />
      <br />
      <div className="grid grid-cols-5 text-center gap-0">
        <p>Rank</p>
        <p>First Name</p>
        <p>Last Name</p>
        <p>Score</p>
        <p>Solved Challenges</p>
      </div>
      <br />
      {data.map((details) => (
        <>
          <br />
          <div className="grid grid-cols-5 text-center gap-0">
            <p>{details.rank}</p>
            <p>{details.first_name}</p>
            <p>{details.last_name}</p>
            <p>{details.score}</p>
            <p>{details.solved_challenges}</p>
            <br />
          </div>
          <hr />
        </>
      ))}
    </>
  );
}
