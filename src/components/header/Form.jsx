import React from 'react'
import { FormContainer, FoodInput, Button, Select } from './HeaderStyle'

const Form = ({meal, setMeal, query, setQuery, mealTypes, getData}) => {

    const handleChange =(e)=>{
        setMeal(e.target.value)
    }
    
  return (
    <FormContainer>
        <FoodInput type="text" value={query} onChange={(e)=> setQuery(e.target.value)} />
        <Button onClick={getData} >Search</Button>
        <Select name="mealTypes" id="mealTypes" onChange={handleChange}>
            {mealTypes.map((item,index) => (
                <option key={index} value={item.toLowerCase()}>{item}</option>
            ))}
        </Select>
    </FormContainer>
  )
}

export default Form