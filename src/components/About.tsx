import { restaurantData } from "@/data/restaurant";

export default function About() {
  return (
    <section
  id="about"
  className="py-20 px-6 max-w-6xl mx-auto">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-6">
          Nuestra Historia
        </h2>

        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          {restaurantData.about}
        </p>
      </div>
    </section>
  );
}