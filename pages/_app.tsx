import '../styles/globals.css';
import { AppPropsWithLayout } from '../models';
import { EmptyLayout } from '@/layouts';
import { SWRConfig } from 'swr';
import axiosClient from '@/api-client/config';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    const Layout = Component.Layout ?? EmptyLayout;
    const config = { fetcher: (url: any) => axiosClient.get(url), shouldRetryOnError: false };
    return (
        <SWRConfig value={config}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </SWRConfig>
    );
}

export default MyApp;
