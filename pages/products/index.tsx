import { GetStaticProps, GetStaticPropsContext } from "next";
import Link from "next/link";
import React from "react";

type ProductsProps = {
    products: any[];
};

// client
const ProductPage = ({ products }: ProductsProps) => {
    if (!products) return null;
    return (
        <div>
            {products.map((item) => (
                <div key={item.id}><Link href={`/products/${item.id}`}>{item.name}</Link></div>
            ))}
        </div>
    );
};

export const getServerSideProps = async ({req, res}) => {
    res.setHeader(
        'Cache-Control',
        's-maxage=10'
    )
    const data = await (await fetch(`https://6110f09bc38a0900171f0ed0.mockapi.io/products`)).json();
    if(!data){
        return {
        notFound: true
        }
    }
    return {
        props: {
            products: data,
        },
    };
}
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
//     };
// };

export default ProductPage;
