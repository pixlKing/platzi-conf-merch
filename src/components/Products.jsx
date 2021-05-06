import React from 'react';
import Product from './Product';
import '../styles/components/Products.scss';

const Products = ({products})=>{
    return(
        <div className="Products">
            <div className="Products-items">
                {
                    products.map((item)=>{ 
                        return(
                            <Product product={item} key={item.id} />
                        )                        
                    })
                }
            </div>
        </div>
    )
}

export default Products;