import rawgApi from "@/app/api/rawgApi";
import { GameCard } from "@/components";
import { useSearchParams } from "next/navigation";
import React from "react";

const page = async ({ params }) => {

  // const { searchParams } = useSearchParams();

  // const category = searchParams.get("category");

  let games = null;

  const responseOne = await rawgApi.getGamesList({
    params: {
      page: 1,
      genres: `${params.category}`,
    }
  });

  const responseTwo = await rawgApi.getGamesList({
    params: {
      page: 2,
      genres: `${params.category}`,
    }
  });

  const responseThree = await rawgApi.getGamesList({
    params: {
      page: 3,
      genres: `${params.category}`,
    }
  });

  games = [...responseOne.results, ...responseTwo.results, ...responseThree.results];

  // console.log(response)
  

  // useEffect(() => {

  //   async function getData () {
  //     const response = await rawgApi.getGamesList({
  //       genres: `${params.category}`,
  //       key: process.env.NEXT_PUBLIC_RAWG_API_KEY,
  //     });

  //     games = response.results;
  //   }

  //   getData();

  // }, [])
  

  return (
    <main className="mt-[5rem] mb-[1.875rem] mx-auto pl-[3.4375rem] max-w-[100rem]">
      <h1 className="px-[1.875rem] text-[2.8125rem] uppercase mb-[1.875rem]">
        Catalogo:{params.category}
      </h1>
      <div className="flex flex-wrap justify-center px-[1.875rem] gap-[1.5625rem]">
        {games.map((game, i) => (
          <GameCard key={i} game={game} />
        ))}
      </div>
    </main>
  );
};

export default page;
