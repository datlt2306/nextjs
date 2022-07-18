import { GetStaticProps, GetStaticPropsContext } from "next";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import useSWR from 'swr'

type ProductsProps = {
    products: any[];
};
const url = 'https://6110f09bc38a0900171f0ed0.mockapi.io/products';

const fetcher = async (url: string) => await (await fetch(url)).json()

// client
const ProductPage = () => {
    const { data, error } = useSWR(url, fetcher, {revalidateOnMount: false, revalidateOnFocus: true})
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>

    // const [products,setProducts] = useState([]);
    // const [error, setError] = useState("");
    // const [isLoading, setIsLoading] = useState(false);

    // useEffect(() => {
    //     (async() => {
    //         try {
    //             const data = await ( await fetch(url)).json();
    //             if(!data){
    //                 setIsLoading(true);
    //             }
    //             setProducts(data);   
    //             setIsLoading(false);
                
    //         } catch (error) {
    //             setError("Fail to load")
    //         }
    //     })()
    // }, [])
    return (
        <div>
            {data.map((item) => (
                <div key={item.id}><Link href={`/products/${item.id}`}>{item.name}</Link></div>
            ))}
        </div>
    );
};

export default ProductPage;
