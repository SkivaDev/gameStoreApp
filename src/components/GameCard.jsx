import React from "react";

function GameCard({ game }) {
  return (
    <div className="flex flex-col max-w-[28.125rem] h-fit bg-black-dark">
      <div className="w-full">
        <img src={game.background_image} alt={game.name} className="w-full h-auto" />
      </div>
      <div className="flex flex-1 flex-col p-[.9375rem] justify-between">
        <div className="flex flex-col gap-[.5rem]">
          <h3 className="line-clamp-1 font-normal ">{game.name}</h3>
          <p className="line-clamp-1 text-[.75rem] text-grey-text">
            Generos: {game.genres.map((genre) => genre.name).join(", ")}
          </p>
          <div className="flex justify-between">
            <p>Free</p>
            <span>i i i</span>
          </div>
        </div>
        <button className="bg-red hover:bg-opacity-80 p-[.5rem] mt-[.6875rem]">Comprar</button>
      </div>
    </div>
  );
}

export default GameCard;
