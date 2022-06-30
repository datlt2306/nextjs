import { GetStaticProps } from 'next'
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
      <div key={item.id}>{item.name}</div>
    ))}</div>
  )
}


// server
export const getStaticProps: GetStaticProps<ProductsProps> = async (context) => {
  console.log('getStaticProps');
  const response = await fetch(`https://6110f09bc38a0900171f0ed0.mockapi.io/products`);
  const data = await response.json();

  return {
    props: {
      products: data
    }
  }
}
export default Products

// getStaticProps without data
// getStaticProps with data