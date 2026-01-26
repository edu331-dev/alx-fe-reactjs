import { useRecipeStore } from './recipeStore';
import { useParams, Link } from 'react-router-dom';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === parseInt(id))
  );

  if (!recipe) {
    return (
      <div>
        <h2>Recipe not found</h2>
        <Link to="/">Back to recipes</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <div style={{ marginTop: '20px' }}>
        <EditRecipeForm recipe={recipe} />
        <DeleteRecipeButton recipeId={recipe.id} />
      </div>
      <div style={{ marginTop: '20px' }}>
        <Link to="/">← Back to recipes</Link>
      </div>
    </div>
  );
};

export default RecipeDetails;