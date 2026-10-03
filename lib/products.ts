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
    name: "Pijama Cherry Bloom",
    category: "Pijamas",
    price: "$89.900",
    tag: "Más vendida",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=900&q=85",
    description: "Satén ligero · Tallas S a XL",
  },
  {
    name: "Set Cozy Cloud",
    category: "Pijamas",
    price: "$79.900",
    tag: "Nuevo",
    image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=900&q=85",
    description: "Algodón suave · Tallas S a XXL",
  },
  {
    name: "Pijama Soft Blush",
    category: "Pijamas",
    price: "$84.900",
    tag: "Favorita",
    image: "https://images.unsplash.com/photo-1583845112203-454c70c84f7b?auto=format&fit=crop&w=900&q=85",
    description: "Modal premium · Tallas S a L",
  },
  {
    name: "Antifaz Moonlight",
    category: "Accesorios",
    price: "$29.900",
    tag: "Pequeño lujo",
    image: "https://images.unsplash.com/photo-1591343395082-e120087004b4?auto=format&fit=crop&w=900&q=85",
    description: "Satén acolchado · Varios colores",
  },
  {
    name: "Medias Dreamy",
    category: "Accesorios",
    price: "$19.900",
    tag: "Cozy",
    image: "https://images.unsplash.com/photo-1582966772680-860e372bb558?auto=format&fit=crop&w=900&q=85",
    description: "Tejido suave · Talla única",
  },
  {
    name: "Kit Buenas Noches",
    category: "Regalos",
    price: "$119.900",
    tag: "Para regalar",
    image: "https://images.unsplash.com/photo-1600369671236-e74521d4b7ad?auto=format&fit=crop&w=900&q=85",
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
import { WHATSAPP_NUMBER } from "./site-config";

