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
    <div className='min-h-[calc(100dvh-30px)] p-3 bg-background'>
      <div className='max-w-4xl mx-auto space-y-4'>
        {/* Header */}
        <header className='flex items-center justify-between py-3'>
          <div className='flex items-center gap-2'>
            <Image
              src={avatar}
              alt='Chris Wiz'
              className='rounded-full w-10 h-10'
              width={40}
              height={40}
            />
            <div>
              <h1 className='text-base font-semibold'>Chris Wiz</h1>
              <p className='text-xs text-muted-foreground'>
                FullStack Developer @ 27.works
              </p>
            </div>
          </div>
          <div className='flex gap-1.5'>
            <a
              href='https://github.com/chriswiz'
              target='_blank'
              className='text-muted-foreground hover:text-foreground transition-colors'
            >
              <Github className='w-3.5 h-3.5' />
            </a>
            <a
              href='mailto:chris@example.com'
              className='text-muted-foreground hover:text-foreground transition-colors'
            >
              <Mail className='w-3.5 h-3.5' />
            </a>
            <a
              href='https://linkedin.com/in/chriswiz'
              target='_blank'
              className='text-muted-foreground hover:text-foreground transition-colors'
            >
              <Linkedin className='w-3.5 h-3.5' />
            </a>
          </div>
        </header>

        {/* Experience */}
        <section className='space-y-2'>
          <h2 className='text-xs font-medium flex items-center gap-1.5 text-blue-600 uppercase tracking-wide'>
            <Briefcase className='w-3.5 h-3.5' />
            Experience
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
            <div className='p-2.5 border border-border/30 hover:bg-muted/20 transition-colors'>
              <div className='flex justify-between items-start'>
                <div>
                  <h3 className='text-xs font-medium'>Fullstack Developer</h3>
                  <p className='text-xs text-muted-foreground'>
                    27.works • Remote, UK
                  </p>
                </div>
                <div className='flex items-center gap-1'>
                  <span className='text-xs text-muted-foreground'>2024</span>
                  <Calendar className='w-3 h-3 text-red-500' />
                </div>
              </div>
            </div>

            <div className='p-2.5 border border-border/30 hover:bg-muted/20 transition-colors'>
              <div className='flex justify-between items-start'>
                <div>
                  <h3 className='text-xs font-medium'>Freelance Developer</h3>
                  <p className='text-xs text-muted-foreground'>
                    LittleCraftsLondon • Remote, UK
                  </p>
                </div>
                <div className='flex items-center gap-1'>
                  <span className='text-xs text-muted-foreground'>2023-24</span>
                  <Calendar className='w-3 h-3 text-red-500' />
                </div>
              </div>
            </div>

            <div className='p-2.5 border border-border/30 hover:bg-muted/20 transition-colors'>
              <div className='flex justify-between items-start'>
                <div>
                  <h3 className='text-xs font-medium'>Junior Developer</h3>
                  <p className='text-xs text-muted-foreground'>
                    NorthCoders • Remote, UK
                  </p>
                </div>
                <div className='flex items-center gap-1'>
                  <span className='text-xs text-muted-foreground'>2023</span>
                  <Calendar className='w-3 h-3 text-red-500' />
                </div>
              </div>
            </div>

            <div className='p-2.5 border border-border/30 hover:bg-muted/20 transition-colors'>
              <div className='flex justify-between items-start'>
                <div>
                  <h3 className='text-xs font-medium'>IT Consultant</h3>
                  <p className='text-xs text-muted-foreground'>
                    MacSeven • London, UK
                  </p>
                </div>
                <div className='flex items-center gap-1'>
                  <span className='text-xs text-muted-foreground'>2018-22</span>
                  <Calendar className='w-3 h-3 text-red-500' />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className='space-y-2'>
          <h2 className='text-xs font-medium flex items-center gap-1.5 text-purple-600 uppercase tracking-wide'>
            <Folder className='w-3.5 h-3.5' />
            Projects
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
            <div className='p-2.5 border border-border/30 hover:bg-muted/20 transition-colors'>
              <div className='flex items-start justify-between mb-1.5'>
                <h3 className='text-xs font-medium'>Portfolio Website</h3>
                <a
                  href='#'
                  className='text-muted-foreground hover:text-foreground'
                >
                  <ExternalLink className='w-3 h-3' />
                </a>
              </div>
              <p className='text-xs text-muted-foreground mb-1.5'>
                Personal portfolio with Next.js and shadcn/ui
              </p>
              <div className='flex gap-1 flex-wrap'>
                <span className='text-xs bg-secondary px-1.5 py-0.5 rounded-sm'>
                  Next.js
                </span>
                <span className='text-xs bg-secondary px-1.5 py-0.5 rounded-sm'>
                  TypeScript
                </span>
                <span className='text-xs bg-secondary px-1.5 py-0.5 rounded-sm'>
                  Tailwind
                </span>
              </div>
            </div>

            <div className='p-2.5 border border-border/30 hover:bg-muted/20 transition-colors'>
              <div className='flex items-start justify-between mb-1.5'>
                <h3 className='text-xs font-medium'>E-commerce Platform</h3>
                <a
                  href='#'
                  className='text-muted-foreground hover:text-foreground'
                >
                  <ExternalLink className='w-3 h-3' />
                </a>
              </div>
              <p className='text-xs text-muted-foreground mb-1.5'>
                Full-stack solution with payments and admin
              </p>
              <div className='flex gap-1 flex-wrap'>
                <span className='text-xs bg-secondary px-1.5 py-0.5 rounded-sm'>
                  React
                </span>
                <span className='text-xs bg-secondary px-1.5 py-0.5 rounded-sm'>
                  Node.js
                </span>
                <span className='text-xs bg-secondary px-1.5 py-0.5 rounded-sm'>
                  PostgreSQL
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
