import React, { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!title.trim()) newErrors.title = "Title is required";
    if (!ingredients.trim()) newErrors.ingredients = "Ingredients are required";
    else if (ingredients.split(",").length < 2)
      newErrors.ingredients = "Enter at least 2 ingredients separated by commas";
    if (!steps.trim()) newErrors.steps = "Preparation steps are required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const recipeData = { title, ingredients: ingredients.split(","), steps };
      console.log("New Recipe Submitted:", recipeData);
      setTitle("");
      setIngredients("");
      setSteps("");
      alert("Recipe added successfully!");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg"
    >
      <h2 className="text-2xl font-semibold mb-4">Add New Recipe</h2>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Recipe Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={`w-full p-2 border rounded ${
            errors.title ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Ingredients (comma separated)</label>
        <textarea
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className={`w-full p-2 border rounded ${
            errors.ingredients ? "border-red-500" : "border-gray-300"
          }`}
          rows="3"
        ></textarea>
        {errors.ingredients && (
          <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Preparation Steps</label>
        <textarea
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          className={`w-full p-2 border rounded ${
            errors.steps ? "border-red-500" : "border-gray-300"
          }`}
          rows="5"
        ></textarea>
        {errors.steps && <p className="text-red-500 text-sm mt-1">{errors.steps}</p>}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
      >
        Add Recipe
      </button>
    </form>
  );
}

export default AddRecipeForm;