import { GetStaticProps, GetStaticPropsContext } from "next";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import useSWR from 'swr'

type ProductsProps = {
    products: any[];
};
const url = 'https://6110f09bc38a0900171f0ed0.mockapi.io/products';

const fetcher = async (url) => await (await fetch(url)).json()

// client
const ProductPage = () => {
    const { data, error } = useSWR(url, fetcher, { dedupingInterval: 5000})
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    return (
        <div>
            {data.map((item) => (
                <div key={item.id}><Link href={`/products/${item.id}`}>{item.name}</Link></div>
            ))}
        </div>
    );
};

// export const getServerSideProps = async ({req, res}) => {
//     res.setHeader(
//         'Cache-Control',
//         's-maxage=10, stale-while-revalidate=20'
//     )
//     const data = await (await fetch(`https://6110f09bc38a0900171f0ed0.mockapi.io/products`)).json();
//     if(!data){
//         return {
//         notFound: true
//         }
//     }
//     return {
//         props: {
//             products: data,
//         },
//     };
// }
// // Chạy ở server
// export const getStaticProps: GetStaticProps<ProductsProps> = async (
//     context: GetStaticPropsContext
// ) => {
//     const data = await (await fetch(`https://6110f09bc38a0900171f0ed0.mockapi.io/products`)).json();
//     console.log('data', data);
//     if(!data){
//       return {
//         notFound: true
//       }
//     }
//     return {
//         props: {
//             products: data,
//         },
//         revalidate: 60
//     };
// };

export default ProductPage;
