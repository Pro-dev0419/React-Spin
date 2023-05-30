import React from "react";
import { Outlet } from "react-router-dom";
import PlayerCard from "./PlayerCard";
import PlayerNav from "./PlayerNav";
const Player = () => {
  return (
    <>
      <PlayerCard />
      <PlayerNav />
      <Outlet />
    </>
  );
};

export default Player;
