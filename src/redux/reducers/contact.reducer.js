const getContactReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_CONTACT':
        return action.payload;
    default:    
        return state;    
    }
}

export default getContactReducer;