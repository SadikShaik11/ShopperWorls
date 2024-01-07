import { useEffect, useState } from 'react';
import ProductListingsObj from 'path/to/ProductListingsObj';
import dispatch from '../dispatch';

function useProductDetails(id) {
    const [productDetails, setProductDetails] = useState({});
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await dispatch(ProductListingsObj.getProductById, id);
                setProductDetails(response);
                console.log(response);
            } catch (error) {
                console.error('Error fetching product details:', error);

            }
        };
        fetchData();
    }, [id]);

    return productDetails;
}

export default useProductDetails;
