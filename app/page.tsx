'use client'

import Image from 'next/image'
import { Github, Mail, Linkedin, ExternalLink, Briefcase, Folder } from 'lucide-react'
import avatar from '@/public/images/avatar.png'

export default function Home () {
  return (
    <div 
      className='min-h-screen bg-cover bg-center bg-no-repeat'
      style={{ backgroundImage: 'url(/images/bg-01.webp)' }}
    >
      <div className='min-h-screen bg-black/50 backdrop-blur-sm'>
        <div className='max-w-2xl mx-auto px-6 py-16 space-y-8 font-space-grotesk'>
          {/* Header */}
          <header className='flex items-center justify-between'>
            <div className='flex items-center gap-4'>
              <Image
                src={avatar}
                alt='Chris Wiz'
                className='rounded-full border-2 border-white/20'
                width={60}
                height={60}
              />
              <div>
                <h1 className='text-xl font-semibold text-white'>Chris Wiz</h1>
                <p className='text-white/70 text-sm'>FullStack Developer</p>
              </div>
            </div>
            <div className='flex gap-3'>
              <a href='https://github.com/chriswiz' target='_blank' rel='noopener noreferrer' className='text-white/70 hover:text-white transition-colors'>
                <Github className='w-5 h-5' />
              </a>
              <a href='mailto:chris@example.com' className='text-white/70 hover:text-white transition-colors'>
                <Mail className='w-5 h-5' />
              </a>
              <a href='https://linkedin.com/in/chriswiz' target='_blank' rel='noopener noreferrer' className='text-white/70 hover:text-white transition-colors'>
                <Linkedin className='w-5 h-5' />
              </a>
            </div>
          </header>

          {/* Experience */}
          <section className='space-y-4'>
            <div className='flex items-center gap-2'>
              <Briefcase className='w-4 h-4 text-white/70' />
              <h2 className='text-lg font-medium text-white'>Experience</h2>
            </div>
            <div className='space-y-3'>
              <div className='flex justify-between items-start'>
                <div>
                  <h3 className='font-medium text-white text-sm'>Fullstack Developer</h3>
                  <p className='text-xs text-white/60'>27.works • Remote, UK</p>
                </div>
                <span className='text-xs text-white/60'>2024</span>
              </div>
              
              <div className='flex justify-between items-start'>
                <div>
                  <h3 className='font-medium text-white text-sm'>Freelance Developer</h3>
                  <p className='text-xs text-white/60'>LittleCraftsLondon • Remote, UK</p>
                </div>
                <span className='text-xs text-white/60'>2023 - 2024</span>
              </div>

              <div className='flex justify-between items-start'>
                <div>
                  <h3 className='font-medium text-white text-sm'>Junior Developer</h3>
                  <p className='text-xs text-white/60'>NorthCoders • Remote, UK</p>
                </div>
                <span className='text-xs text-white/60'>2023</span>
              </div>

              <div className='flex justify-between items-start'>
                <div>
                  <h3 className='font-medium text-white text-sm'>IT Consultant</h3>
                  <p className='text-xs text-white/60'>MacSeven • London, UK</p>
                </div>
                <span className='text-xs text-white/60'>2018 - 2022</span>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section className='space-y-4'>
            <div className='flex items-center gap-2'>
              <Folder className='w-4 h-4 text-white/70' />
              <h2 className='text-lg font-medium text-white'>Projects</h2>
            </div>
            <div className='space-y-4'>
              <div className='space-y-2'>
                <div className='flex items-center justify-between'>
                  <h3 className='font-medium text-white text-sm'>Portfolio Website</h3>
                  <a href='#' className='text-white/70 hover:text-white transition-colors'>
                    <ExternalLink className='w-4 h-4' />
                  </a>
                </div>
                <p className='text-xs text-white/60'>Personal portfolio with Next.js and shadcn/ui</p>
                <div className='flex gap-2'>
                  <span className='text-xs bg-white/10 text-white/80 px-2 py-1 rounded'>Next.js</span>
                  <span className='text-xs bg-white/10 text-white/80 px-2 py-1 rounded'>TypeScript</span>
                  <span className='text-xs bg-white/10 text-white/80 px-2 py-1 rounded'>Tailwind</span>
                </div>
              </div>

              <div className='space-y-2'>
                <div className='flex items-center justify-between'>
                  <h3 className='font-medium text-white text-sm'>E-commerce Platform</h3>
                  <a href='#' className='text-white/70 hover:text-white transition-colors'>
                    <ExternalLink className='w-4 h-4' />
                  </a>
                </div>
                <p className='text-xs text-white/60'>Full-stack solution with payments and admin</p>
                <div className='flex gap-2'>
                  <span className='text-xs bg-white/10 text-white/80 px-2 py-1 rounded'>React</span>
                  <span className='text-xs bg-white/10 text-white/80 px-2 py-1 rounded'>Node.js</span>
                  <span className='text-xs bg-white/10 text-white/80 px-2 py-1 rounded'>PostgreSQL</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
