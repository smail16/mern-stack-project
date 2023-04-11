/* eslint-disable array-callback-return */
import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
  },
  reducers: {
    // addToCart: (state, action) => {
    //     const data = action.payload
    //     state.cart.push({ ...data, quantity: 1 })
    //   },
    addToCart: (state, action) => {
      console.log(typeof(action.payload.article.price), 'id')
      const itemInCart = state.cart.find((item) => item.article.id === action.payload.article.id)

      if (itemInCart) {
        // eslint-disable-next-line no-plusplus
        itemInCart.quantity++
      } else {
        state.cart.push({ ...action.payload, quantity: 1 })
      }
    },
    incrementQuantity: (state, action) => {
        // eslint-disable-next-line no-shadow
        const item = state.cart.find(item => item.id === action.payload)
        if (item) {
          // eslint-disable-next-line no-plusplus
          item.quantity++
        }
      },
    // incrementQuantity: (state, action) => {
    //     // console.log(action.payload.article.id, 'id')
    //   // eslint-disable-next-line no-shadow
    //   const item = state.cart.find((item) => item.id === action.payload)
    //   // eslint-disable-next-line no-plusplus
    //   item.quantity++
    // },
    // decrementQuantity: (state, action) => {
    //     const { cartIndex } = action.payload
    //     const item = state[cartIndex]
    //     if (item) {
    //       item.quantity = item.quantity > 0 ? item.quantity - 1 : 0
    //     }
    //   },

    decrementQuantity: (state, action) => {
      // eslint-disable-next-line no-shadow
      const item = state.cart.find((item) => item.id === action.payload)
      if (item.quantity === 1) {
        item.quantity = 1
      } else {
        // eslint-disable-next-line no-plusplus
        item.quantity--
      }
    },
    removeItem: (state, action) => {
      const index = state.cart.findIndex((item) => item.id === action.payload)
      if (index !== -1) {
        state.cart.splice(index, 1)
      }
    },
    // removeItem: (state, action) => {
    //   const removeItem = state.cart.filter((item) => item.id !== action.payload)
    //   // eslint-disable-next-line no-param-reassign
    //   state.cart = removeItem
    // },
  },
})

export const selectCart = (state) => state.cart

export const selectTotalPrice = (state) =>

  state.cart.reduce(
    (total, item) => total + ((Number(item.article.price)) * (Number(item.quantity))),0
    // (total, item) => console.log(item , 'test')

  )

export const cartReducer = cartSlice.reducer
export const { addToCart, incrementQuantity, decrementQuantity, removeItem } = cartSlice.actions
