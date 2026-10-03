import { Eyebrow } from "@/components/ui/eyebrow";
import { products, Product } from "@/lib/products";

type FeaturedCarouselProps = {
  activeSlide: number;
  onSlideChange: (slide: number) => void;
  onBuy: (productName: string) => void;
};

function Arrow({ direction }: { direction: "left" | "right" }) {
  return <span aria-hidden="true">{direction === "left" ? "←" : "→"}</span>;
}

export function FeaturedCarousel({
  activeSlide,
  onSlideChange,
  onBuy,
}: FeaturedCarouselProps) {
  const featuredProducts = products.slice(0, 3);

  return (
    <section className="featured-section section-shell" id="coleccion">
      <div className="section-heading">
        <div>
          <Eyebrow>seleccionadas para ti</Eyebrow>
          <h2>Favoritas de la<br /><i>temporada</i></h2>
        </div>
        <div className="carousel-controls">
          <button type="button" onClick={() => onSlideChange((activeSlide + 2) % 3)} aria-label="Producto anterior">
            <Arrow direction="left" />
          </button>
          <span><strong>0{activeSlide + 1}</strong> / 03</span>
          <button type="button" onClick={() => onSlideChange((activeSlide + 1) % 3)} aria-label="Producto siguiente">
            <Arrow direction="right" />
          </button>
        </div>
      </div>
      <div className="featured-carousel">
        {featuredProducts.map((product, index) => (
          <FeaturedCard
            key={product.name}
            product={product}
            active={index === activeSlide}
            onBuy={onBuy}
          />
        ))}
      </div>
      <div className="carousel-dots">
        {featuredProducts.map((product, index) => (
          <button
            type="button"
            key={product.name}
            className={index === activeSlide ? "active" : ""}
            onClick={() => onSlideChange(index)}
            aria-label={"Ver producto " + (index + 1)}
          />
        ))}
      </div>
    </section>
  );
}

function FeaturedCard({
  product,
  active,
  onBuy,
}: {
  product: Product;
  active: boolean;
  onBuy: (productName: string) => void;
}) {
  return (
    <article className={active ? "featured-card active" : "featured-card"}>
      <div className="featured-image">
        <img src={product.image} alt={product.name} />
        <span className="product-tag">{product.tag}</span>
        <button type="button" className="heart-button" aria-label={"Guardar " + product.name}>♡</button>
      </div>
      <div className="featured-details">
        <div>
          <p>{product.category}</p>
          <h3>{product.name}</h3>
          <span>{product.price}</span>
        </div>
        <button type="button" className="round-arrow" onClick={() => onBuy(product.name)} aria-label={"Comprar " + product.name}>↗</button>
      </div>
    </article>
  );
}
