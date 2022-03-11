import React from 'react'
import Link from "next/link";


function ProductsList() {
  return (
      <ul>
        <Link href='/'>Home</Link>
          <li><Link href='/product/1'> P1</Link></li>
          <li>P2</li>
          <li>P3</li>
      </ul>
  )
}

export default ProductsList