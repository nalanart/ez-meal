import './Home.css'
import Bundle from './Bundle'
import Recipes from './Recipes'
import { useState } from 'react'

export default function Home({ user }) {
  const [bundleSelected, setBundleSelected] = useState()
  const [showTab, setShowTab] = useState(false)

  const selectBundle = numberOfMeals => {
    setBundleSelected(numberOfMeals)
    setShowTab(true)
  }

  return (
    <div className="Home">
      <section className="choose-bundle">
        <h2 className="section-title">CHOOSE A BUNDLE</h2>
        <div className="Bundles">
          <Bundle title="2-Meal Bundle" selectBundle={selectBundle} numberOfMeals={2} />
          <Bundle title="3-Meal Bundle" selectBundle={selectBundle} numberOfMeals={3} />
          <Bundle title="4-Meal Bundle" selectBundle={selectBundle} numberOfMeals={4} />
        </div>
      </section>
      <section className="choose-meals">
        <h2 id="choose-meals" className="section-title">CHOOSE YOUR MEALS</h2>
        <Recipes user={user} bundleSelected={bundleSelected} showTab={showTab} setShowTab={setShowTab} />
      </section>
    </div>
  )
}