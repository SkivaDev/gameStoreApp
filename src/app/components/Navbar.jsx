import Link from 'next/link'
import React from 'react'

function Navbar() {

  const link = ['Juegos', 'Noticias', 'About', 'Contact']

  return (
    <nav>
      <ul className='flex gap-[1.25rem]'>
          <li className='hover:text-primary-main'>  
            <Link href={"/"}>Juegos</Link>
          </li>
          <li className='hover:text-primary-main'>  
            <Link href={"/noticias"}>Noticias</Link>
          </li>
          <li className='hover:text-primary-main'>  
            <Link href={"/about"}>About</Link>
          </li>
          <li className='hover:text-primary-main'>  
            <Link href={"/contacto"}>Contacto</Link>
          </li>
      </ul>
    </nav>
  )
}

export default Navbar