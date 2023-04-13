import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find((item) => item.id === action.payload.article.id)

      if (itemInCart) {
        itemInCart.quantity += 1
      } else {
        state.cart.push({ ...action.payload.article, quantity: 1 })
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

export const selectTotalPrice = (state) =>
  state.cart.reduce((total, item) => total + Number(item.price) * Number(item.quantity), 0)

export const cartReducer = cartSlice.reducer
export const { addToCart, incrementQuantity, decrementQuantity, removeItem } = cartSlice.actions
