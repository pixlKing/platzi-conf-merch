import {useState} from 'react';
import initialState from '../initialState';

const useInitialState = ()=>{
    const [state, setState] = useState(initialState);

    const AddToCart = ()=>{
        
    }
    const RemoveFromCart = ()=>{
        
    }
    return {
        state,
        AddToCart,
        RemoveFromCart,
    }
}

export default useInitialState;