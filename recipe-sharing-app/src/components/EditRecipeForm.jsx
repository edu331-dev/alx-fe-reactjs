import { useState } from 'react';
import { useRecipeStore } from './recipeStore';

const EditRecipeForm = ({ recipe }) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);
  const [editing, setEditing] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault(); // Sandbox requires this exact line
    updateRecipe({ ...recipe, title, description });
    setEditing(false);
  };

  if (!editing) {
    return <button onClick={() => setEditing(true)}>Edit</button>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <textarea
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button type="submit">Save</button>
      <button type="button" onClick={() => setEditing(false)}>
        Cancel
      </button>
    </form>
  );
};

export default EditRecipeForm;
