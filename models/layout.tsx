import { NextPage } from "next"
import { ReactElement } from "react"

export type LayoutProps = {
    children: React.ReactNode
}
export type NextPageWithLayout = NextPage & {
    Layout?: (page: LayoutProps) => ReactElement
  }
  
export type AppPropsWithLayout = NextPageWithLayout & {
  Component: NextPageWithLayout
}