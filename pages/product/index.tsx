import { useEffect, useState } from "react";

export interface IProductPageProps {
    products: any[];
}

export default function ProductPage(props: IProductPageProps) {
    // const [products, setProducts] = useState<any[]>([]);
    // useEffect(() => {
    //     fetch("http://localhost:3001/products")
    //         .then((response) => response.json())
    //         .then((data) => setProducts(data));
    // }, []);
    return <div>{props.products?.map((item: any) => item.name)}</div>;
}
export async function getStaticProps() {
    const res = await fetch("http://localhost:3001/products");
    const products = await res.json();
    return {
        props: {
            products,
        },
    };
}
