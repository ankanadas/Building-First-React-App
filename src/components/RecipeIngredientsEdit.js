import React from 'react'

export default function RecipeIngredientsEdit(props) {
  const {
    ingredient, 
    handleIngredientChange,
    handleIngredientDelete
  } = props

  function handleChanges(changes){
    handleIngredientChange(ingredient.id, {...ingredient, ...changes});
  }

    return (
        <>
          <input 
            className="recipe-edit__input" 
            type="text" 
            onChange={ e => handleChanges({name: e.target.value})}
            value={ingredient.name}
          />
          <input 
            className='recipe-edit__input' 
            type="text" 
            onChange={ e => handleChanges({quantity: e.target.value})}
            value={ingredient.quantity}
          />  
          <button 
            className='btn btn--danger'
            onClick={() => handleIngredientDelete(ingredient.id)}
          >
            &times;
          </button>
        </>
    )
}
