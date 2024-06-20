import React from "react";
import HomeSlide from "../../components/HomeSlide";
import CategSlide from "../../components/categSlideHome";
import RentBaku from "../../components/rentBaku";
import DarkCards from "../../components/DarkCards";
import ByClass from "../../components/byClass";
import Afn from "../../components/AFN";
import Partnyors from "../../components/partnyors";
import Reservation from "../../components/Reservation";
import Questions from "../../components/Questions";
import Reached from "../../components/Reached";

function Home() {
  return (
    <>
      <div>
        <HomeSlide />
        <CategSlide />
        <RentBaku />
        <DarkCards />
        <ByClass />
        <Afn />
        <Partnyors />
        <Reservation />
        <Questions />
        <Reached />
      </div>
    </>
  );
}

export default Home;
