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
  }