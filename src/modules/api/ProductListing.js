import axios from "axios";

class ProductListings {
    /**
     * gets list of all products
     */
    async getAllProducts() {
        try {
            const res = await axios.get('https://fakestoreapi.com/products')
            const { data: allProducts } = res
            return allProducts

        } catch (error) {
            return error.message
        }
    }

}
const ProductListingsObj = new ProductListings()
export default ProductListingsObj