import Filters from "../components/Filters";
import ProductsContainer from "../components/ProductsContainer";
import { customFetch } from "../utils";
const url = '/products'
export const loader = async ({ request }) => {
  const response = await customFetch(url)
  const products = response.data.data
  const meta = response.data.meta
  console.log(products, meta);
  return { products, meta }
}

const Products = () => {
  return(
  <div className="align-content py-20">
    <Filters/>
    <ProductsContainer />
    </div>
  )
};
export default Products;