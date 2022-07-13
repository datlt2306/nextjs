import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { AppPropsWithLayout } from "../models/layout";

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    const Layout = Component.Layout;
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
