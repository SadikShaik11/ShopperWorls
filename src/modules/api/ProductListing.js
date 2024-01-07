import axios from "axios";

class ProductListings {
    /**
     * gets list of all products
     */
    async getAllProducts() {
        try {
            const res = await axios.get('https://api.escuelajs.co/api/v1/products')
            const { data: allProducts } = res
            return allProducts

        } catch (error) {
            return error.message
        }
    }
    /**
         * gets product by id
         */
    async getProductById(id) {
        try {
            const res = await axios.get(`https://fakestoreapi.com/products/${id}`)
            const { data: productInfo } = res
            return productInfo

        } catch (error) {
            return error.message
        }
    }

    async addToCart(cartDetails) {
        try {
            const res = await axios.post(`https://fakestoreapi.com/carts`, cartDetails)
            const { data: productInfo } = res
            return productInfo

        } catch (error) {
            return error.message
        }
    }

}
const ProductListingsObj = new ProductListings()
export default ProductListingsObj