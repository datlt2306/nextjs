import '../styles/global.scss'

import { AppPropsWithLayout } from '../models/layout'
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const LayoutWrapper = Component.Layout ?? Layout;
  return (<LayoutWrapper><Component {...pageProps} /></LayoutWrapper>)
}

export default MyApp
