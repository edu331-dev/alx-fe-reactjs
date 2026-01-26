import { useState } from 'react';
import { useRecipeStore } from './recipeStore';

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title || !description) return;
    addRecipe({ id: Date.now(), title, description });
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <h2>Add Recipe</h2>
      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Recipe Title"
        style={{ padding: '8px', width: '100%', marginBottom: '8px' }}
      />
      <textarea
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        placeholder="Recipe Description"
        style={{ padding: '8px', width: '100%', marginBottom: '8px', minHeight: '80px' }}
      />
      <button type="submit" style={{ padding: '8px 16px' }}>Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm;
