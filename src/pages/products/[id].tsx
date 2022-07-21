import useProducts from "@/hooks/use-product";

import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
type ProductProps = {
    product: any;
};

const ProductDetail = () => {
    const router = useRouter();
    const { id } = router.query;
    const { data, error } = useSWR(id ? `/products/${id}` : null);
    if (!data) <div>Loading...</div>;
    if (error) <div>Error</div>;
    return <div>ProductDetail {data?.name} </div>;
};

// export const getStaticPaths: GetStaticPaths = async () => {
//   const data = await (await fetch(`https://6110f09bc38a0900171f0ed0.mockapi.io/products`)).json();
//   console.log('data', data);
//   const paths = data.map(item => {
//     return { params: { id: item.id} }
//   })
//   return {
//     paths,
//     fallback: 'blocking'
//   }
// }

// export const getStaticProps: GetStaticProps<ProductProps> = async (
//   context: GetStaticPropsContext
// ) => {
//   const data = await ( await fetch(`https://6110f09bc38a0900171f0ed0.mockapi.io/products/${context.params.id}`)).json()
//   if(!data){
//     return {
//       notFound: true
//     }
//   }

//   return {
//       props: {
//           product: data,
//       },
//       revalidate: 10
//   };
// };

// export const getServerSideProps: GetServerSideProps = async ( context: GetServerSidePropsContext) => {
//   context.res.setHeader(
//     'Cache-Control',
//     's-maxage=5, stale-while-revalidate'
//   )
//   const data = await ( await fetch(`https://6110f09bc38a0900171f0ed0.mockapi.io/products/${context.params.id}`)).json()
//   return {
//     props: {
//       product: data
//     }
//   }
// }

export default ProductDetail;
