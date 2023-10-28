'use client' 
import { useGamesData } from '@/hooks/useGamesData';
import { Rating, Skeleton } from '@mui/material';
import React from 'react'
import { CircularScoreProgress, GamePlatforms } from '.';

const CarouselSlider = ({active, featured}) => {

  const { games, gamesIsLoading } = useGamesData();

  return (
    <div className={'relative h-[75vh] w-full'}>
      {gamesIsLoading ? (
        <Skeleton variant="rounded" sx={{ height: '100%' }} />
      ) : (
        featured.map((game, i) => (
          <figure
            key={game.id}
            className={`absolute opacity-0 h-full w-full transition-all cursor-pointer ${
              i === active ? 'visible opacity-100' : 'hidden'
            }`}
            // onClick={() => {
            //   !pricesIsLoading &&
            //     dispatch(
            //       gameModalActions.showModal({
            //         game,
            //         pricesList: prices?.[i].list,
            //       })
            //     );
            // }}
          >
            {game.metacriticScore && (
              <div className={'absolute top-[40px] left-[40px] z-20 rounded-[50%]'}>
                <CircularScoreProgress value={game.metacriticScore} />
              </div>
            )}
            <picture>
              <source
                srcSet={`${game.background_image}`}
                media="(max-width:37.5em)"
                className={'h-full w-full object-cover rounded-[3px] brightness-[60%]'}
              />
              <img
                src={`${game.background_image}`}
                alt={game.name + ' Game'}
                className={'h-full w-full object-cover rounded-[3px] brightness-[60%]'}
              />
            </picture>



            <figcaption className={'absolute left-10 bottom-10 flex flex-col gap-[10px]'}>
              <h1 className={'text-[1.375rem] font-medium'}>{game.name}</h1>
              <Rating
                name={game.slug}
                value={game.rating}
                precision={0.5}
                size="large"
                readOnly
                sx={{ '& .MuiRating-icon': { color: 'inherit' } }}
                className={''}
              />
              <div className={'flex gap-[16px] ml-[5px] game-platforms_container'}>
                <GamePlatforms platforms={game.platforms} />
              </div>
              <div className={'mt-[20px] line-clamp-1 overflow-hidden'}>
                {/* Genre:&emsp;{game.genres.map(genre => genre.name).join(', ')} */}Genre:
              </div>
              <div className={''}>
                {/* Release Date:&emsp;{game.released} */}
                Release Date:
              </div>
              {/* {pricesIsLoading ? (
                <div>Loading...</div>
              ) : (
                <>
                  <GamePrice
                    prices={prices?.[i].list[0]}
                    releaseDate={game.released}
                    variant="carousel-slider__price"
                  />
                  <ActionButtons
                    game={game}
                    prices={prices?.[i].list[0]}
                    variant="carousel-slider__btns"
                  />
                  <BookmarksButton game={game} prices={prices?.[i].list[0]} />
                </>
              )} */}
            </figcaption>

            {/* {!matches && (
              <div className={classes['screenshots']}>
                <span className={classes['scenes-text']}>Scenes</span>
                <div className={classes['clip-btn']}></div>
                {game.screenshots.slice(1, 6).map(screenshot => (
                  <img
                    src={
                      screenshot.image.slice(0, 28) +
                      'resize/420/-/' +
                      screenshot.image.slice(28)
                    }
                    alt="screenshot of game"
                    className={classes['screenshots__img']}
                    key={screenshot.id}
                  />
                ))}
              </div>
            )} */}
          </figure>
        ))
      )}
    </div>
  )
}

export default CarouselSlider