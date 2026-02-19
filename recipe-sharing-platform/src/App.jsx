import RecipeCard from "./components/RecipeCard";

export default function App() {
  const recipes = [
    {
      id: 1,
      title: "Spaghetti Bolognese",
      description: "Rich tomato sauce with minced beef and herbs.",
      image: "https://source.unsplash.com/600x400/?spaghetti",
      author: "Edwin",
    },
    {
      id: 2,
      title: "Chicken Curry",
      description: "Spicy coconut curry with tender chicken pieces.",
      image: "https://source.unsplash.com/600x400/?chicken-curry",
      author: "Grace",
    },
    {
      id: 3,
      title: "Avocado Toast",
      description: "Toasted bread topped with fresh avocado and spices.",
      image: "https://source.unsplash.com/600x400/?avocado-toast",
      author: "Brian",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-green-600 text-white py-6 shadow">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold">
            Recipe Sharing Platform
          </h1>
          <p className="text-sm mt-1">
            Browse and share your favorite recipes
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Latest Recipes
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {recipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              title={recipe.title}
              description={recipe.description}
              image={recipe.image}
              author={recipe.author}
            />
          ))}
        </div>
      </main>
    </div>
  );
}