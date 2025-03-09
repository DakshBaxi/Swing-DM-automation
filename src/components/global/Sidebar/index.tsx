"use client"
import { usePaths } from '@/hooks/user-nav'
import React from 'react'
import Items from './items'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'
import ClerkAuthState from '@/components/clerk-auth'
import { SubsciptionPlan } from '../subscription-plan'
import UpgradeCard from './upgradeCard'


type Props = {
    slug:string
}

const Sidebar = ({slug}: Props) => {
    const {page }= usePaths()
  return (
    <div className="w-[250px] border-2 border-[#545454]  lg:inline-block hidden fixed bottom-0 top-0 m-3 rounded-3xl overflow-hidden">
        <div className='flex flex-col gap-y-5 w-full h-full p-3 bg-[#171717] bg-gradient-to-b from-[#16171d] to-black bg-opacity-90 bg-clip-padding backdrop:-filter  backdrop-blur-3xl'>
            <div className='flex-col flex p-4 gap-[1.5rem] '>
            <div className="text-4xl font-bold text-white mr-8 self-center">
            <span className="text-violet-400">Swing</span>
          </div>
          <div className='flex flex-col py-3'>
            <Items page={page} slug={slug}/>
          </div>
          <Separator
          orientation='horizontal'
        className='#bg-[#5c5c5f]'
/>
      <div className='px-3 flex flex-col gap-y-5'>
        <div className='flex gap-x-2'>
          <ClerkAuthState/>
          <p className='text-[#9b9ca0]'>Profile</p>
        </div>
      <div className='flex gap-x-3'>
        <Image src="/icons/help.svg" alt="help" height={20} width={20}/>
        Help
      </div>
      </div>
            </div>
        <SubsciptionPlan type='FREE' >
          <div className='flex-1 flex flex-col justify-end'>
      <UpgradeCard/>
          </div>
          </SubsciptionPlan>    
        </div>
    </div>
  )
}

export default Sidebar