import './Bundle.css'
import bundle from '../bundle.jpg'

export default function Bundle({ title, selectBundle, numberOfMeals, pricePerMeal }) {
  return (
    <div className="Bundle">
      <h3 className="bundle-title">{title}</h3>
      <img src={bundle} alt="bundle" />
      <p>Price per meal: ${pricePerMeal}</p>
      <a href="#choose-meals" className="btn btn-light" onClick={() => selectBundle(numberOfMeals)}>SELECT</a>
    </div>
  )
}