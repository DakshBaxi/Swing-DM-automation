import React from 'react'

type Props = {}

const Page = async (props: Props) => {

    // WIP:server action to onboard the user
    const user = await onBoardUser()
    // WIP:200 ||201
  return (
    <div>Dashboard</div>
  )
}

export default Page