import { games } from '@/app/data/games'
import GameCard from '@/components/GameCard'
import rawgApi from './api/rawgApi'
import bookingApi from './api/bookingAPI';

export default async function Home() {

  const allGames = await rawgApi.getGamesList({
    
  });
  console.log(allGames)


  console.log("HOLAAAAAA", process.env.NEXT_APP_API_KEY)

  return (
    <main className="mt-[6.25rem]">
      <h1 className='px-[1.875rem] text-[2.8125rem] uppercase mb-[1.875rem]'>Catalogo:</h1>
      <div className='flex flex-wrap justify-center px-[1.875rem] gap-[1.5625rem]'>
        {games.map((game, i) => (
          <GameCard key={i} game={game} />
        ))}
      </div>
      <div>
          
      </div>
    </main>
  )
}
