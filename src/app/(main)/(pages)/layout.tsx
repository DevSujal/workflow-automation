import React from 'react'

type Props = { children: React.ReactNode }

const Layout = ({ children }: Props) => {
  return (
    <div className="border-l-[1px] border-t-[1px] rounded-l-3xl h-full border-muted-foreground/20 overflow-scroll hide-scrollbar">
      {children}
    </div>
  )
}

export default Layout