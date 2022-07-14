import { GetStaticProps, GetStaticPropsContext } from "next";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import useSWR from "swr";

type ProductsProps = {
    products: any[];
};
// client
const Products = () => {
    // const [products, setProducts] = useState<any[]>([]);
    // const [isLoading, setIsLoading] = useState<boolean>(false);
    // const [error, setError] = useState<string>("");

    // useEffect(() => {
    //     (async () => {
    //         try {
    //             const data = await (
    //                 await fetch(`https://6110f09bc38a0900171f0ed0.mockapi.io/products`)
    //             ).json();
    //             if(!data) {
    //               setIsLoading(true)
    //             } else{
    //               setIsLoading(false);
    //               setProducts(data);
    //             }
    //         } catch (error) {
    //           setError(error.response)
    //         }
    //     })();
    // }, []);
    const url = `https://6110f09bc38a0900171f0ed0.mockapi.io/products`;
    
    // lấy dữ liệu từ api
    const fetcher = async (url) => await (await fetch(url)).json();

    const { data, error } = useSWR(url, fetcher, { dedupingInterval: 5000});
    
    if(!data) return <div>Loading...</div>
    if(error) return <div>Failed to load</div>
    return (
        <div>
            {data.map((item) => (
                <div key={item.id}>
                    <Link href={`/products/${item.id}`}>{item.name}</Link>
                </div>
            ))}
        </div>
    );
};

// server
// export const getStaticProps: GetStaticProps<ProductsProps> = async (context: GetStaticPropsContext) => {
//   console.log('getStaticProps');
//   const response = await fetch(`https://6110f09bc38a0900171f0ed0.mockapi.io/products`);
//   const data = await response.json();

//   return {
//     props: {
//       products: data.map((item: any) => ({id: item.id, name: item.name}))
//     },
//     revalidate: 5
//   }
// }
export default Products;

// getStaticProps without data
// getStaticProps with data

// SSR - Server Side rendering
// SSG - Sever site generation
// ISG - incremental site generation
// CSR - Client Side Rendering
