'use client'

import Image from 'next/image'
import {
  Github,
  Mail,
  Linkedin,
  ExternalLink,
  Briefcase,
  Folder,
  Calendar,
  Code
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

        {/* Skills */}
        <section className='space-y-2'>
          <h2 className='text-xs font-medium flex items-center gap-1.5 text-green-600 uppercase tracking-wide'>
            <Code className='w-3.5 h-3.5' />
            Skills
          </h2>

          <div className='p-2.5 border border-border/30'>
            <div className='flex gap-1.5 flex-wrap'>
              <img
                src='https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black'
                alt='JavaScript'
                className='h-4'
              />
              <img
                src='https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white'
                alt='TypeScript'
                className='h-4'
              />
              <img
                src='https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black'
                alt='React'
                className='h-4'
              />
              <img
                src='https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white'
                alt='Vite'
                className='h-4'
              />
              <img
                src='https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=next.js&logoColor=white'
                alt='Next.js'
                className='h-4'
              />
              <img
                src='https://img.shields.io/badge/TanStack-FF4154?style=flat-square&logo=react&logoColor=white'
                alt='TanStack'
                className='h-4'
              />
              <img
                src='https://img.shields.io/badge/Framer-0055FF?style=flat-square&logo=framer&logoColor=white'
                alt='Framer'
                className='h-4'
              />
              <img
                src='https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white'
                alt='Tailwind CSS'
                className='h-4'
              />
              <img
                src='https://img.shields.io/badge/shadcn/ui-000000?style=flat-square&logo=shadcnui&logoColor=white'
                alt='shadcn/ui'
                className='h-4'
              />
              <img
                src='https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=figma&logoColor=white'
                alt='Figma'
                className='h-4'
              />
              <img
                src='https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white'
                alt='Node.js'
                className='h-4'
              />
              <img
                src='https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white'
                alt='Express'
                className='h-4'
              />
              <img
                src='https://img.shields.io/badge/PostgreSQL-316192?style=flat-square&logo=postgresql&logoColor=white'
                alt='PostgreSQL'
                className='h-4'
              />
              <img
                src='https://img.shields.io/badge/Supabase-3ECF8E?style=flat-square&logo=supabase&logoColor=white'
                alt='Supabase'
                className='h-4'
              />
              <img
                src='https://img.shields.io/badge/Drizzle-C5F74F?style=flat-square&logo=drizzle&logoColor=black'
                alt='Drizzle'
                className='h-4'
              />
              <img
                src='https://img.shields.io/badge/Prisma-2D3748?style=flat-square&logo=prisma&logoColor=white'
                alt='Prisma'
                className='h-4'
              />
              <img
                src='https://img.shields.io/badge/Stripe-008CDD?style=flat-square&logo=stripe&logoColor=white'
                alt='Stripe'
                className='h-4'
              />
              <div className='inline-flex items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 500 500'
                  className='w-4 h-4 bg-black'
                >
                  <rect width='500' height='500' fill='#000' />
                  <path
                    fill='#fff'
                    d='M69 121h86.988v259H69zM337.575 121H430v259h-92.425z'
                  />
                  <path
                    fill='#fff'
                    d='M427.282 121v83.456h-174.52V121zM430 296.544V380H252.762v-83.456z'
                  />
                  <path
                    fill='#fff'
                    d='M252.762 204.455v92.089h-96.774v-92.089z'
                  />
                </svg>
                <img
                  src='https://img.shields.io/badge/Better--auth-000000?style=flat-square&logoColor=white'
                  alt='Better-auth'
                  className='h-4'
                />
              </div>
              <img
                src='https://img.shields.io/badge/Clerk-6C47FF?style=flat-square&logo=clerk&logoColor=white'
                alt='Clerk'
                className='h-4'
              />
              <img
                src='https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white'
                alt='Git'
                className='h-4'
              />
              <img
                src='https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white'
                alt='GitHub'
                className='h-4'
              />
              <img
                src='https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white'
                alt='Docker'
                className='h-4'
              />
              <img
                src='https://img.shields.io/badge/Jest-C21325?style=flat-square&logo=jest&logoColor=white'
                alt='Jest'
                className='h-4'
              />
              <img
                src='https://img.shields.io/badge/Zod-3E67B1?style=flat-square&logo=zod&logoColor=white'
                alt='Zod'
                className='h-4'
              />
              <img
                src='https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white'
                alt='Vercel'
                className='h-4'
              />
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
