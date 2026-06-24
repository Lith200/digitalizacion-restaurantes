import { restaurantData } from "@/data/restaurant";

export default function FeaturedMenu() {

  const dishes = restaurantData.featuredMenu;

  return (
    <section
      id="menu"
      className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12">
        Menú Destacado
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {dishes.map((dish) => (
          <div
            key={dish.name}
            className="
          bg-white
          rounded-2xl
          p-6
          shadow-lg
          hover:scale-105
          transition
          "
          >
            <h3 className="text-2xl font-bold text-black">
              {dish.name}
            </h3>

            <p className="mt-2 text-gray-500">
              {dish.description}
            </p>

            <p className="mt-4 text-2xl font-bold text-green-600">
              {dish.price}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}