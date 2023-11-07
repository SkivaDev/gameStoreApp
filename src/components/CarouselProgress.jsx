"use client";
import { useGamesData } from "@/hooks/useGamesData";
import { Skeleton } from "@mui/material";
import React from "react";

const CarouselProgress = ({ active, featured, clickHandler }) => {
  const { games, gamesIsLoading } = useGamesData();

  //s
  console.log(featured); 


  return (
    <div className={"flex flex-col justify-between w-[300px]"}>
      {gamesIsLoading
        ? [...Array(6)].map((_, i) => (
            <figure
              key={i}
              className={
                "relative flex items-center gap-[15px] rounded-[3px] overflow-hidden h-[80px] cursor-pointer"
              }
              style={{ pointerEvents: "none" }}
            >
              <Skeleton variant="rounded" className={""} />
              <Skeleton variant="text" width={80} height={35} />
            </figure>
          ))
        : featured.map((game, i) => (
            <figure
              key={game.id}
              onClick={clickHandler.bind(null, i)}
              className={`relative flex items-center gap-[15px] px-[15px] rounded-[3px] overflow-hidden h-[80px] cursor-pointer hover:bg-grey-dark ${
                i === active ? "carousel-progress__figure-active" : ""
              }`}
            >
              <img
                srcSet={`${game.background_image}`}
                alt={game.name + " Game"}
                className={"h-[50px] w-[50px] object-cover rounded-[3px] z-20"}
              />
              <figcaption
                className={"line-clamp-2 overflow-hidden text-[14px] z-20"}
              >
                {game.name}
              </figcaption>
            </figure>
          ))}
    </div>
  );
};

export default CarouselProgress;
