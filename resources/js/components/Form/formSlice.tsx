import React from 'react'
import { createSlice } from '@reduxjs/toolkit'
import defaultProfileImage from '../../../../storage/'
const initialState = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@doe.com',
    job: 'Worker',
    phone: '06 123 456 78',
    address: '1 road street',
    profileImage: 'https://caer.univ-amu.fr/wp-content/uploads/default-placeholder-768x768.png'
}
const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addForm: (state, action) => {
      state.lastName = action.payload.lastName
      state.email = action.payload.email
      state.phone = action.payload.phone
      state.address = action.payload.address
      state.firstName = action.payload.firstName
      state.job = action.payload.job
    },
    updateForm: (state, action) => {
      state[action.payload.type] = action.payload.value
    }
  }

})
export const { addForm, updateForm } = formSlice.actions
export const getForm = (state : any) => state.form

export default formSlice.reducer