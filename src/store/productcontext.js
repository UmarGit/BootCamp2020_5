import React, { createContext, useReducer } from 'react'
import Productreducer from './productreducer'
// import data from './data'

const initialcart = []

export const Productcontext = createContext(initialcart)

export const Productprovider = ({children}) => {
    let [state, dispatch] = useReducer(Productreducer, initialcart);

	function addToCart(cartObj){
		dispatch({
			type: 'ADD_TO_CART',
			payload: {
				"id": cartObj.id,
				"name": cartObj.name,
				"image": cartObj.image,
				"price": cartObj.price,
				"quantity": cartObj.quantity
			}
		})
	}

	function deleteFromCart(id){
		dispatch({
			type: 'DELETE_FROM_CART',
			id
		})
	}

    return(
        <Productcontext.Provider value={{
			cart: state,
			addToCart,
			deleteFromCart
        }}>
            {children}
        </Productcontext.Provider>
    )
}
