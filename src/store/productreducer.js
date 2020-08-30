const Prodcuctreducer = (state,action) => {
	switch (action.type) {
		case 'ADD_TO_CART':{
			return [action.payload, ...state]
		}

		case 'DELETE_FROM_CART':{
			return [...state.filter((index)=>{ return index.id !== action.id})]
		}

		default:
			break
	}
}

export default Prodcuctreducer;