import { PAGE_ICON } from '@/constants/page'
import Image from 'next/image'
import React from 'react'

type Props = {
    page:string,
    slug?:string
}

const MainBreadCrumb = ({page,slug}: Props) => {
  return (
    <div>
        {page==='Home'&& (
            <div className='flex justify-center w-full'> 
              <div className=' to-black w-4/12 py-5 lg:py-10 flex flex-col items-center'>
            <p className='text-text-secondary text-lg'>Welcome Back</p>
            <h2 className='capitalize text-4xl font-medium'>{slug}</h2>
        </div>
    <div/>
            </div>
            )}
            <span className='radial--gradient inline-flex py-5 lg:py-10 pr-16 gap-x-2 items-center'>
                <Image src={PAGE_ICON[page.toUpperCase()]} height={23} width={23} alt='ICONS'/>
                <h2 className='font-semibold text-2xl capitalize'>{page}</h2>
            </span>
    </div>
    
  )
}

export default MainBreadCrumb