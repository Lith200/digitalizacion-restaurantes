import { restaurantData } from "@/data/restaurant";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold">
        {restaurantData.name}
      </h1>

      <p className="text-xl mt-4">
        {restaurantData.slogan}
      </p>

      <button className="mt-6 px-6 py-3 bg-black text-white rounded-lg">
         WhatsApp
      </button>
    </section>
  );
}