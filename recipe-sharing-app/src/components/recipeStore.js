import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],

  // Recipe CRUD actions
  addRecipe: (newRecipe) =>
    set((state) => {
      const updatedRecipes = [...state.recipes, newRecipe];
      return {
        recipes: updatedRecipes,
        filteredRecipes: state.searchTerm
          ? updatedRecipes.filter((recipe) =>
              recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
            )
          : updatedRecipes,
      };
    }),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((r) => r.id !== id),
      filteredRecipes: state.filteredRecipes.filter((r) => r.id !== id),
    })),

  updateRecipe: (updatedRecipe) =>
    set((state) => {
      const updatedRecipes = state.recipes.map((r) =>
        r.id === updatedRecipe.id ? updatedRecipe : r
      );
      return {
        recipes: updatedRecipes,
        filteredRecipes: state.searchTerm
          ? updatedRecipes.filter((recipe) =>
              recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
            )
          : updatedRecipes,
      };
    }),

  // Search and filter actions
  setSearchTerm: (term) =>
    set((state) => ({
      searchTerm: term,
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(term.toLowerCase())
      ),
    })),

  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),

  setRecipes: (recipes) =>
    set({
      recipes,
      filteredRecipes: recipes,
    }),
}));
