export default function RecipeCard({ title, description, image, author }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
      <img
        src={image}
        alt={title}
        className="h-48 w-full object-cover"
      />

      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          {title}
        </h2>

        <p className="text-gray-600 text-sm mb-3">
          {description}
        </p>

        <p className="text-xs text-gray-500">
          By {author}
        </p>
      </div>
    </div>
  );
}