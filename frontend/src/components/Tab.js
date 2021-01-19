import './Tab.css'
import { useState } from 'react'

export default function Tab({ selectedMeals, deselectMeal, bundleSelected, setShowTab, updateUserCart }) {
  return selectedMeals.length > 0 ? (
    <div className="Tab">
      <div className="Tab__heading">
        You have selected the {bundleSelected}-Meal Bundle
        <button className="btn" aria-label="Close" onClick={() => setShowTab(false)}>x</button>
      </div>
      <ul>
        {selectedMeals.map((meal, index) => (
          <div className="meal__item">
            <li key={meal}>{meal.name}</li>
            <button type="button" className="btn" aria-label="Close" onClick={() => deselectMeal(index)}>x</button>
          </div>
        ))}
      </ul>
      <a className="btn btn-checkout" onClick={updateUserCart}>Proceed to checkout</a>
    </div>
  ) : (
    <div className="Tab">
      <div className="Tab__heading">
        You have selected the {bundleSelected}-Meal Bundle
        <button className="btn" aria-label="Close" onClick={() => setShowTab(false)}>x</button>
      </div>
      <i>You have not selected any meals yet.</i>
    </div>
  )
}