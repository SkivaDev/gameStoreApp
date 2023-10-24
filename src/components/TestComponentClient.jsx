"use client";

import { useGamesData } from '@/hooks/useGamesData';
import React from 'react'



const TestComponentClient = () => {

  const { games } = useGamesData('games');

  console.log(games);


  return (
    <div>TestComponentClient</div>
  )
}

export default TestComponentClient