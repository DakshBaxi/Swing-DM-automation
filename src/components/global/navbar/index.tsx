"use client"

import { PAGE_BREAD_CRUMBS } from '@/constants/page'
import { usePaths } from '@/hooks/user-nav'
import { Menu } from 'lucide-react'
import React from 'react'
import Sheet from '../sheet'
import { Separator } from '@/components/ui/separator'
import Items from '../Sidebar/items'
import ClerkAuthState from '@/components/clerk-auth'
import Image from 'next/image'
import { SubsciptionPlan } from '../subscription-plan'
import UpgradeCard from '../Sidebar/upgradeCard'
import CreateAutomation from './create-automation'
import Search from './search'
import MainBreadCrumb from '../bread-crumb/main-bread-crumb'

type Props = {
    slug:string
}

const Navbar  = ({slug}: Props) => {
    const {page} = usePaths()
    const currentPage = PAGE_BREAD_CRUMBS.includes(page)||page==slug


 return currentPage && <div className='flex flex-col'>
    <div className='flex gap-x-3 lg:gap-x-5 justify-end'>
        <span className='lg-hidden flex items-center flex-1 gap-x-2'>
            <Sheet side='left' trigger={<Menu/>} className="lg:hidden">
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
          
            </Sheet>
        </span>
        <Search/>
        <CreateAutomation/> 
    </div>
    <MainBreadCrumb
    page={page===slug?'Home':page}
    slug={slug}
    />
 </div>
}

export default Navbar 