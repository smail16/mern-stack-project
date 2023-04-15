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
      const itemInCart = state.cart.find((article) => article.id === action.payload.itemWithSizeAndQuantite.article.id && article.size===action.payload.itemWithSizeAndQuantite.size)
        console.log(action.payload,'itemInCart')
      if (itemInCart) {
        itemInCart.quantity = Number(itemInCart.quantity) + Number(action.payload.itemWithSizeAndQuantite.quantity)
      } else {
        // state.cart.push({ ...action.payload.article, quantity: action.payload.quantity || 1})
         state.cart.push({ ...action.payload.itemWithSizeAndQuantite.article, quantity: action.payload.itemWithSizeAndQuantite.quantity || 1, size:action.payload.itemWithSizeAndQuantite.size})
      }
      // console.log(typeof(action.payload.quantity,'rr'))
    },

    decrementQuantity: (state, action) => {
      console.log(action.payload,'zzzzzzzzzzzzz')
      // const item = state.cart.find((article) =>console.log(article.size,'comentaire'))
      

       const item = state.cart.find((article) => article.id === action.payload.id && article.size===action.payload.size)
        let quantity=Number(item.quantity)
      if (item && quantity > 1) {
        console.log(typeof(quantity),'-------------')
        quantity -= 1
        item.quantity=quantity
        
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find((article) => article.id === action.payload.id && article.size===action.payload.size)
      let quantity=Number(item.quantity)
      if (item) {
        console.log(typeof(quantity),'+++++++++++')
        quantity += 1
        item.quantity=quantity
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

  return state.cart.reduce((total, item) => total + Number(item.price) * Number(item.quantity), 0)
}
export const storeReducer = storeSlice.reducer
export const { ToogleLike, addToCart, incrementQuantity, decrementQuantity, removeItem } =
  storeSlice.actions
