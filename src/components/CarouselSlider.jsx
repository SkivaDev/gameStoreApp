'use client' 
import { useGamesData } from '@/hooks/useGamesData';
import { Skeleton } from '@mui/material';
import React from 'react'
import { CircularScoreProgress } from '.';

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
            {/* <figcaption className={classes['carousel-slider__caption']}>
              <h1 className={classes['caption__header']}>{game.name}</h1>
              <Rating
                name={game.slug}
                value={game.rating}
                precision={0.5}
                size="large"
                readOnly
                sx={{ '& .MuiRating-icon': { color: 'inherit' } }}
                className={classes['caption__rating']}
              />
              <div className={classes['caption__platforms']}>
                <GamePlatforms platforms={game.platforms} />
              </div>
              <div className={classes['caption__genre']}>
                Genre:&emsp;{game.genres.map(genre => genre.name).join(', ')}
              </div>
              <div className={classes['caption__release']}>
                Release Date:&emsp;{game.released}
              </div>
              {pricesIsLoading ? (
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
              )}
            </figcaption>
            {!matches && (
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