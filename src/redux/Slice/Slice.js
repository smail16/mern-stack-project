import { createSlice, current } from '@reduxjs/toolkit'
import { articles } from 'mocks/articles'

const storeSlice = createSlice({
  name: 'store',
  initialState: {
    cart: [],
    products: articles,
  },
  reducers: {
    ToogleLike: (state, action) => {
      // console.log(action.payload, 'pay')

      // console.log(state.cart,'id')

      const likeArticle = state.products.find((article) => article.id === action.payload.article.id)
      // console.log(likeArticle, 'filtred')

      if (likeArticle) {
        likeArticle.isFavourite = !likeArticle.isFavourite
      }
    },

    addToCart: (state, action) => {

      console.log(action.payload,'pay')
      const itemInCart = state.cart.find((article) => article.id === action.payload.id && article.selectedSize===action.payload.selectedSize)
        console.log(action.payload,'itemInCart')
      if (itemInCart) {
        if(itemInCart.selectedQuantity + action.payload.selectedQuantity <= itemInCart.sizes.filter((el)=>(el.size === itemInCart.selectedSize))[0]?.quantity){
          itemInCart.selectedQuantity = Number(itemInCart.selectedQuantity) + Number(action.payload.selectedQuantity)
        }
      } else {
        // state.cart.push({ ...action.payload.article, quantity: action.payload.quantity || 1})
         state.cart.push(action.payload)
      }
      console.log(typeof(action.payload,'rr'))
    },

    decrementQuantity: (state, action) => {
      console.log(action.payload,'zzzzzzzzzzzzz')
      // const item = state.cart.find((article) =>console.log(article.size,'comentaire'))
      

       const item = state.cart.find((article) => article.id === action.payload.id && article.selectedSize===action.payload.selectedSize)
        let quantity=Number(item.selectedQuantity)
      if (item && quantity > 1 ) {
        console.log(typeof(quantity),'-------------')
        quantity -= 1
        item.selectedQuantity=quantity
        
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find((article) => article.id === action.payload.id && article.selectedSize===action.payload.selectedSize)
      let quantity=Number(item.selectedQuantity)
      if (item  && quantity+1 <= item.sizes.filter((el)=>(el.size === action.payload.selectedSize))[0]?.quantity) {
        console.log(typeof(quantity),'+++++++++++')
        quantity += 1
        item.selectedQuantity=quantity
      }
    },

    removeItem: (state, action) => {
      const index = state.cart.findIndex((item) => item.id === action.payload)
      if (index !== -1) {
        state.cart.splice(index, 1)
      }
    },
  },
})

export const selectCart = (state) => state.cart
 
export const selectTotalPrice = (state) => {
  console.log(state.cart)

  return state.cart.reduce((total, item) => total + Number(item.price) * Number(item.selectedQuantity), 0)
}
export const storeReducer = storeSlice.reducer
export const { ToogleLike, addToCart, incrementQuantity, decrementQuantity, removeItem } =
  storeSlice.actions
