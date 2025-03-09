import { ChevronRight, PencilIcon } from 'lucide-react'
import React from 'react'
import ActivateAutomationButton from '../../activation-button/ActivateAutomationButton'

type Props = {
    id:string
}

const AutomationBreadCrumb = ({id}: Props) => {
    // wip get the automation data
    // user mutation stuff to update automation
  return (
    <div className='rounded-full w-full p-5 bg-[#18181b1A] flex justify-between items-center '>
        <div className='flex items-center gap-x-3 min-w-0'> 
            <p className='text-[#989CA0] truncate'>Automations</p>
        <ChevronRight color="#989CA0" className='flex-shrink-0'/>
        <span className='flex gap-x-3 items-center min-w-0'>
            {/* wip:show the editing data */}
           <p className='text-[#9b9ca0] truncate'>This is automation title</p>
        <span className='cursor-pointer hover:opacity-75 duration-100 transition flex-shrink-0 mr-4'>
        <PencilIcon size={14}/>
        </span>
        </span>
        </div>
        <div className='flex gap-x-5 ml-auto '>
            <p className='text-[#989CA0]/70 text-sm hidden md:block truncate min-w-0'>
                All states are automatically saved
            </p>
        </div>
        <div className='flex gap-x-5 ml-2 flex-shrink-0'>
            <p className='text-[#989CA0] text-sm truncate min-w-0'>Changes Saved</p>
            {/* <p className='text-[#989CA0] text-sm truncate min-w-0'>Undo|Redo</p> */}
        </div>
        <ActivateAutomationButton/>
    </div>
  )
}

export default AutomationBreadCrumb