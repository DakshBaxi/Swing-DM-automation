import { v4 as uuid } from 'uuid'


type FieldProps = {
   label: string
   id: string 
}

type SidebarProps = {
    icon: string
} & FieldProps



export const SIDEBAR_MENU: SidebarProps[] = [
    {
        id: uuid(),
        label: 'home',
        icon: "/icons/Home.svg"
    },
    {
        id: uuid(),
        label: 'automations',
        icon: "/icons/Automation.svg"
    },
    {
        id: uuid(),
        label: 'integrations',
        icon: "/icons/integration.svg"
    },
    {
        id: uuid(),
        label: 'setting',
        icon: '/icons/Setting.svg'
    }
]
