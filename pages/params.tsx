import { useRouter } from 'next/router';
import * as React from 'react';

export interface IParamsPageProps {}

export default function ParamsPage(props: IParamsPageProps) {
    const router = useRouter();
    return (
        <div>
            <h1>Params Page</h1>
            {JSON.stringify(router.query)}
        </div>
    );
}
export async function getServerSideProps() {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return {
        props: {},
    };
}
