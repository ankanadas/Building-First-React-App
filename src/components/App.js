import RecipeList from "./RecipeList";
import '../css/app.css'
import React, {useState, useEffect} from "react";
import uuidv4 from 'uuid/v4'
import RecipeEdit from "./RecipeEdit";

export const RecipeContext = React.createContext()
const LOCAL_STORAGE_KEY =  'cookingWithReact.recipes'

function App() {
  const [selectedRecipeId, setSelectedRecipeId] = useState();
  const [recipes, setRecipes] = useState(sampleRecipes);
  const selectedRecipe = recipes.find(recipe => recipe.id === selectedRecipeId);

  useEffect(() => {
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
    if(recipeJSON != null){
      setRecipes(JSON.parse(recipeJSON));
    }
  },[])


  useEffect(() =>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes));
  }, [recipes])

  const recipeContextValue = {
    handleRecipeAdd,
    handleRecipeDelete,
    handleRecipeSelect,
    handleRecipeChange
  }

  function handleRecipeSelect(id){
    setSelectedRecipeId(id)
  }

  function handleRecipeAdd(){
    const newRecipe = {
      id: uuidv4(),
      name: '',
      servings: 1,
      cookTime: '',
      instructions: '',
      ingredients: [
        {
          id: uuidv4(),
          name: '',
          quantity: ''
        }
      ]
    }

    setSelectedRecipeId(newRecipe.id)
    setRecipes([...recipes, newRecipe])
  }

  function handleRecipeDelete(id){
    if(selectedRecipeId != null && selectedRecipeId === id) {
      setSelectedRecipeId(undefined)
    }
    setRecipes(recipes.filter(recipe => recipe.id !== id))
  }

  function handleRecipeChange(id, recipe) {
    const newRecipe = [...recipes];
    const index = newRecipe.findIndex(r => r.id === id);
    newRecipe[index] = recipe;
    setRecipes(newRecipe)
  }

  return (
    <RecipeContext.Provider value={recipeContextValue}>
      <RecipeList recipes = {recipes} />
      {selectedRecipe && <RecipeEdit recipe= {selectedRecipe} />}
    </RecipeContext.Provider>
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
