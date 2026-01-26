import { useState } from 'react';
import { useRecipeStore } from './recipeStore';

const EditRecipeForm = ({ recipe }) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateRecipe({
      id: recipe.id,
      title: title.trim(),
      description: description.trim(),
    });
    setIsEditing(false);
  };

  if (!isEditing) {
    return (
      <button
        onClick={() => setIsEditing(true)}
        style={{
          padding: '8px 16px',
          marginRight: '10px',
          backgroundColor: '#28a745',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Edit Recipe
      </button>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
      <div style={{ marginBottom: '10px' }}>
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
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
          padding: '8px 16px',
          marginRight: '10px',
          backgroundColor: '#28a745',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Save Changes
      </button>
      <button
        type="button"
        onClick={() => setIsEditing(false)}
        style={{
          padding: '8px 16px',
          backgroundColor: '#6c757d',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Cancel
      </button>
    </form>
  );
};

export default EditRecipeForm;