import { NextPage } from "next"

export type LayoutProps = {
    children: React.ReactNode
}
export type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode
  }
  
  type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
  }