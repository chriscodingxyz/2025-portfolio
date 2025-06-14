'use client'

import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { MenuIcon } from '../ui/menu'

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

export default function Header () {
  return (
    <header className='bg-background fixed top-0 left-0 right-0 z-50 flex justify-between items-center h-[30px] px-4 border-b border-background'>
      <div className='flex items-center gap-2'>
        <Avatar className='h-6 w-6'>
          <AvatarImage src='/images/avatar.png' alt='Avatar' />
          <AvatarFallback className='text-xs'>🍒</AvatarFallback>
        </Avatar>
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger className=' hover:text-foreground/80 transition-colors'>
          <MenuIcon size={20} />
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end'>
          <DropdownMenuItem onClick={() => scrollToSection('hero')}>
            <span className='w-full text-xs cursor-pointer'>Home</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => scrollToSection('about')}>
            <span className='w-full text-xs cursor-pointer'>About</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => scrollToSection('experience')}>
            <span className='w-full text-xs cursor-pointer'>Experience</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => scrollToSection('projects')}>
            <span className='w-full text-xs cursor-pointer'>Projects</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => scrollToSection('contact')}>
            <span className='w-full text-xs cursor-pointer'>Contact</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  )
}
