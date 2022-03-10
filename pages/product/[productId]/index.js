import React from 'react'
import {useRouter} from 'next/router'

function Product() {
    const router = useRouter();
    const id = router.query.productId;

  return (
    <h1>Product: {id} </h1>
  )
}

export default Product