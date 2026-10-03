import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Dreamy Pijamas",
    short_name: "Dreamy",
    description:
      "Pijamas suaves, accesorios y regalos para dormir bonito.",
    start_url: "/",
    display: "standalone",
    background_color: "#fbf9f7",
    theme_color: "#f8dfe2",
    lang: "es-CO",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
