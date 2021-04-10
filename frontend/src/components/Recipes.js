import RecipeList from './RecipeList'
import Tab from './Tab'
import { useState, useEffect } from 'react'
const axios = require('axios')

export default function Recipes({ user, bundleSelected, showTab, setShowTab, pricePerMeal }) {
  const [allMeals, setAllMeals] = useState([])
  const [selectedMeals, setSelectedMeals] = useState([])

  useEffect(() => {
    axios.get('/recipes')
      .then(response => {
        console.log(response.data)
        setAllMeals(response.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const selectMeal = meal => {
    setSelectedMeals(prev => [...prev, meal])
    setShowTab(true)
  }

  const deselectMeal = targetIndex => {
    setSelectedMeals(prev => prev.filter((meal, index) => index !== targetIndex))
  }

  const updateUserCart = () => {    
    axios.put(`/users/${user._id}`, {
      ...user,
      cart: {
        bundleSelected: bundleSelected,
        pricePerMeal: pricePerMeal,
        items: selectedMeals
      }
    })
      .then(response => {
        console.log(response)
      })
      .catch(err => {
        console.log(err)
      })
  }

  // what happens when you choose a 2-bundle and try to add a third meal?

  return (
    <div className="Recipes">
      <RecipeList allMeals={allMeals} selectMeal={selectMeal} />
      {showTab && <Tab selectedMeals={selectedMeals} deselectMeal={deselectMeal} bundleSelected={bundleSelected} setShowTab={setShowTab} updateUserCart={updateUserCart} pricePerMeal={pricePerMeal} />}
    </div>
  )
}