import React from 'react'
import { ThemeToggle } from '@/components/theme/ThemeToggle'

export default function Footer () {
  return (
    <footer className=' flex justify-between items-center h-[30px] px-4'>
      <div className='text-[10px] text-muted-foreground'>
        {/* Built with Next.js & shadcn/ui */}
      </div>

      {/* <div className='absolute left-1/2 transform -translate-x-1/2 text-[10px] text-muted-foreground'>
        © {new Date().getFullYear()} Chris Wiz
      </div> */}

      <ThemeToggle />
    </footer>
  )
}
