
import React from 'react'
import { ClerkLoading, SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import { User } from 'lucide-react'
import Loader from '../global/Loader/Loader'
import { Button } from '../ui/button'


type Props={}

const ClerkAuthState = (props:Props) => {
  return (
    <div><ClerkLoading>
        <Loader state>
            <></>
        </Loader>
        </ClerkLoading>
        <SignedOut>
          <SignInButton>
             <Button className='rounded-xl bg-[#252525] text-white hover:bg-[#252525]/70'>
             <User/>
             Login
             </Button>
          </SignInButton>
        </SignedOut>
        <SignedIn >
        <UserButton>
          <UserButton.UserProfileLink
          label="Dashboard"
          url={`/dashboard`}
          labelIcon={<User size={16}/>}/>
          
        </UserButton>
        </SignedIn>
        </div>
  )
}

export default ClerkAuthState