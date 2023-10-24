'use client'

import axiosClient from '@/app/api/axiosClient';
import rawgApi from '@/app/api/rawgApi';
import { useQuery } from '@tanstack/react-query';

const getPlains = games => {
  const chars = {
    '-': '',
    ':': '',
    "'": '',
    '’': '',
    '&': 'and',
    '!': '',
    '(': '',
    ')': '',
    '.': '',
    ',': '',
    '#': '',
    '/': '',
    '~': '',
    1: 'i',
    2: 'ii',
    3: 'iii',
    4: 'iv',
    5: 'v',
    6: 'vi',
    7: 'vii',
    8: 'viii',
    9: 'ix',
  };

  return games
    .map(game =>
      game.name
        .replace(/[-:'’&!().,#/~123456789]/g, c => chars[c])
        .toLowerCase()
        .replace(/\bthe\b/g, '')
        .replaceAll(' ', '')
    )
    .join(',');
};

export const useGamesData = (category, page = 1, searchQuery = null) => {
  const {
    data,
    isLoading: gamesIsLoading,
    error: gamesError,
  } = useQuery({
    queryKey: ['games', category, page, searchQuery],
    queryFn: async () =>{
      const apiKey = process.env.NEXT_APP_API_KEY;
      return fetch(
        `https://api.rawg.io/api/games?key=f9b0cbf9260e4d5386f4a0d2889f69af`
      ).then(res => res.json())
    },
    // queryFn: async () => {
    //   const url = "games";
    //   const result = await axiosClient.get(url, {
    //     params: {
    //       key: process.env.NEXT_APP_API_KEY,
    //     }
    //   });
    //   console.log("aki", result)
    //   return result;
    // },
    // enabled: !!category && !!page,
  }
  );

  // let games = data?.games;
  let games = data?.results;
  const gamesCount = data?.count;

  // const plains = games && getPlains(games);

  // const {
  //   data: pricesList,
  //   isLoading: pricesIsLoading,
  //   error: pricesError,
  // } = useQuery(
  //   ['prices', category, page],
  //   () =>
  //     fetch(`https://alert-viper.cyclic.app/prices?plains=${plains}`).then(
  //       res => res.json()
  //     ),
  //   {
  //     enabled: !!games && games.length !== 0,
  //   }
  // );

  return {
    games,
    gamesIsLoading,
    gamesError,
    // pricesList,
    // pricesIsLoading,
    // pricesError,
    gamesCount,
  };
};