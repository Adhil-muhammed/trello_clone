import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <header className='bg-black w-1'>
  <Image src='https://upload.wikimedia.org/wikipedia/en/8/8c/Trello_logo.svg' alt='image' width={100} height={50} className='w-44'  />
    </header>
  )
}

export default Header
