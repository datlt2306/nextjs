import { useRouter } from 'next/router'
import React from 'react'

type Props = {}

const ProductDetail = (props: Props) => {
    const router = useRouter();
    console.log('router', router.query);
  return (
    <div>ProductDetail</div>
  )
}

export default ProductDetail