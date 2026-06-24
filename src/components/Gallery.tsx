export default function Gallery() {
  const images = [
    "/Quesadillas.jpg",
    "/Gringa_especial.jpg",
    "/Taco_pastor.jpg",
    "/taco_bistek.jpg",
    "/Salsas.jpg",
    "/Restaurante.jpg",
  ];

  return (
    <section id="gallery" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12">
        Galería
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="
          h-56
          overflow-hidden
          rounded-2xl
          shadow-lg
          hover:scale-105
          transition
          duration-300
          "
          >
            <img
              src={image}
              alt={`platillo-${index}`}
              className="
              w-full
              h-full
              object-cover
              hover:scale-110
              transition
              duration-500
              "
            />
          </div>
        ))}
      </div>
    </section>
  );
}