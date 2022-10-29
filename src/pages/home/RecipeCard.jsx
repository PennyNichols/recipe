import React from 'react'
import { Button, RecipeCard as Card, RecipeHeader, RecipeImage } from './HomeStyles'
import defaultImage from '../../assets/default-image.jpg'

const RecipeCard = ({recipe}) => {
  
  return (
    <Card>
      <RecipeHeader>
        {recipe?.label}
      </RecipeHeader>
      <RecipeImage src={recipe?.image || defaultImage} alt='recipe' />
      <Button>View More</Button>
    </Card>
  )
}

export default RecipeCard