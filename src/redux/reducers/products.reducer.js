const getProductsReducer = (state = [], action) => {
    console.log('we in reducer', action.payload);
    
    switch (action.type) {
        case 'SET_PRODUCTS':
        return action.payload;
    default:    
        return state;    
    }
}

export default getProductsReducer;