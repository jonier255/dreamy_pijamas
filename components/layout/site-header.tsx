"use client";

import { WHATSAPP_NUMBER } from "@/lib/site-config";

type SiteHeaderProps = {
  menuOpen: boolean;
  onMenuToggle: () => void;
  onNavigate: () => void;
};

const navigation = [
  { label: "Favoritas", href: "#coleccion" },
  { label: "Catálogo", href: "#catalogo" },
  { label: "Cómo comprar", href: "#como-comprar" },
];

export function SiteHeader({
  menuOpen,
  onMenuToggle,
  onNavigate,
}: SiteHeaderProps) {
  return (
    <>
      <div className="topbar">
        <p>Envíos gratis por compras superiores a $150.000 · Hecho con amor ♡</p>
      </div>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Dreamy Pijamas, inicio">
          <span className="brand-star">✦</span>
          <span>
            <strong>dreamy</strong>
            <em>pijamas</em>
          </span>
        </a>
        <button
          className="menu-button"
          type="button"
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
          onClick={onMenuToggle}
        >
          <span />
          <span />
        </button>
        <nav
          className={menuOpen ? "main-nav is-open" : "main-nav"}
          aria-label="Navegación principal"
        >
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={onNavigate}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <a
            className="header-cta"
            href={"https://wa.me/" + WHATSAPP_NUMBER}
            target="_blank"
            rel="noreferrer"
          >
            Comprar por WhatsApp <span>↗</span>
          </a>
        </div>
      </header>
    </>
  );
}
