import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const recipes = useRecipeStore((state) => state.recipes);
  
  // Display filtered recipes if search is active, otherwise show all recipes
  const displayRecipes = filteredRecipes.length > 0 || useRecipeStore((state) => state.searchTerm)
    ? filteredRecipes
    : recipes;

  return (
    <div>
      <h2>Recipes</h2>
      {displayRecipes.length === 0 && <p>No recipes found.</p>}
      {displayRecipes.map((recipe) => (
        <div
          key={recipe.id}
          style={{
            borderBottom: '1px solid #ccc',
            marginBottom: '12px',
            paddingBottom: '12px',
          }}
        >
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <Link to={`/recipe/${recipe.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
