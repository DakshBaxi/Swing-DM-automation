import { Button } from '@/components/ui/button'
import React from 'react'
import Loader from '../../Loader/Loader'
import Image from 'next/image'

type Props = {}

const CreateAutomation = (props: Props) => {
    // wip Create the automation in the database using mutate
  return (
    <Button className='lg:px-10 py-6 bg-gradient-to-br hover:opacity-80 text-white roundde-full from-[#a38cf3] font-medium to-[#121d4c]'>
        <Loader state={false}>
            <Image src='/icons/Automation.svg' height={20} width={20} alt="automation"/>
            <p className='lg:inline hidden'>Create an Automation</p>
        </Loader>
    </Button>
  )
}

export default CreateAutomation