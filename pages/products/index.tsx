import { GetStaticProps, GetStaticPropsContext } from 'next'
import Link from 'next/link'
import React from 'react'

type ProductsProps = {
  products: any[]
}
// client
const Products = ({products}: ProductsProps) => {
  console.log('Product component', products)
  if(!products) return null;
  return (
    <div>{products.map(item => (
      <div key={item.id}><Link href={`/products/${item.id}`}>{item.name}</Link></div>
    ))}</div>
  )
}


// server
export const getStaticProps: GetStaticProps<ProductsProps> = async (context: GetStaticPropsContext) => {
  console.log('getStaticProps');
  const response = await fetch(`https://6110f09bc38a0900171f0ed0.mockapi.io/products`);
  const data = await response.json();

  return {
    props: {
      products: data.map((item: any) => ({id: item.id, name: item.name}))
    },
    revalidate: 5
  }
}
export default Products

// getStaticProps without data
// getStaticProps with data