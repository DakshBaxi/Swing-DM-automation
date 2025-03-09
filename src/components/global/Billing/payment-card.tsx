import { Button } from '@/components/ui/button'
import { PLANS } from '@/constants/page'
import { cn } from '@/lib/utils'
import { CircleCheck } from 'lucide-react'
import React from 'react'

type Props = {
    label:string
    current:'PRO'|'FREE'
    landing?:boolean

}

const PaymentCard = ({label,current,landing}: Props) => {
  return (
    <div className={cn(
        label!==current?'bg-in-active':'bg-gradient-to-r from-indigo-500 h-fit via-purple-5000 to-pink-500','p-[2px] rounded-xl overflow-hidden'
    )}>
        <div className={cn(
            landing && 'bg-black','flex flex-col rounded-xl  pl-5 py-5 pr-10  bg-slate-900'
        )}>
           {landing?(
            <h2 className='text-2xl'>
                {label==='PRO'&&'Premium Plan'}
                {label==='FREE'&&'Premium Plan'}   
            </h2>

            
           ):(
            <h2 className='text-2xl'>
                {label===  current
                ?'Your Current Plan':current==='PRO'?'Downgrade':'Upgrade'
            }
            </h2>
           )}
           <p className='text-slate-400 text-sm mb-2'>
           Focus on content creation and let us take care of the rest!</p>
           {label==='PRO'?(
              <span className='bg-gradient-to-r from-[#CC3BD4] to-[#D064AC] font-bold  bg-clip-text text-transparent'>Smart AI</span>
           ):(
            <p className='font-bold mt-2   text-slate-400'>Standard</p>
           )}
            {
                label==='PRO'?(
                    <p className='mb-2'>
                        <b className='text-xl'>$99</b>/month
                    </p>
                ):(
                    <p className='text-xl mb-2'>Free</p>
                )
            }
            {PLANS[label==='PRO'?1:0].features.map((i)=>(
                 <p
                 key={i}
                 className='mt-2 text-muted-foreground flex gap-2'
                 >
                     <CircleCheck className="text-violet-400"/>
                     {i}
                 </p>
            ))}
             {
                landing?(
                        <Button className={cn(
                            'rounded-full mt-5', label==='PRO'?'bg-gradient-to-r from-violet-500 text-white via-purple-500 to-pink-500'
                            :'bg-background-80 text-white hover:text-background-80'
                        )}>
                                {
                                    label===current?'Get Started':current==='PRO'?'Free':'Get Started'
                                }
                        </Button>
                ):(
                    <Button
                    className='rounded-full mt-5 bg-background text-white hover:text-background-80'
                    disabled={label===current}
                    >
                        {label===current?'Active':current==='PRO'?'Downgrade':'Upgrade'}
                    </Button>
                )
             }
        </div>
    </div>
  )
}

export default PaymentCard