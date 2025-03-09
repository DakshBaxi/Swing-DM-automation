import { Button } from '@/components/ui/button'
import React from 'react'
import Loader from '../Loader/Loader'
import Image from 'next/image'

type Props = {}
// wip : setup optimistic ui
// wip: fetch data 
const ActivateAutomationButton = (props: Props) => {
  return (
   <Button className='lg:px-10 bg-gradient-to-br hover:opacity-80 text-white rounded-full from-violet-400 font-medium to-violet-600 ml-4'> 
  {/*wip set the loadingstae*/}
   <Loader state={false}>
    <Image src='/icons/Automation.svg' height={20} width={20} alt='automation icon'/>
    <p className='lg:inline hidden'>
    Activate
    </p>
   </Loader>
   </Button>
  )
}
export default ActivateAutomationButton