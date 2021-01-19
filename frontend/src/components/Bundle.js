import './Bundle.css'
import bundle from '../bundle.jpg'

export default function Bundle({ title, selectBundle, numberOfMeals }) {
  return (
    <div className="Bundle">
      <h3 className="bundle-title">{title}</h3>
      <img src={bundle} alt="bundle" />
      <a href="#choose-meals"><button className="btn btn-select" onClick={() => selectBundle(numberOfMeals)}>SELECT</button></a>
    </div>
  )
}