// import { games } from '@/app/data/games'
import rawgApi from './api/rawgApi'
import { users } from './data/dataExample';
import { GameSlider, GameCard, ShowUsersTest, TestComponentClient, Carousel } from '@/components';
import useUsers from '@/hooks/useUsers';

export default async function Home() {

  // const response = await rawgApi.getGamesList();
  // console.log(response)
  // const allGames = response.results;

  // const response2 = await rawgApi.genres();
  // const allGenres = response2.results;
console.log("xd")
  const response = await rawgApi.getGamesList({
    genres: "action"
  });

  const actionGames = response.results;

  const response2 = await rawgApi.getGamesList({
    params: {
      genres: "adventure"
    }
  });

  const adventureGames = response2.results;

  const response3 = await rawgApi.getGamesList({
    params: {
      genres: "casual"
    }
  });

  const casualGames = response3.results;

  const response4 = await rawgApi.getGamesList({
    genres: "educational"
  });

  const educationalGames = response4.results;


// a text of my live 



  return (
    <main className="mt-[5rem] mb-[1.875rem] mx-auto pl-[3.4375rem] max-w-[100rem]">
      <Carousel/>
      <h1 className='px-[1.875rem] text-[2.8125rem] uppercase mb-[1.875rem]'>Catalogo:</h1>
      {/* <div className='flex flex-wrap justify-center px-[1.875rem] gap-[1.5625rem]'>
        {allGames.map((game, i) => (
          <GameCard key={i} game={game} />
        ))}
      </div> */}
      {/* <TestComponentClient /> */}
      <GameSlider heading={'Juegos de Accion'} category={'action'} gamesList={actionGames}/>
      <GameSlider heading={'Juegos de Aventura'} category={'adventure'} gamesList={adventureGames}/>
      <GameSlider heading={'Juegos Casuales'} category={'casual'} gamesList={casualGames}/>
      <GameSlider heading={'Juegos de Educacion'} category={'educational'} gamesList={educationalGames}/>
      <ShowUsersTest />
    </main>
  )
}
