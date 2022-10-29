import React from 'react'
import Form from './Form'
import { HeaderContainer, MainHeader } from './HeaderStyle'

const Header = ({meal, setMeal, query, setQuery, mealTypes, getData}) => {
  return (
    <HeaderContainer>
      <MainHeader>Food App</MainHeader>
      <Form mealTypes={mealTypes} getData={getData} meal={meal} setMeal={setMeal} query={query} setQuery={setQuery}/>
    </HeaderContainer>
  )
}

export default Header