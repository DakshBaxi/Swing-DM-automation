"use client"
import { usePaths } from '@/hooks/user-nav'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import GradientButton from '../gradient-button'
import { Button } from '@/components/ui/button'

type Props = {}

const AutomateList = (props: Props) => {
    // Wip:Get the real data
    const {pathname}=usePaths()

    // wip : if no automation exists show no automations 
  return (
    <div className='flex flex-col gap-y-3'>
        <Link href={`${pathname}/123222421`} className="bg-[#1D1D1D] hover:opacity-80 transition duration-100 rounded-xl p-5 border-[1px] flex border-[#545454]">
        
       <div className='flex flex-col flex-1 items-start'>
        <h2 className='text-xl font-semibold'>Automation Name</h2>
        <p className='text-[#9B9ca0] text-sm font-light mb-2 '>
            This is from the comment
        </p>
        {/* wip: Automation keywords */}
        <div className='flex gap-x-2 flex-wrap mt-3'>
            <div className={cn('rounded-full px-4 py-1 capitalize',
              (0+1)%1==0&&'bg-green-500/15 border-2 border-green-300'  ,
                 (1+1)%2==0&&'bg-purple-500/15 border-2 border-purple-300',
                 (2+1)%3==0&&'bg-yellow-500/15 border-2 border-yellow-300',
                 (3+1)%4==0&&'bg-red-500/15 border-2 border-red-300',

                 
            )}>
                Get Started
            </div>
        </div>
        <div className='rounded-full border-2 mt-3 border-dashed border-white/60 py-1 px-3'>
        <p className='text-sm text-[#bfc0c3]'>No keywords</p></div>
       </div>
       <div className='flex flex-col justify-between'>
        <p className='capitalize text-sm font-light text-[#9B9Ca0]'>
            {/* wip:attach real data  */}
            March 09th 2025 
        </p>
        {/* wip:render the button based on the listner  */}
         <GradientButton type='BUTTON' className='w-full bg-slate-800 text-white hover:bg-slate-700'>Smart Ai</GradientButton>
         <Button className='bg-slate-800 hover:bg-slate-700 text-white'>
            Standard
         </Button>
       </div>
        </Link>
    </div>
  )
}

export default AutomateList