import InfoBar from '@/components/infobar'
import Sidebar from '@/components/sidebar'
import React from 'react'

type Props = { children: React.ReactNode }

const layout = (props: Props) => {
    return (
        <div className='flex h-screen overflow-hidden'>
            <Sidebar />
            <div className="w-full">
                <InfoBar />
                {props.children}
            </div>
        </div>
        // <div></div>
    )
}

export default layout
