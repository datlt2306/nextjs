import React from 'react'
import { LayoutProps } from '../../models/layout'


const LayoutAdmin = ({children}: LayoutProps) => {
  return (
    <div>
        <div>admin</div>
        {children}
    </div>
  )
}

export default LayoutAdmin
