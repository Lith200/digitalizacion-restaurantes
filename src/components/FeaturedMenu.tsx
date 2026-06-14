export default function FeaturedMenu() {
    const dishes = [
      {
        name: "Hamburguesa Especial",
        price: "$189",
        description: "Carne premium con queso y vegetales frescos."
      },
      {
        name: "Pizza Artesanal",
        price: "$249",
        description: "Preparada al horno con ingredientes frescos."
      },
      {
        name: "Tacos Gourmet",
        price: "$159",
        description: "Tortillas artesanales y salsa de la casa."
      }
    ];
  
    return (
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Menú Destacado
        </h2>
  
        <div className="grid md:grid-cols-3 gap-6">
          {dishes.map((dish) => (
            <div
              key={dish.name}
              className="border rounded-xl p-6 shadow-sm"
            >
              <h3 className="text-2xl font-semibold">
                {dish.name}
              </h3>
  
              <p className="mt-2 text-gray-600">
                {dish.description}
              </p>
  
              <p className="mt-4 text-xl font-bold">
                {dish.price}
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  }