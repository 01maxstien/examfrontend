const INITIAL_STATE = {cartLength : 0}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'CART':
                return {...INITIAL_STATE, cartLength : 'CART'}
        default:
            return state
    }
}