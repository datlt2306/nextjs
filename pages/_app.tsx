import "../styles/global.scss";

import { AppPropsWithLayout } from "../models/layout";
import Layout from "../components/Layout";
import { SWRConfig } from "swr";
import instance from "../api/config";

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    const LayoutWrapper = Component.Layout ?? Layout;
    return (
        <LayoutWrapper>
            <SWRConfig
                value={{
                    fetcher: async (url: string) => instance.get(url),
                }}
            >
                <Component {...pageProps} />
            </SWRConfig>
        </LayoutWrapper>
    );
}

export default MyApp;
