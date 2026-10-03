import { Eyebrow } from "@/components/ui/eyebrow";

export function HeroSection() {
  return (
    <section className="hero-section" id="inicio">
      <div className="hero-copy">
        <Eyebrow withLines>colección nocturna 2024</Eyebrow>
        <h1>Pijamas para<br /><i>dormir bonito.</i></h1>
        <p className="hero-description">
          Pijamas suaves, detalles bonitos y todo lo que necesitas para
          convertir cada noche en tu momento favorito.
        </p>
        <a className="button button-dark" href="#coleccion">
          Ver la colección <span>↗</span>
        </a>
        <div className="hero-note">
          <span className="avatar-stack">
            <span>☻</span><span>✿</span><span>♡</span>
          </span>
          <span>Más de 2.000 soñadoras felices</span>
        </div>
      </div>
      <div className="hero-visual">
        <div className="hero-blob" />
        <div className="hero-image-frame">
          <img
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=90"
            alt="Habitación cálida y acogedora con textiles rosados"
          />
        </div>
        <div className="floating-note note-one">
          <span>☾</span><small>Duerme<br />bonito</small>
        </div>
        <div className="floating-note note-two">
          <span>✦</span><small>Suave<br />como un abrazo</small>
        </div>
        <div className="sparkle sparkle-one">✦</div>
        <div className="sparkle sparkle-two">✧</div>
      </div>
    </section>
  );
}
