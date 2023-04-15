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
      console.log(current(state), action.payload)

      // console.log(state.cart,'id')

      const likeArticle = state.products.find((article) => article.id === action.payload.article.id)
      console.log(likeArticle, 'filtred')

      if (likeArticle) {
        likeArticle.isFavourite = !likeArticle.isFavourite
      }
    },

    addToCart: (state, action) => {
      const itemInCart = state.cart.find((article) => article.id === action.payload.article.id)

      if (itemInCart) {
        itemInCart.quantity += 1
      } else {
        state.cart.push({ ...action.payload.article, quantity: action.payload.quantity || 1 })
      }
    },

    decrementQuantity: (state, action) => {
      const item = state.cart.find((article) => article.id === action.payload)

      if (item && item.quantity > 1) {
        item.quantity -= 1
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find((article) => article.id === action.payload)
      if (item) {
        item.quantity += 1
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
