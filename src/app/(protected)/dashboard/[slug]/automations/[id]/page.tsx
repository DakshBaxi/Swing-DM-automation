import Trigger from '@/components/global/automations/trigger'
import AutomationBreadCrumb from '@/components/global/bread-crumb/automation-bread-crumb'

import { FileWarningIcon, HelpCircle, MessageCircleWarning } from 'lucide-react'
import React from 'react'

type Props = {
    params:{id:string}
}

// wip set some metadara

const Page = ({params}: Props) => {

    // wip: prefetch user automation data
  return (
    <div className='flex flex-col items-center gap-y-20'>
        <AutomationBreadCrumb id={params.id}/>
        <div className='w-full lg:w-10/12 xl:w-6/12 p-5 rounded-xl flex flex-col bg-[#1d1d1d] gap-y-3'>
        <div className='flex gap-x-2 '>
            <MessageCircleWarning color='#7c3aed'/>
            When...
        </div>
        <Trigger id={params.id}/>
        </div>
    </div>
  )
}

export default Page