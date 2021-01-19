import './RecipeList.css'
import RecipeCard from './RecipeCard'

export default function RecipeList({ allMeals, selectMeal }) {
  return (
    <div className="RecipeList">
      {allMeals.map(meal => (
        <RecipeCard meal = {meal}
                    selectMeal={selectMeal} />
      ))}
    </div>
  )
}