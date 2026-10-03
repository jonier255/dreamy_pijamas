import { WHATSAPP_NUMBER } from "@/lib/site-config";
import { BrandLogo } from "@/components/ui/brand-logo";

const footerGroups = [
  {
    title: "Explora",
    links: [
      ["Pijamas", "#coleccion"],
      ["Accesorios", "#catalogo"],
      ["Regalos", "#catalogo"],
    ],
  },
  {
    title: "Ayuda",
    links: [
      ["Preguntas frecuentes", "https://wa.me/" + WHATSAPP_NUMBER],
      ["Envíos y cambios", "https://wa.me/" + WHATSAPP_NUMBER],
      ["Contáctanos", "https://wa.me/" + WHATSAPP_NUMBER],
    ],
  },
  {
    title: "Síguenos",
    links: [
      ["Instagram ↗", "#inicio"],
      ["TikTok ↗", "#inicio"],
      ["WhatsApp ↗", "https://wa.me/" + WHATSAPP_NUMBER],
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <BrandLogo />
        <p>Tu lugar favorito para<br />soñar despierta.</p>
      </div>
      {footerGroups.map((group) => (
        <div className="footer-column" key={group.title}>
          <h3>{group.title}</h3>
          {group.links.map(([label, href]) => (
            <a href={href} key={label}>{label}</a>
          ))}
        </div>
      ))}
      <div className="footer-bottom">
        <span>© 2024 Dreamy Pijamas</span>
        <span>Hecho para dormir bonito <i>♡</i></span>
      </div>
    </footer>
  );
}
