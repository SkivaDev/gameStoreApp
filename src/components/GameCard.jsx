import React from "react";

function GameCard({ game }) {
  return (
    <div className="flex flex-col max-w-[28.125rem] bg-black-dark">
      <div className="w-full  flex-1">
        <img src={game.imageUrl} alt={game.title} className="w-full h-auto" />
      </div>
      <div className="flex flex-col p-[.9375rem] justify-between">
        <div>
          <h3 className="text-2xl">{game.title}</h3>
          <p className="mt-[.625rem]">Generos: {game.genres}</p>
          <p>{game.description}</p>
          <p>Precio: {game.price}</p>
        </div>
        <button className="bg-red hover:bg-opacity-80 p-[.5rem] mt-[.6875rem]">Comprar</button>
      </div>
    </div>
  );
}

export default GameCard;
