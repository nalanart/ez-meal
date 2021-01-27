import './Tab.css'
import { useState } from 'react'

export default function Tab({ selectedMeals, deselectMeal, bundleSelected, setShowTab, updateUserCart }) {
  return selectedMeals.length > 0 ? (
    <div className="Tab">
      <div className="Tab__heading">
        <h4>This week's plan</h4>
        <button className="btn" aria-label="Close" onClick={() => setShowTab(false)}>x</button>
      </div>
      <b>{bundleSelected}-Meal Bundle</b>
      <ul className="meal__items">
        {selectedMeals.map((meal, index) => (
          <div className="meal__item row align-items-center">
            <li key={meal._id} className="col-5">{meal.name}</li>
            <div className="col-3 meal__item-qty">
              <label for="meal__item-qty">Quantity&nbsp;</label>
              <input id="meal__item-qty" type="number" min="1" placeholder="1"></input>
            </div>
            {/* <button type="button" className="btn" aria-label="Close" onClick={() => deselectMeal(index)}>Remove</button> */}
            <u className="col" onClick={() => deselectMeal(index)}>Remove</u>
          </div>
        ))}
      </ul>
      <a className="btn btn-checkout" href="/checkout" onClick={updateUserCart}>Proceed to checkout</a>
    </div>
  ) : (
    <div className="Tab">
      <div className="Tab__heading">
        <h4>This week's plan</h4>
        <button className="btn" aria-label="Close" onClick={() => setShowTab(false)}>x</button>
      </div>
      <b>{bundleSelected}-Meal Bundle</b>
      <i>You have not selected any meals yet.</i>
    </div>
  )
}