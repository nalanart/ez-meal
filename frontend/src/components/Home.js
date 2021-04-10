import './Home.css'
import Bundle from './Bundle'
import Recipes from './Recipes'
import { useState } from 'react'

export default function Home({ user }) {
  const [bundleSelected, setBundleSelected] = useState()
  const [pricePerMeal, setPricePerMeal] = useState(0)
  const [showTab, setShowTab] = useState(false)

  const selectBundle = numberOfMeals => {
    setBundleSelected(numberOfMeals)
    setPricePerMeal(() => {
      if(numberOfMeals === 2) return 6.99
      else if(numberOfMeals === 3) return 6.49
      else return 5.99
    })
    setShowTab(true)
  }

  return (
    <div className="Home">
      <section className="choose-bundle">
        <h2 className="section-title">BUNDLES</h2>
        <div className="Bundles">
          <Bundle title="2-Meal Bundle" selectBundle={selectBundle} numberOfMeals={2} pricePerMeal={6.99} />
          <Bundle title="3-Meal Bundle" selectBundle={selectBundle} numberOfMeals={3} pricePerMeal={6.49} />
          <Bundle title="4-Meal Bundle" selectBundle={selectBundle} numberOfMeals={4} pricePerMeal={5.99} />
        </div>
      </section>
      {bundleSelected && 
      <section className="choose-meals">
        <h2 id="choose-meals" className="section-title">MEALS</h2>
        <Recipes user={user} bundleSelected={bundleSelected} showTab={showTab} setShowTab={setShowTab} pricePerMeal={pricePerMeal} />
      </section>}
    </div>
  )
}