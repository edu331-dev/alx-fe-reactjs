import { useState } from 'react';
import { useRecipeStore } from './recipeStore';

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title.trim() || !description.trim()) return;
    
    addRecipe({
      id: Date.now(),
      title: title.trim(),
      description: description.trim(),
    });
    
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '30px' }}>
      <h2>Add New Recipe</h2>
      <div style={{ marginBottom: '10px' }}>
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Recipe Title"
          style={{
            width: '100%',
            padding: '8px',
            fontSize: '14px',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <textarea
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          placeholder="Recipe Description"
          rows="4"
          style={{
            width: '100%',
            padding: '8px',
            fontSize: '14px',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
        />
      </div>
      <button
        type="submit"
        style={{
          padding: '10px 20px',
          fontSize: '14px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Add Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;