import { restaurantData } from "@/data/restaurant";

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${restaurantData.whatsapp}?text=${encodeURIComponent(
        restaurantData.whatsappMessage
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      className="
      fixed
      bottom-4
      right-4
      bg-green-500
      text-white
      font-semibold
      text-sm
      px-4
      py-2
      rounded-full
      shadow-lg
      z-50
      hover:scale-110
      transition
      "
    >
    WhatsApp
    </a >
  );
}