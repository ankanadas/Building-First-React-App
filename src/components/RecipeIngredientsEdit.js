import React from 'react'

export default function RecipeIngredientsEdit(props) {
  const {
    ingredient, 
    handleIngredientChange
  } = props

  function handleChanges(changes){
    handleIngredientChange(ingredient.id, {...ingredient, ...changes});
  }

    return (
        <>
          <input 
            className="recipe-edit__input" 
            type="text" 
            onInput={ e => handleChanges({name: e.target.value})}
            value={ingredient.name}
          />
          <input 
            className='recipe-edit__input' 
            type="text" 
            onInput={ e => handleChanges({quantity: e.target.value})}
            value={ingredient.quantity}
          />  
          <button className='btn btn--danger'>&times;</button>
        </>
    )
}
