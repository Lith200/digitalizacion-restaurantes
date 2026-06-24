import Image from "next/image";
import { restaurantData } from "@/data/restaurant";

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] md:min-h-screen flex items-center justify-center">

      {/* Imagen de fondo */}
      <Image
        src="/hero.jpg"
        alt="Restaurant Hero"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Contenido */}
      <div className="relative z-10 text-center text-white px-6">

        <h1 className="text-4xl md:text-7xl font-bold">
          {restaurantData.name}
        </h1>

        <p className="text-lg md:text-2xl mt-4">
          {restaurantData.slogan}
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">

          <a
            href={`https://wa.me/${restaurantData.whatsapp}?text=${encodeURIComponent(
              restaurantData.whatsappMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 md:px-8 md:py-4 bg-green-600 rounded-xl font-semibold hover:scale-105 transition"          >
            WhatsApp
          </a>

          <a
            href="#menu"
            className="px-6 py-3 md:px-8 md:py-4 border border-white rounded-xl font-semibold hover:bg-white hover:text-black transition">
            Ver Menú
          </a>

        </div>

      </div>

    </section>
  );
}