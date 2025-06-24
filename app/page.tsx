'use client'

import Image from 'next/image'
import {
  Github,
  Mail,
  LinkedinIcon,
  ExternalLink,
  Briefcase,
  Folder,
  Calendar,
  Code,
  User,
  Monitor,
  Server,
  Package,
  FileText
} from 'lucide-react'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from '@/components/ui/accordion'
import avatar from '@/public/images/avatar.png'

export default function Home () {
  return (
    <div className='min-h-[calc(100dvh-30px)] p-3 bg-background'>
      <div className='max-w-2xl mx-auto space-y-4'>
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
                FullStack Developer
              </p>
            </div>
          </div>
          {/* <div className='flex gap-1.5'>
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
              <LinkedinIcon className='w-3.5 h-3.5' />
            </a>
          </div> */}
        </header>

        <Accordion
          type='multiple'
          defaultValue={[
            'about',
            'skills',
            'projects',
            'experience',
            'contact'
          ]}
          className='space-y-1'
        >
          {/* About */}
          <AccordionItem value='about' className='border-b-0'>
            <AccordionTrigger className='text-xs font-medium text-gray-600 uppercase tracking-wide justify-start gap-1.5 hover:no-underline py-2'>
              <FileText className='w-3.5 h-3.5' />
              About
            </AccordionTrigger>
            <AccordionContent className='pb-1'>
              <div className='p-2.5 border border-border/30 mt-2'>
                <p className='text-xs text-muted-foreground leading-relaxed'>
                  I like coding, decentralized assets, memes, and music. I build
                  web apps with TypeScript, React/Next.js, and SQL databases
                  (Supabase) or Convex. Looking for clean projects with modern
                  stacks. Not interested in legacy code or technical debt.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Skills */}
          <AccordionItem value='skills' className='border-b-0'>
            <AccordionTrigger className='text-xs font-medium text-green-600 uppercase tracking-wide justify-start gap-1.5 hover:no-underline py-2'>
              <Code className='w-3.5 h-3.5 !rotate-0 !transform-none' />
              Skills
            </AccordionTrigger>
            <AccordionContent className='pb-1'>
              <div className='grid grid-cols-2 md:grid-cols-3 gap-2 pt-2'>
                {/* Frontend */}
                <div className='p-2.5 border border-border/30'>
                  <div className='flex items-center gap-1.5 mb-2'>
                    <Monitor className='w-3 h-3 text-muted-foreground' />
                    <span className='text-xs text-muted-foreground'>
                      Frontend
                    </span>
                  </div>
                  <div className='flex gap-0 flex-wrap'>
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
                      src='https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=next.js&logoColor=white'
                      alt='Next.js'
                      className='h-4'
                    />
                    <img
                      src='https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white'
                      alt='Vite'
                      className='h-4'
                    />
                    <img
                      src='https://img.shields.io/badge/TanStack-FF4154?style=flat-square&logo=react&logoColor=white'
                      alt='TanStack'
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
                      src='https://img.shields.io/badge/Framer-0055FF?style=flat-square&logo=framer&logoColor=white'
                      alt='Framer'
                      className='h-4'
                    />
                    <img
                      src='https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=figma&logoColor=white'
                      alt='Figma'
                      className='h-4'
                    />
                  </div>
                </div>

                {/* Backend */}
                <div className='p-2.5 border border-border/30'>
                  <div className='flex items-center gap-1.5 mb-2'>
                    <Server className='w-3 h-3 text-muted-foreground' />
                    <span className='text-xs text-muted-foreground'>
                      Backend
                    </span>
                  </div>
                  <div className='flex gap-0 flex-wrap'>
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
                  </div>
                </div>

                {/* Tools */}
                <div className='col-span-2 md:col-span-1 p-2.5 border border-border/30'>
                  <div className='flex items-center gap-1.5 mb-2'>
                    <Package className='w-3 h-3 text-muted-foreground' />
                    <span className='text-xs text-muted-foreground'>Tools</span>
                  </div>
                  <div className='flex gap-0 flex-wrap'>
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
                      src='https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white'
                      alt='Vercel'
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
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Projects */}
          <AccordionItem value='projects' className='border-b-0'>
            <AccordionTrigger className='text-xs font-medium text-purple-600 uppercase tracking-wide justify-start gap-1.5 hover:no-underline py-2'>
              <Folder className='w-3.5 h-3.5 !rotate-0 !transform-none' />
              Projects
            </AccordionTrigger>
            <AccordionContent className='pb-1'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-2 pt-2'>
                <div className='p-2.5 border border-border/30 hover:bg-muted/20 hover:scale-[1.02] transition-all duration-200'>
                  <div className='flex items-start justify-between mb-1.5'>
                    <h3 className='text-xs font-medium'>Coffee Dial</h3>
                    <a
                      href='https://coffeedial.vercel.app/'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-muted-foreground hover:text-foreground'
                    >
                      <ExternalLink className='w-3 h-3' />
                    </a>
                  </div>
                  <p className='text-xs text-muted-foreground mb-1.5'>
                    Coffee brewing calculator and timer application
                  </p>
                  {/* <div className='flex gap-1 flex-wrap'>
                    <span className='text-xs bg-secondary px-1.5 py-0.5 rounded-sm'>
                      Next.js
                    </span>
                    <span className='text-xs bg-secondary px-1.5 py-0.5 rounded-sm'>
                      TypeScript
                    </span>
                    <span className='text-xs bg-secondary px-1.5 py-0.5 rounded-sm'>
                      Tailwind
                    </span>
                  </div> */}
                </div>

                <div className='p-2.5 border border-border/30 hover:bg-muted/20 hover:scale-[1.02] transition-all duration-200'>
                  <div className='flex items-start justify-between mb-1.5'>
                    <h3 className='text-xs font-medium'>Layout Lab</h3>
                    <a
                      href='https://layoutlab.vercel.app/'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-muted-foreground hover:text-foreground'
                    >
                      <ExternalLink className='w-3 h-3' />
                    </a>
                  </div>
                  <p className='text-xs text-muted-foreground mb-1.5'>
                    CSS layout playground and learning tool
                  </p>
                  {/* <div className='flex gap-1 flex-wrap'>
                    <span className='text-xs bg-secondary px-1.5 py-0.5 rounded-sm'>
                      React
                    </span>
                    <span className='text-xs bg-secondary px-1.5 py-0.5 rounded-sm'>
                      CSS
                    </span>
                    <span className='text-xs bg-secondary px-1.5 py-0.5 rounded-sm'>
                      Tailwind
                    </span>
                  </div> */}
                </div>

                <div className='p-2.5 border border-border/30 hover:bg-muted/20 hover:scale-[1.02] transition-all duration-200'>
                  <div className='flex items-start justify-between mb-1.5'>
                    <h3 className='text-xs font-medium'>Template NextShad</h3>
                    <a
                      href='https://template-nextshad.vercel.app/'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-muted-foreground hover:text-foreground'
                    >
                      <ExternalLink className='w-3 h-3' />
                    </a>
                  </div>
                  <p className='text-xs text-muted-foreground mb-1.5'>
                    Next.js starter template with shadcn/ui components
                  </p>
                  {/* <div className='flex gap-1 flex-wrap'>
                    <span className='text-xs bg-secondary px-1.5 py-0.5 rounded-sm'>
                      Next.js
                    </span>
                    <span className='text-xs bg-secondary px-1.5 py-0.5 rounded-sm'>
                      shadcn/ui
                    </span>
                    <span className='text-xs bg-secondary px-1.5 py-0.5 rounded-sm'>
                      TypeScript
                    </span>
                  </div> */}
                </div>

                <div className='p-2.5 border border-border/30 hover:bg-muted/20 hover:scale-[1.02] transition-all duration-200'>
                  <div className='flex items-start justify-between mb-1.5'>
                    <h3 className='text-xs font-medium'>Cherry Portfolio</h3>
                    <a
                      href='https://cherrydub98.vercel.app/'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-muted-foreground hover:text-foreground'
                    >
                      <ExternalLink className='w-3 h-3' />
                    </a>
                  </div>
                  <p className='text-xs text-muted-foreground mb-1.5'>
                    Personal portfolio showcasing projects and skills
                  </p>
                  {/* <div className='flex gap-1 flex-wrap'>
                    <span className='text-xs bg-secondary px-1.5 py-0.5 rounded-sm'>
                      Next.js
                    </span>
                    <span className='text-xs bg-secondary px-1.5 py-0.5 rounded-sm'>
                      React
                    </span>
                    <span className='text-xs bg-secondary px-1.5 py-0.5 rounded-sm'>
                      Tailwind
                    </span>
                  </div> */}
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Experience */}
          <AccordionItem value='experience' className='border-b-0'>
            <AccordionTrigger className='text-xs font-medium text-blue-600 uppercase tracking-wide justify-start gap-1.5 hover:no-underline py-2'>
              <Briefcase className='w-3.5 h-3.5 !rotate-0 !transform-none' />
              Experience
            </AccordionTrigger>
            <AccordionContent className='pb-1'>
              <div className='grid grid-cols-2 gap-2 pt-2'>
                <div className='relative p-2.5 border border-border/30 hover:bg-muted/20 hover:scale-[1.02] transition-all duration-200'>
                  <div className='absolute top-2 right-2'>
                    <div className='flex items-center gap-0.5 bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded border border-gray-200 hover:bg-gray-200 transition-colors'>
                      <Calendar color='red' className='w-2.5 h-2.5' />
                      <span className='text-[10px] font-medium'>2024+</span>
                    </div>
                  </div>
                  <div className='space-y-0.5 pr-10'>
                    <h3 className='text-xs font-medium'>Fullstack Developer</h3>
                    <p className='text-xs text-muted-foreground'>
                      <span className='block md:inline'>27.works</span>
                      <span className='hidden md:inline'> • </span>
                      <span className='block md:inline'>Remote, UK</span>
                    </p>
                  </div>
                </div>

                <div className='relative p-2.5 border border-border/30 hover:bg-muted/20 hover:scale-[1.02] transition-all duration-200'>
                  <div className='absolute top-2 right-2'>
                    <div className='flex items-center gap-0.5 bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded border border-gray-200 hover:bg-gray-200 transition-colors'>
                      <Calendar color='red' className='w-2.5 h-2.5' />
                      <span className='text-[10px] font-medium'>2023-24</span>
                    </div>
                  </div>
                  <div className='space-y-0.5 pr-10'>
                    <h3 className='text-xs font-medium'>Freelance Developer</h3>
                    <p className='text-xs text-muted-foreground'>
                      <span className='block md:inline'>
                        LittleCraftsLondon
                      </span>
                      <span className='hidden md:inline'> • </span>
                      <span className='block md:inline'>Remote, UK</span>
                    </p>
                  </div>
                </div>

                <div className='relative p-2.5 border border-border/30 hover:bg-muted/20 hover:scale-[1.02] transition-all duration-200'>
                  <div className='absolute top-2 right-2'>
                    <div className='flex items-center gap-0.5 bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded border border-gray-200 hover:bg-gray-200 transition-colors'>
                      <Calendar color='red' className='w-2.5 h-2.5' />
                      <span className='text-[10px] font-medium'>2023</span>
                    </div>
                  </div>
                  <div className='space-y-0.5 pr-10'>
                    <h3 className='text-xs font-medium'>Junior Developer</h3>
                    <p className='text-xs text-muted-foreground'>
                      <span className='block md:inline'>NorthCoders</span>
                      <span className='hidden md:inline'> • </span>
                      <span className='block md:inline'>Remote, UK</span>
                    </p>
                  </div>
                </div>

                <div className='relative p-2.5 border border-border/30 hover:bg-muted/20 hover:scale-[1.02] transition-all duration-200'>
                  <div className='absolute top-2 right-2'>
                    <div className='flex items-center gap-0.5 bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded border border-gray-200 hover:bg-gray-200 transition-colors'>
                      <Calendar color='red' className='w-2.5 h-2.5' />
                      <span className='text-[10px] font-medium'>2018-22</span>
                    </div>
                  </div>
                  <div className='space-y-0.5 pr-10'>
                    <h3 className='text-xs font-medium'>IT Consultant</h3>
                    <p className='text-xs text-muted-foreground'>
                      <span className='block md:inline'>MacSeven</span>
                      <span className='hidden md:inline'> • </span>
                      <span className='block md:inline'>London, UK</span>
                    </p>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Contact */}
          <AccordionItem value='contact' className='border-b-0'>
            <AccordionTrigger className='text-xs font-medium text-orange-600 uppercase tracking-wide justify-start gap-1.5 hover:no-underline py-2'>
              <User className='w-3.5 h-3.5 !rotate-0 !transform-none' />
              Contact
            </AccordionTrigger>
            <AccordionContent className='pb-1'>
              <div className='p-2.5 border border-border/30 mt-2'>
                <div className='flex items-center justify-between'>
                  <div>
                    <div className='flex items-center gap-2 mb-1'>
                      <p className='text-xs font-medium'>
                        Available for freelance opportunities
                      </p>
                      <div className='flex items-center gap-0.5 bg-green-100 text-green-700 px-1.5 py-0.5 rounded border border-green-200 hover:bg-green-200 transition-colors'>
                        <div className='w-2 h-2 bg-green-500 rounded-full'></div>
                        <span className='text-[10px] font-medium'>Open</span>
                      </div>
                    </div>
                    <p className='text-xs text-muted-foreground'>
                      Get in touch via email or LinkedIn
                    </p>
                  </div>
                  <div className='flex gap-2'>
                    <a
                      href='mailto:chris@example.com'
                      className='text-muted-foreground hover:text-foreground transition-colors'
                    >
                      <Mail className='w-4 h-4' />
                    </a>
                    <a
                      href='https://linkedin.com/in/chriswiz'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-muted-foreground hover:text-foreground transition-colors'
                    >
                      <LinkedinIcon className='w-4 h-4' />
                    </a>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}
