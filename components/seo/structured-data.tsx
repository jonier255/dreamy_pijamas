import { products } from "../../lib/products";
import { SITE_CONFIG, SITE_URL } from "../../lib/site-config";

export function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "OnlineStore",
        "@id": SITE_URL + "/#store",
        name: SITE_CONFIG.name,
        url: SITE_URL,
        logo: SITE_URL + "/icon.svg",
        image: SITE_URL + "/opengraph-image",
        description: SITE_CONFIG.description,
        priceRange: "$$",
        areaServed: { "@type": "Country", name: SITE_CONFIG.location },
        sameAs: [],
      },
      {
        "@type": "WebSite",
        "@id": SITE_URL + "/#website",
        url: SITE_URL,
        name: SITE_CONFIG.name,
        description: SITE_CONFIG.description,
        publisher: { "@id": SITE_URL + "/#store" },
        inLanguage: "es-CO",
      },
      {
        "@type": "ItemList",
        name: "Pijamas y accesorios destacados",
        itemListElement: products.map((product, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: product.name,
          url: SITE_URL + "/#coleccion",
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
