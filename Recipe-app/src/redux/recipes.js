import { createSlice } from '@reduxjs/toolkit'
export const initialState = {
  loading: false,
  hasErrors: false,
  recipes: [],
}
const recipesSlice = createSlice({
  name: 'noName',
  initialState,
  reducers: {
   
    getRecipesSuccess: (state,  action ) => {
      state.recipes = action.payload
      state.loading = false
      state.hasErrors = false
    },
 /*    getRecipesFailure: state => {
      state.loading = false
      state.hasErrors = true
    }, */
  },
})
export const { getRecipes, getRecipesSuccess, getRecipesFailure } = recipesSlice.actions
export default recipesSlice.reducer



