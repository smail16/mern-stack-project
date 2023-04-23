const {
    GET_ALL_ARTICLES,
    GET_ALL_FAIL
} = require ('./actionTypes')

const init = {
    articles: null,
    loading:false,
    errors:null
}

// eslint-disable-next-line default-param-last
const artcileReducer = (state=init, {type, payload})=>{
    switch (type) {
        case GET_ALL_ARTICLES:
            
            return{
                ...state,
                articles: payload,
            }
            case GET_ALL_FAIL:
            
            return{
                ...state,
                errors:payload,
                loading:false,
            }
    
        default:
            return state
    }
}

export default artcileReducer