import { BadgeDollarSign, Instagram } from "lucide-react"

type Props={
    title:string,
    icon:React.ReactNode,
    description:string,
    strategy:'INSTAGRAM'|'CRM'
}

export const INTEGRATION_CARDS: Props[]=[
    {
        title:'Connect Instagram',
        description:'falana dikhana',
        icon:<Instagram  color="#ffffff"/>,
        strategy:'INSTAGRAM'
    },{
        title:'Conncet SalesForce',
        description:'falana dikhana',
        icon:<BadgeDollarSign color="#ffffff" />,
        strategy:'CRM'
    }
]