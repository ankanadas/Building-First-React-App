import RecipeList from "./RecipeList";

function App() {
  return (
    <RecipeList recipes = {sampleRecipes}/>
  );
}
const sampleRecipes = [
  {
    id: 1,
    name: 'Veggie Pizza',
    servings: 6,
    cookTime: '1:45',
    instructions: '1.Put veggies on pizza\n2.Put pizza in oven\n3.Eat veggie pizza'
  },
  {
    id: 2,
    name: 'Cheese Pizza',
    servings: 8,
    cookTime: '2:30',
    instructions: '1.Put cheese on pizza\n2.Put pizza in oven\n3.Eat cheese pizza'
  }
]
export default App;
