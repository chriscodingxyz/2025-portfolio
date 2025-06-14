'use client'

import Image from 'next/image'
import {
  Github,
  Mail,
  Linkedin,
  ExternalLink,
  Briefcase,
  Folder,
  Calendar
} from 'lucide-react'
import avatar from '@/public/images/avatar.png'

export default function Home () {
  return (
    <div
      className='min-h-[calc(100dvh-30px)] bg-cover bg-center bg-no-repeat dark:invert-0 invert'
      style={{ backgroundImage: 'url(/images/bg-01.webp)' }}
    >
      <div className='min-h-[calc(100dvh-30px)] bg-black/50 backdrop-blur-sm'>
        <div className='max-w-2xl mx-auto px-6 py-16 space-y-8 font-jetbrains-mono'>
          {/* Header */}
          <header className='flex items-center justify-between'>
            <div className='flex items-center gap-4'>
              <Image
                src={avatar}
                alt='Chris Wiz'
                className='rounded-full border-2 border-white/20 dark:invert-0 invert'
                width={60}
                height={60}
              />
              <div>
                <h1 className='text-lg font-semibold text-white'>Chris Wiz</h1>
                <p className='text-white/70 text-xs'>FullStack Developer</p>
              </div>
            </div>
            <div className='flex gap-3'>
              <a
                href='https://github.com/chriswiz'
                target='_blank'
                rel='noopener noreferrer'
                className='text-white/70 hover:text-white transition-colors'
              >
                <Github className='w-5 h-5' />
              </a>
              <a
                href='mailto:chris@example.com'
                className='text-white/70 hover:text-white transition-colors'
              >
                <Mail className='w-5 h-5' />
              </a>
              <a
                href='https://linkedin.com/in/chriswiz'
                target='_blank'
                rel='noopener noreferrer'
                className='text-white/70 hover:text-white transition-colors'
              >
                <Linkedin className='w-5 h-5' />
              </a>
            </div>
          </header>

          {/* Experience */}
          <section className='space-y-4'>
            <div className='flex items-center gap-2'>
              <Briefcase className='w-4 h-4 text-white/70' />
              <h2 className='text-base font-medium text-white'>Experience</h2>
            </div>
            <div className='ml-6 space-y-3 border-l border-white/10 pl-4'>
              <div className='flex justify-between items-start'>
                <div>
                  <h3 className='font-medium text-white text-xs'>
                    Fullstack Developer
                  </h3>
                  <p className='text-xxs text-white/60'>
                    27.works • Remote, UK
                  </p>
                </div>
                <div className='flex items-center gap-1'>
                  <span className='text-xxs text-white/60'>2024</span>
                  <Calendar className='w-3 h-3 text-red-400 dark:invert-0 invert' />
                </div>
              </div>

              <div className='flex justify-between items-start'>
                <div>
                  <h3 className='font-medium text-white text-xs'>
                    Freelance Developer
                  </h3>
                  <p className='text-xxs text-white/60'>
                    LittleCraftsLondon • Remote, UK
                  </p>
                </div>
                <div className='flex items-center gap-1'>
                  <span className='text-xxs text-white/60'>2023 - 2024</span>
                  <Calendar className='w-3 h-3 text-red-400 dark:invert-0 invert' />
                </div>
              </div>

              <div className='flex justify-between items-start'>
                <div>
                  <h3 className='font-medium text-white text-xs'>
                    Junior Developer
                  </h3>
                  <p className='text-xxs text-white/60'>
                    NorthCoders • Remote, UK
                  </p>
                </div>
                <div className='flex items-center gap-1'>
                  <span className='text-xxs text-white/60'>2023</span>
                  <Calendar className='w-3 h-3 text-red-400 dark:invert-0 invert' />
                </div>
              </div>

              <div className='flex justify-between items-start'>
                <div>
                  <h3 className='font-medium text-white text-xs'>
                    IT Consultant
                  </h3>
                  <p className='text-xxs text-white/60'>MacSeven • London, UK</p>
                </div>
                <div className='flex items-center gap-1'>
                  <span className='text-xxs text-white/60'>2018 - 2022</span>
                  <Calendar className='w-3 h-3 text-red-400 dark:invert-0 invert' />
                </div>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section className='space-y-4'>
            <div className='flex items-center gap-2'>
              <Folder className='w-4 h-4 text-white/70' />
              <h2 className='text-base font-medium text-white'>Projects</h2>
            </div>
            <div className='ml-6 space-y-4 border-l border-white/10 pl-4'>
              <div className='space-y-2'>
                <div className='flex items-center justify-between'>
                  <h3 className='font-medium text-white text-xs'>
                    Portfolio Website
                  </h3>
                  <a
                    href='#'
                    className='text-white/70 hover:text-white transition-colors'
                  >
                    <ExternalLink className='w-4 h-4' />
                  </a>
                </div>
                <p className='text-xxs text-white/60'>
                  Personal portfolio with Next.js and shadcn/ui
                </p>
                <div className='flex gap-2'>
                  <span className='text-xxs bg-white/10 text-white/80 px-2 py-1 rounded'>
                    Next.js
                  </span>
                  <span className='text-xxs bg-white/10 text-white/80 px-2 py-1 rounded'>
                    TypeScript
                  </span>
                  <span className='text-xxs bg-white/10 text-white/80 px-2 py-1 rounded'>
                    Tailwind
                  </span>
                </div>
              </div>

              <div className='space-y-2'>
                <div className='flex items-center justify-between'>
                  <h3 className='font-medium text-white text-xs'>
                    E-commerce Platform
                  </h3>
                  <a
                    href='#'
                    className='text-white/70 hover:text-white transition-colors'
                  >
                    <ExternalLink className='w-4 h-4' />
                  </a>
                </div>
                <p className='text-xxs text-white/60'>
                  Full-stack solution with payments and admin
                </p>
                <div className='flex gap-2'>
                  <span className='text-xxs bg-white/10 text-white/80 px-2 py-1 rounded'>
                    React
                  </span>
                  <span className='text-xxs bg-white/10 text-white/80 px-2 py-1 rounded'>
                    Node.js
                  </span>
                  <span className='text-xxs bg-white/10 text-white/80 px-2 py-1 rounded'>
                    PostgreSQL
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
