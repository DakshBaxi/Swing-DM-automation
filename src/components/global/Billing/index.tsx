import React from 'react'
import PaymentCard from './payment-card'

type Props = {}

const Billing = (props: Props) => {
    //Wip  Fetch customer data
  return (
    <div className='flex lg:flex-row flex-col gap-5 w-fulll lg:w-10/12 xl:8/12 container'>
        <PaymentCard 
        current={'FREE'}
        label='FREE'
        />
          <PaymentCard 
        current={'FREE'}
        label='PRO'
        />
  
    </div>
  )
}

export default Billing