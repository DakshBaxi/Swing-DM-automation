import AutomateList from '@/components/global/AutomationList/page'
import CreateAutomation from '@/components/global/navbar/create-automation'
import { Check } from 'lucide-react'
import React from 'react'

type Props = {}

const Page = (props: Props) => {
    // Wip connect real automations list
  return (
    <div className='grid grid-cols-1 lg:grid-cols-6 gap-5'>
        <div className='lg:col-span-4'>
            <AutomateList/>
        </div>
        <div className='lg:col-span-2 '>
            <div className='flex flex-col rounded-xl bg-slate-800 gap-y-6 p-5 border-[1px] overflow-hidden border-white/30
            '>
              <h2 className='text-xl '>Automations</h2>
              <p className='text-slate-400'>
              Your live automations will show here
              </p>
              <div className='flex flex-col gap-y-3'>
               {
                [1,2,3].map((item)=>(
                  <div
                  key={item}
                  className='flex items-start justify-between'
                  >
                    <div className='flex fle-col'>
                      <h3 className='font-medium'>Direct traffic towards website</h3>
                      <p className='text-slate-400 text-sm'>
                        March 09th 2025
                      </p>
                      <Check/>
                      </div>  
                  </div>
                ))
               }
               <CreateAutomation/>
            </div>
            </div>
      
        </div>
    </div>
  )
}

export default Page