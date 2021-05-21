import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import Product from './Product';
import '../styles/components/Products.scss';

const Products = ()=>{

    const {state, AddToCart} = useContext(AppContext);
    const {products} = state;
    //console.log(state);

    const handleAddToCart = product => () =>{
        AddToCart(product)
    }

    return(
        <div className="Products">
            <div className="Products-items">
                {
                    products.map((item)=>{ 
                        return(
                            <Product product={item} key={item.id} handleAddToCart={handleAddToCart} />
                        )                        
                    })
                }
            </div>
        </div>
    )
}

export default Products;