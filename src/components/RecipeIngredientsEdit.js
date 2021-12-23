import React from 'react'

export default function RecipeIngredientsEdit({ingredient}) {
    console.log(ingredient)
    return (
        <>
          <input 
            className="recipe-edit__input" 
            type="text" 
            value={ingredient.name}
          />
          <input 
            className='recipe-edit__input' 
            type="text" 
            value={ingredient.quantity}
          />  
          <button className='btn btn--danger'>&times;</button>
        </>
    )
}
