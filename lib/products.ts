import { WHATSAPP_NUMBER } from "./site-config";

export type Category = "Todos" | "Pijamas" | "Accesorios" | "Regalos";

export type Product = {
  name: string;
  category: Exclude<Category, "Todos">;
  price: string;
  tag: string;
  image: string;
  description: string;
};

export const products: Product[] = [
  {
    name: "Pijama Dreamy · Modelo 1",
    category: "Pijamas",
    price: "$30.000",
    tag: "Nueva",
    image:
      "https://res.cloudinary.com/duyneiyve/image/upload/v1792012953/pijama_1_jrd6qu.jpg",
    description: "Pijama de colección · Consulta tallas por WhatsApp",
  },
  {
    name: "Pijama Dreamy · Modelo 4",
    category: "Pijamas",
    price: "$30.000",
    tag: "Disponible",
    image:
      "https://res.cloudinary.com/duyneiyve/image/upload/v1792012954/pijama_4_gmixtl.jpg",
    description: "Pijama de colección · Consulta tallas por WhatsApp",
  },
  {
    name: "Pijama Dreamy · Modelo 3",
    category: "Pijamas",
    price: "$55.000",
    tag: "Especial",
    image:
      "https://res.cloudinary.com/duyneiyve/image/upload/v1792012954/pijama_3_undshp.jpg",
    description: "Pijama de colección · Consulta tallas por WhatsApp",
  },
  {
    name: "Pijama Dreamy · Modelo 2",
    category: "Pijamas",
    price: "$40.000",
    tag: "Nueva",
    image:
      "https://res.cloudinary.com/duyneiyve/image/upload/v1792012953/pijama_2_sb1hdy.jpg",
    description: "Pijama de colección · Consulta tallas por WhatsApp",
  },
   {
    name: "Pijama Dreamy · Modelo 5",
    category: "Pijamas",
    price: "$40.000",
    tag: "Nueva",
    image:
      "https://res.cloudinary.com/duyneiyve/image/upload/v1792012953/pijama_8_ilwn5c.jpg",
    description: "Pijama de colección · Consulta tallas por WhatsApp",
  },

   {
    name: "Pijama Dreamy · Modelo 6",
    category: "Pijamas",
    price: "$40.000",
    tag: "Nueva",
    image:
      "https://res.cloudinary.com/duyneiyve/image/upload/v1792012954/pijama_5_xsfvkn.jpg",
    description: "Pijama de colección · Consulta tallas por WhatsApp",
  },
   {
    name: "Pijama Dreamy · Modelo 7",
    category: "Pijamas",
    price: "$40.000",
    tag: "Nueva",
    image:
      "https://res.cloudinary.com/duyneiyve/image/upload/v1792012953/pijama_7_xuhfzb.jpg",
    description: "Pijama de colección · Consulta tallas por WhatsApp",
  },
   {
    name: "Pijama Dreamy · Modelo 8",
    category: "Pijamas",
    price: "$40.000",
    tag: "Nueva",
    image:
      "https://res.cloudinary.com/duyneiyve/image/upload/v1792012953/pijama_6_ujkhnj.jpg",
    description: "Pijama de colección · Consulta tallas por WhatsApp",
  },
  {
    name: "Antifaz Moonlight",
    category: "Accesorios",
    price: "$29.900",
    tag: "Pequeño lujo",
    image:
      "https://images.unsplash.com/photo-1591343395082-e120087004b4?auto=format&fit=crop&w=900&q=85",
    description: "Satén acolchado · Varios colores",
  },
  {
    name: "Medias Dreamy",
    category: "Accesorios",
    price: "$19.900",
    tag: "Cozy",
    image:
      "https://images.unsplash.com/photo-1582966772680-860e372bb558?auto=format&fit=crop&w=900&q=85",
    description: "Tejido suave · Talla única",
  },
  {
    name: "Kit Buenas Noches",
    category: "Regalos",
    price: "$119.900",
    tag: "Para regalar",
    image:
      "https://images.unsplash.com/photo-1600369671236-e74521d4b7ad?auto=format&fit=crop&w=900&q=85",
    description: "Pijama + antifaz + tarjeta",
  },
];

export const benefits = [
  {
    icon: "✦",
    title: "Suavidad que abraza",
    text: "Texturas pensadas para acompañar tus noches.",
  },
  {
    icon: "♡",
    title: "Envíos a todo el país",
    text: "Recibe tu pedido en la puerta de tu casa.",
  },
  {
    icon: "✿",
    title: "Detalles con intención",
    text: "Empaques bonitos para regalar o regalarte.",
  },
];

export function getWhatsAppUrl(productName: string) {
  const message = encodeURIComponent(
    "Hola Dreamy Pijamas ✨ Me interesa comprar: " + productName,
  );

  return "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + message;
}
