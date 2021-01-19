import './RecipeCard.css'

export default function RecipeCard({ meal, selectMeal }) {
  return (
    <div className="RecipeCard card">
      <img src={meal.imgSrc} className="card-img-top" alt={meal.name} />
      <div className="card-body">
        <h5 className="card-title">{meal.name}</h5>
        <p className="card-text">{meal.description}</p>
      </div>
      <button className="btn" onClick={() => selectMeal(meal)}>SELECT</button>
    </div>
  )
}