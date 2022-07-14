import React from 'react'
import { LayoutProps } from '../../models/layout'

type Props = {}

const EmptyLayout = ({children}: LayoutProps) => {
  return (
    <div>
        {children}
    </div>
  )
}

export default EmptyLayout