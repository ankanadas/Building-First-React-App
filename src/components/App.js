import RecipeList from "./RecipeList";
import '../css/app.css'
import React, {useState} from "react";
import uuidv4 from 'uuid/v4'

function App() {
  const [recipes, setRecipes] = useState(sampleRecipes);

  function handleRecipeAdd(){
    const newRecipe = {
      id: uuidv4(),
      name: 'New',
      servings: 1,
      cookTime: '1:00',
      instructions: 'Instr.',
      ingredients: [
        {
          id: uuidv4(),
          name: 'Name',
          quantity: '1 tbsp'
        }
      ]
    }

    setRecipes([...recipes, newRecipe])
  }

  function handleRecipeDelete(id){
    setRecipes(recipes.filter(recipe => recipe.id !== id))
  }

  return (
    <RecipeList 
    recipes = {recipes}
    handleRecipeAdd = {handleRecipeAdd}
    handleRecipeDelete = {handleRecipeDelete}
    />
  );
}
const sampleRecipes = [
  {
    id: 1,
    name: 'Veggie Pizza',
    servings: 6,
    cookTime: '1:45',
    instructions: '1.Put veggies on pizza\n2.Put pizza in oven\n3.Eat veggie pizza',
    ingredients: [
      {
        id: 1,
        name: 'Cauliflower',
        quantity: '3 pounds'
      },
      {
        id: 2,
        name: 'Spinach',
        quantity: '1 pounds'
      },
    ]
  },
  {
    id: 2,
    name: 'Cheese Pizza',
    servings: 8,
    cookTime: '2:30',
    instructions: '1.Put cheese on pizza\n2.Put pizza in oven\n3.Eat cheese pizza',
    ingredients: [
      {
        id: 1,
        name: 'Mozarella',
        quantity: '2 scoop'
      },
      {
        id: 2,
        name: 'Parmesan',
        quantity: '1 scoop'
      },
    ]
  }
]
export default App;
