import { configureStore, createReducer } from '@reduxjs/toolkit'
import React from 'react'
import cartReducer from './cartSlice'

const store = configureStore(
    {
  reducer : {
    cart : cartReducer
  }, 
    }
    
)

export default store