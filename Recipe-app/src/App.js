import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRecipesSuccess,getRecipesFailure} from './redux/recipes'
const App = () => {
  const dispatch = useDispatch()
  const data= useSelector(state=>{
	  return state.recipes
  })
  const  fetchRecipes=(()=> {
	return async dispatch => {
	    try {
		const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
		const data = await response.json()
		dispatch(getRecipesSuccess(data.meals))
	  } catch (error) {
		//dispatch(getRecipesFailure())
		console.log(error)
	  }
	}
  })
  useEffect(() => {
    dispatch(fetchRecipes())
  }, [dispatch])
  const renderRecipes = () => {
  /*   if (data) return <p>Loading recipes...</p>
    if (!data) return <p>Cannot display recipes...</p> */
    return data.recipes.map(recipe =>
      <div key={recipe.idMeal} className='tile'>
        <h2>{recipe.strMeal}</h2>
        <img src={recipe.strMealThumb} alt=''/>
      </div>
    )
  }
  return (
    <section>
      <h1>Recipes</h1>
      <div className='content'>
        {renderRecipes()}
      </div>
    </section>
  )
}
export default App