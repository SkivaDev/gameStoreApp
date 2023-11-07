import React from "react";

const GamePrice = ({ prices, releaseDate = '2000/01/01' }) => {

  const newPrice = prices?.price_new.toFixed(2);
  const oldPrice = prices?.price_old.toFixed(2);
  let priceCut = prices?.price_cut;
  if (priceCut === 0) priceCut = false;
  const isFree = +newPrice === 0 ? true : false;

  const today = new Date();
  today.setHours(0, 0, 0, 0); // To set hour to midnight
  const isReleased = new Date(releaseDate) < today;

  return (
    <section className={'mt-[1.25rem] text-[1.125rem]'}>
      {isFree ? (
        <div className={''}>Free</div>
      ) : !isReleased && !newPrice ? (
        <div className={''}>
          Available {releaseDate.replaceAll("-", "/")}
        </div>
      ) : (
        <>
          <span className={''}>
            {newPrice ? "$" + newPrice : "N/A"}
          </span>
          {priceCut && (
            <>
              <span className={'ml-[.625rem] text-[.875rem] line-through'}>
                {"$" + oldPrice}
              </span>
              <span className={'ml-[1.25rem] px-[.375rem] py-[.1875rem] text-[.875rem] rounded-[.1875rem] bg-primary-main'}>
                {"-" + priceCut + "%"}
              </span>
            </>
          )}
        </>
      )}
    </section>
  );
};

export default GamePrice;
