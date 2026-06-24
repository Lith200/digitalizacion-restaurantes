import { RestaurantData } from "@/types/restaurant";

export const restaurantData: RestaurantData = {
  name: "Taquería El Patrón",

  slogan: "Los mejores tacos de la ciudad",

  whatsapp: "17299318508",

  whatsappMessage:
    "Hola, me gustaría obtener información sobre el restaurante.",

  phone: "+52 444 123 4567",

  email: "contacto@taqueria.com",

  address: "San Luis Potosí, México",

  about:
    "Somos una taquería familiar especializada en tacos tradicionales preparados con ingredientes frescos y recetas auténticas.",

  schedule: {
    days: "Lunes - Domingo",
    hours: "9:00 AM - 11:00 PM",
  },

  featuredMenu: [
    {
      name: "Taco al Pastor",
      description: "Carne marinada con piña y especias.",
      price: "$25",
    },
    {
      name: "Taco de Bistec",
      description: "Carne de res preparada al momento.",
      price: "$30",
    },
    {
      name: "Gringa Especial",
      description: "Queso fundido con carne al pastor.",
      price: "$55",
    },
  ],

  gallery: [
    "/gallery/food1.jpg",
    "/gallery/food2.jpg",
    "/gallery/food3.jpg",
    "/gallery/food4.jpg",
    "/gallery/food5.jpg",
    "/gallery/food6.jpg",
  ],

  socials: {
    facebook: "",
    instagram: "",
    tiktok: "",
  },
};