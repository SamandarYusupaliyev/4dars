import React from 'react'

import { Filters, ProductsContainer } from "../components"
import { customFetch } from "../utils";

const url = "/products";

export const loader = async ({ request }) => {
  const response = await customFetch(url);
  const products = response.data.data;
  const meta = response.data.meta;
  console.log(products , meta);
  return { products , meta , }
};


function Products() {
  return (
    <div>
      <h1>Product</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, accusamus!</p>
    <div className="align-content mt-14">
      {/* FILTER*/}
      <Filters/>

      {/* ProductsContainer*/}
      <ProductsContainer/>

      {/* PaginationContainer*/}

    </div>
  )
}
export default Products