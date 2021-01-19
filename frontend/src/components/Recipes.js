import RecipeList from './RecipeList'
import Tab from './Tab'
import { useState, useEffect } from 'react'
const axios = require('axios')

export default function Recipes({ user, bundleSelected }) {
  const [allMeals, setAllMeals] = useState([])
  const [selectedMeals, setSelectedMeals] = useState([])
  const [showTab, setShowTab] = useState(false)
  const [requestObject, setRequestObject] = useState({
    action: '',
  })

  useEffect(() => {
    axios.get('/recipes')
      .then(response => {
        console.log(response.data)
        setAllMeals(response.data)
      })
      .catch(err => {
        console.log(err)
      })
    
      // axios.get(`/users/${user.id}`)
      //   .then(response => {
      //     console.log(response.data)
      //   })
      //   .catch(err => {
      //     console.log(err)
      //   })
  }, [])

  const selectMeal = meal => {
    setSelectedMeals(prev => [...prev, meal])
    setShowTab(true)

    // axios.patch('/users/2', {
    //   action: "ADD_ITEM",
    //   item: {
    //     name: "hello",
    //     price: 2.99,
    //     type: "breakfast"
    //   }
    // })
    // // TO DO: handle responses properly
    //   .then(response => {
    //     console.log(response)
    //   })
    //   .catch(err => {
    //     console.log(err)
    //   })
  }

  const deselectMeal = targetIndex => {
    setSelectedMeals(prev => prev.filter((meal, index) => index !== targetIndex))
    // axios.patch('/users/2', {
    //   action: "REMOVE_ITEM",
    //   itemIndex: `cart - ${targetIndex}`
    // })
    // // TO DO: handle responses properly
    //   .then(response => {
    //     console.log(response)
    //   })
    //   .catch(err => {
    //     console.log(err)
    //   })
  }

  const updateUserCart = () => {    
    axios.put(`/users/${user._id}`, {
      ...user,
      cart: selectedMeals
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
      {showTab && <Tab selectedMeals={selectedMeals} deselectMeal={deselectMeal} bundleSelected={bundleSelected} setShowTab={setShowTab} updateUserCart={updateUserCart} />}
    </div>
  )
}