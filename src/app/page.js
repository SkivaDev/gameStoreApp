import { games } from '@/app/data/games'
import GameCard from './components/GameCard'

export default function Home() {
  return (
    <main className="mt-[6.25rem]">
      <h1 className='px-[1.875rem] text-[2.8125rem] uppercase mb-[1.875rem]'>Catalogo:</h1>
      <div className='flex flex-wrap justify-center px-[1.875rem] gap-[1.5625rem]'>
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </main>
  )
}
