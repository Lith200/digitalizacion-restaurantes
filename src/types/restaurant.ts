export interface MenuItem {
  name: string;
  description: string;
  price: string;
}

export interface RestaurantData {
  name: string;
  slogan: string;

  whatsapp: string;
  whatsappMessage: string;

  phone: string;
  email: string;

  address: string;

  about: string;

  schedule: {
    days: string;
    hours: string;
  };

  featuredMenu: MenuItem[];

  gallery: string[];

  socials: {
    facebook: string; // 👈 Aquí va "string;" no el link
    instagram: string;
    tiktok: string;
  };
}