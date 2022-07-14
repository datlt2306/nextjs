import dynamic from 'next/dynamic'
import React from 'react'
import { LayoutProps } from '../../models/layout'
import Header from '../Header'

// const DynamicHeader = dynamic(() => import('../Header'))
const Layout = ({children}: LayoutProps) => {
  return (
    <div>
        {/* <DynamicHeader /> */}
        <Header />
        {children}
    </div>
  )
}

export default Layout