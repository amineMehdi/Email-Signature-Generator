import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  textForm : {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@doe.com',
    job: 'Worker',
    mobilePhone: '06 123 456 78',
    officePhone : '01 234 567 89',
    company : 'Company',
    address: '1 road street',
    department : 'Departement',
    websiteURL : 'www.exemple.com', // TODO: add label to this field
    customField: '',                // TODO : Multiple Fields ?
    facebook: ' ',
    linkedin: ' ',
    twitter: ' ',
    instagram: ' '
  },
  imageForm : {
    profileImage: 'https://caer.univ-amu.fr/wp-content/uploads/default-placeholder-768x768.png',
    companyLogo: null,
    customCTA : null
  },
  styleForm : {
    themeColor : '#000',
    textColor: '#000',
    linkColor : null,
    socialColor : null,
    font: null,
    fontSize: null,
  }
}
const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateTextForm: (state, action) => {
      state.textForm[action.payload.type] = action.payload.value.trim()
    },
    updateImageForm: (state, action) => {
      state.imageForm[action.payload.type] = action.payload.value
    },
    updateStyleForm: (state, action) => {
      state.styleForm[action.payload.type] = action.payload.value
    }
  }

})
export const {updateTextForm, updateImageForm, updateStyleForm } = formSlice.actions

export const getImageForm = (state : any) => state.form.imageForm
export const getTextForm = (state : any) => state.form.textForm
export const getStyleForm = (state : any) => state.form.styleForm

export default formSlice.reducer