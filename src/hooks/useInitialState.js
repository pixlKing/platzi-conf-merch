import {useState} from 'react';
import initialState from '../initialState';

const useInitialState = ()=>{
    const [state, setState] = useState(initialState);

    const AddToCart = (payload)=>{
        setState({
            ...state,
            cart: [...state.cart, payload]
        })
    }
    const RemoveFromCart = (payload)=>{
        setState({
            ...state,
            cart: state.cart.filter(items => items.id !== payload.id)
        })
    }
    return {
        AddToCart,
        RemoveFromCart,
        state
    }
}

export default useInitialState;