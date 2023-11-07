"use client";

import { useState, useEffect, useCallback } from "react";
import { useMediaQuery } from "@mui/material";

import { useGamesData } from "@/hooks/useGamesData";
import { CarouselProgress, CarouselSlider } from ".";

// import { Error } from '../../pages/Error';

let activeCarousel = 0;

// array of 6 random numbers between 0 and 40 (0 included) for featured carousel
const randNums = [...Array(6)].map(
  function () {
    return this.splice(Math.floor(Math.random() * this.length), 1)[0];
  },
  [...Array(20).keys()]
);

const Carousel = () => {
  const { games, gamesError, pricesList } = useGamesData();

  const featured = games && randNums.map((num) => games[num]);
  const prices = pricesList && randNums.map(num => pricesList[num]);

  console.log(games);
  console.log(pricesList);

  const [active, setActive] = useState(activeCarousel);
  const matches = useMediaQuery("(max-width: 600px)");

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prevActive) => (prevActive !== 5 ? prevActive + 1 : 0));
      activeCarousel = activeCarousel !== 5 ? activeCarousel + 1 : 0;
    }, 7000);

    return () => clearInterval(interval);
  }, [active]);

  const carouselItemClickHandler = useCallback((id) => {
    setActive(id);
    activeCarousel = id;
  }, []);

  // if (gamesError) return <Error error={gamesError} />;
  
//
  return (
    <section className={"flex gap-[2.5rem]"}>
      <CarouselSlider
      active={active} 
      featured={featured} 
      prices={prices}
      /> 
      {!matches && (
        <CarouselProgress
          active={active}
          clickHandler={carouselItemClickHandler}
          featured={featured}
        />
      )}
    </section>
  );
};

export default Carousel;
