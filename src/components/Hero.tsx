import Image from "next/image";
import { restaurantData } from "@/data/restaurant";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center">
      
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
        
        <h1 className="text-5xl md:text-7xl font-bold">
          {restaurantData.name}
        </h1>

        <p className="text-xl md:text-2xl mt-6">
          {restaurantData.slogan}
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">
          
          <button className="px-8 py-4 bg-green-600 rounded-xl font-semibold hover:scale-105 transition">
            WhatsApp
          </button>

          <button className="px-8 py-4 border border-white rounded-xl font-semibold hover:bg-white hover:text-black transition">
            Ver Menú
          </button>

        </div>

      </div>

    </section>
  );
}