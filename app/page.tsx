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
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardAction
} from '@/components/ui/card'
import avatar from '@/public/images/avatar.png'

export default function Home () {
  return (
    <div className='min-h-[calc(100dvh-30px)] p-4'>
      <div className='max-w-4xl mx-auto space-y-6'>
        {/* Header */}
        <header className='flex items-center justify-between py-4 border-b'>
          <div className='flex items-center gap-3'>
            <Image
              src={avatar}
              alt='Chris Wiz'
              className='rounded-full w-12 h-12'
              width={48}
              height={48}
            />
            <div>
              <h1 className='text-lg font-semibold'>Chris Wiz</h1>
              <p className='text-sm text-muted-foreground'>FullStack Developer</p>
            </div>
          </div>
          <div className='flex gap-2'>
            <a href='https://github.com/chriswiz' target='_blank' className='text-muted-foreground hover:text-foreground transition-colors'>
              <Github className='w-4 h-4' />
            </a>
            <a href='mailto:chris@example.com' className='text-muted-foreground hover:text-foreground transition-colors'>
              <Mail className='w-4 h-4' />
            </a>
            <a href='https://linkedin.com/in/chriswiz' target='_blank' className='text-muted-foreground hover:text-foreground transition-colors'>
              <Linkedin className='w-4 h-4' />
            </a>
          </div>
        </header>

        {/* Experience */}
        <section className='space-y-3'>
          <h2 className='text-sm font-medium flex items-center gap-2 text-muted-foreground'>
            <Briefcase className='w-4 h-4' />
            Experience
          </h2>
          
          <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
            <Card className='rounded-none p-3 hover:shadow-sm transition-shadow'>
              <div className='flex justify-between items-start'>
                <div>
                  <h3 className='text-sm font-medium'>Fullstack Developer</h3>
                  <p className='text-xs text-muted-foreground'>27.works • Remote, UK</p>
                </div>
                <div className='flex items-center gap-1'>
                  <span className='text-xs text-muted-foreground'>2024</span>
                  <Calendar className='w-3 h-3 text-red-500' />
                </div>
              </div>
            </Card>

            <Card className='rounded-none p-3 hover:shadow-sm transition-shadow'>
              <div className='flex justify-between items-start'>
                <div>
                  <h3 className='text-sm font-medium'>Freelance Developer</h3>
                  <p className='text-xs text-muted-foreground'>LittleCraftsLondon • Remote, UK</p>
                </div>
                <div className='flex items-center gap-1'>
                  <span className='text-xs text-muted-foreground'>2023-24</span>
                  <Calendar className='w-3 h-3 text-red-500' />
                </div>
              </div>
            </Card>

            <Card className='rounded-none p-3 hover:shadow-sm transition-shadow'>
              <div className='flex justify-between items-start'>
                <div>
                  <h3 className='text-sm font-medium'>Junior Developer</h3>
                  <p className='text-xs text-muted-foreground'>NorthCoders • Remote, UK</p>
                </div>
                <div className='flex items-center gap-1'>
                  <span className='text-xs text-muted-foreground'>2023</span>
                  <Calendar className='w-3 h-3 text-red-500' />
                </div>
              </div>
            </Card>

            <Card className='rounded-none p-3 hover:shadow-sm transition-shadow'>
              <div className='flex justify-between items-start'>
                <div>
                  <h3 className='text-sm font-medium'>IT Consultant</h3>
                  <p className='text-xs text-muted-foreground'>MacSeven • London, UK</p>
                </div>
                <div className='flex items-center gap-1'>
                  <span className='text-xs text-muted-foreground'>2018-22</span>
                  <Calendar className='w-3 h-3 text-red-500' />
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Projects */}
        <section className='space-y-3'>
          <h2 className='text-sm font-medium flex items-center gap-2 text-muted-foreground'>
            <Folder className='w-4 h-4' />
            Projects
          </h2>
          
          <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
            <Card className='rounded-none p-3 hover:shadow-sm transition-shadow'>
              <div className='flex items-start justify-between mb-2'>
                <h3 className='text-sm font-medium'>Portfolio Website</h3>
                <a href='#' className='text-muted-foreground hover:text-foreground'>
                  <ExternalLink className='w-3 h-3' />
                </a>
              </div>
              <p className='text-xs text-muted-foreground mb-2'>Personal portfolio with Next.js and shadcn/ui</p>
              <div className='flex gap-1 flex-wrap'>
                <span className='text-xs bg-secondary px-2 py-0.5 rounded-sm'>Next.js</span>
                <span className='text-xs bg-secondary px-2 py-0.5 rounded-sm'>TypeScript</span>
                <span className='text-xs bg-secondary px-2 py-0.5 rounded-sm'>Tailwind</span>
              </div>
            </Card>

            <Card className='rounded-none p-3 hover:shadow-sm transition-shadow'>
              <div className='flex items-start justify-between mb-2'>
                <h3 className='text-sm font-medium'>E-commerce Platform</h3>
                <a href='#' className='text-muted-foreground hover:text-foreground'>
                  <ExternalLink className='w-3 h-3' />
                </a>
              </div>
              <p className='text-xs text-muted-foreground mb-2'>Full-stack solution with payments and admin</p>
              <div className='flex gap-1 flex-wrap'>
                <span className='text-xs bg-secondary px-2 py-0.5 rounded-sm'>React</span>
                <span className='text-xs bg-secondary px-2 py-0.5 rounded-sm'>Node.js</span>
                <span className='text-xs bg-secondary px-2 py-0.5 rounded-sm'>PostgreSQL</span>
              </div>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}
