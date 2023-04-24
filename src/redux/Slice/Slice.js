import { createSlice, current } from '@reduxjs/toolkit'
import { articles } from 'mocks/articles'

const storeSlice = createSlice({
  name: 'store',
  initialState: {
    cart: [],
    products: [],
    wishlist : false,
  },
  reducers: {
    ToogleLike: (state, action) => {
      const likeArticle = state.products.find((article) => article.id === action.payload.article.id)

      if (likeArticle) {
        likeArticle.isFavourite = !likeArticle.isFavourite
      }
    },
    addArticles:(state,action) =>{
    
      // eslint-disable-next-line no-param-reassign
      state.products=action.payload
      
    },

    addToCart: (state, action) => {
      const itemInCart = state.cart.find(
        (article) =>
          article.id === action.payload.id && article.selectedSize === action.payload.selectedSize,
      )
      if (itemInCart) {
        if (
          itemInCart.selectedQuantity + action.payload.selectedQuantity <=
          itemInCart.sizes.filter((el) => el.size === itemInCart.selectedSize)[0]?.quantity
        ) {
          itemInCart.selectedQuantity =
            Number(itemInCart.selectedQuantity) + Number(action.payload.selectedQuantity)
        }
      } else {
        
        state.cart.push(action.payload)
      }
    },

    decrementQuantity: (state, action) => {
      

      const item = state.cart.find(
        (article) =>
          article.id === action.payload.id && article.selectedSize === action.payload.selectedSize,
      )
      let quantity = Number(item.selectedQuantity)
      if (item && quantity > 1) {
        quantity -= 1
        item.selectedQuantity = quantity
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find(
        (article) =>
          article.id === action.payload.id && article.selectedSize === action.payload.selectedSize,
      )
      let quantity = Number(item.selectedQuantity)
      if (
        item &&
        quantity + 1 <=
          item.sizes.filter((el) => el.size === action.payload.selectedSize)[0]?.quantity
      ) {
        quantity += 1
        item.selectedQuantity = quantity
      }
    },
    
    removeItem: (state, action) => {
      const index = state.cart.findIndex((article) => article.id === action.payload.id && article.selectedSize=== action.payload.selectedSize)      
      if (index !== -1) {
        state.cart.splice(index, 1)
      }
    },
    toogleWishList:(state,action)=>{
      // eslint-disable-next-line no-param-reassign
      state.wishlist = !state.wishlist
    }
  },
})

export const selectCart = (state) => state.cart


export const storeReducer = storeSlice.reducer
export const { toogleWishList , addArticles, ToogleLike, addToCart, incrementQuantity, decrementQuantity, removeItem } =
  storeSlice.actions
