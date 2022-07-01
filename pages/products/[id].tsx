import { GetServerSideProps, GetServerSidePropsContext, GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

type ProductProps = {
  product: any
}

const ProductDetail = ({product}: ProductProps) => {
  if(!product) return null;
  return (
    <div>ProductDetail : {product.name}</div>
  )
}


export const getStaticPaths: GetStaticPaths = async () => {
  const data = await (await fetch(`https://6110f09bc38a0900171f0ed0.mockapi.io/products`)).json();
  console.log('data', data);
  const paths = data.map(item => {
    return { params: { id: item.id} }
  })
  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps<ProductProps> = async (
  context: GetStaticPropsContext
) => {
  const data = await ( await fetch(`https://6110f09bc38a0900171f0ed0.mockapi.io/products/${context.params.id}`)).json()
  if(!data){
    return {
      notFound: true
    }
  }

  return {
      props: {
          product: data,
      },
      revalidate: 10
  };
};

// export const getServerSideProps: GetServerSideProps = async ( context: GetServerSidePropsContext) => {
//   context.res.setHeader(
//     'Cache-Control',
//     'public, s-maxage=10, stale-while-revalidate=59'
//   )
//   const data = await ( await fetch(`https://6110f09bc38a0900171f0ed0.mockapi.io/products/${context.params.id}`)).json()
//   return {
//     props: {
//       product: data
//     }
//   }
// }

export default ProductDetail



// Static Site Generation => Render ra cac file html co san
// Server Side rendering => server trả về dữ liệu khi user truy cap
// Client Side rendering => giống react
// Icremental Static Generation => 
// cache dữ liệu, khi truy cập vào 1 page không có thì sẽ chờ thời gian tạo page mới