import { Eyebrow } from "../ui/eyebrow";

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
        <a className="button button-dark" href="#catalogo">
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
            src="https://plus.unsplash.com/premium_photo-1683141091801-abc4d06a9c50?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
