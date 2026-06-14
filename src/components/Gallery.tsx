export default function Gallery() {
    const images = [
      "🍔",
      "🍕",
      "🌮",
      "🥗",
      "🍝",
      "🍰"
    ];
  
    return (
      <section
        id="gallery"
        className="py-20 px-6 max-w-6xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center mb-12">
          Galería
        </h2>
  
        <div className="grid md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="h-56 rounded-xl border flex items-center justify-center text-7xl shadow-sm"
            >
              {image}
            </div>
          ))}
        </div>
      </section>
    );
  }