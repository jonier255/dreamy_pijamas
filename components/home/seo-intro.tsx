import { Eyebrow } from "../ui/eyebrow";

export function SeoIntro() {
  return (
    <section className="seo-content section-shell" id="como-comprar" aria-labelledby="seo-heading">
      <div>
        <Eyebrow>tu descanso, tu estilo</Eyebrow>
        <h2 id="seo-heading">Pijamas bonitas para<br /><i>dormir mejor.</i></h2>
      </div>
      <div className="seo-copy">
        <p>
          En Dreamy Pijamas encuentras pijamas para mujer diseñadas para
          acompañar tus noches con suavidad, comodidad y mucho estilo. Elige
          entre pijamas de satén, algodón y telas ligeras para crear tu ritual
          de descanso.
        </p>
        <p>
          Somos una tienda online de pijamas en Colombia con accesorios para
          dormir, ideas de regalos y detalles bonitos para consentirte. Haz tu
          pedido por WhatsApp y recibe tu selección en la puerta de tu casa.
        </p>
        <a className="text-link" href="#catalogo">
          Explorar productos <span>↗</span>
        </a>
      </div>
    </section>
  );
}
