const initialState ={
    products: [
        {name:"Apple", price:10},
        {name:"Graps", price:15},
        {name:"Orange", price:30},
    ],
    cart:[],
    total:0,
};

const cartReducer = (state= initialState, action)=>{
    switch(action.type){
        case "PURCHASE":
            return{
                ...state,
                cart:[...state.cart, action.payload],
                total: state.total + action.payload.price,
            };
            default:
                return state;
    }
};

export default cartReducer;