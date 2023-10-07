import React from 'react'
import { SearchSvg } from '@/app/assets/icons/AllSvgs'


function Search() {
  return (
    <form action="" className='relative flex items-center grow shrink-0 basis-[15.625rem]'>
      <SearchSvg className='absolute left-[.75rem] h-[1.125rem] w-[1.125rem] fill-gray-600'/>
      <input type="text" name="" id="" placeholder='Buscar en la tienda' className='w-[100%] h-[2.1875rem] rounded-[.1875rem] px-[2.8125rem] border-none bg-grey-main text-[.875rem]'/>
    </form>
  )
}

export default Search