"use client";

import rawgApi from '@/app/api/rawgApi';
import { ChevronLeftRounded, ChevronRightRounded } from '@mui/icons-material'
import { IconButton } from '@mui/material';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import { GameCard } from '.';
import apiConfig from '@/app/api/apiConfig';

const GamesSlider = ({ heading, category, gamesList }) => {

  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);
  const [slideProgress, setSlideProgress] = useState(0);
  // const [gamesList, setGamesList] = useState([]);
  

  // useEffect(() => {

  //   const getGamesList = async () => {
  //     const params = {
  //       genres: "indie"
  //     }
  //     const response = await rawgApi.getGamesList({
  //       params
  //     });
  //     setGamesList(response.results);
  //   }
  //   getGamesList();
  //   console.log(gamesList);
  // }, [])
  
  const breakpoints = {
    0: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 15,
    },
    600: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 15,
    },
    850: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 20,
    },
    1250: {
      slidesPerView: 5,
      slidesPerGroup: 5,
      spaceBetween: 30,
    },
  };

  return (
    <section>
      <div className='flex justify-between items-center'>
        <Link href={`/games/${category}`} className='flex justify-center items-center'>
          <h1 className='text-xl'>{heading}</h1>
          <ChevronRightRounded fontSize='small' className='hover:ml-1 transition-all'/>
        </Link>
        <div>
          <IconButton 
            color="primary"
            ref={node => setPrevEl(node)}
            disabled={slideProgress === 0}
            sx={{ '&.Mui-disabled': { color: 'grey.text' } }}
          >
            <ChevronLeftRounded fontSize="large"/>
          </IconButton>
          <IconButton 
            color="primary"
            ref={node => setNextEl(node)}
            disabled={slideProgress === 1}
            sx={{ '&.Mui-disabled': { color: 'grey.text' } }}
          >
            <ChevronRightRounded fontSize="large"/>
          </IconButton>
        </div>
      </div>
      <Swiper
        breakpoints={breakpoints}
        simulateTouch={false}
        modules={[Navigation]}
        navigation={{ prevEl, nextEl }}
        onSlideChange={e => setSlideProgress(e.progress)}
        className=''
      >
        {gamesList.map((game, index) => (
          <SwiperSlide key={index} className='h-full'>
            <GameCard category={category} game={game}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default GamesSlider