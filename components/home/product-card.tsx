import { Product } from "@/lib/products";

type ProductCardProps = {
  product: Product;
  onBuy: (productName: string) => void;
};

export function ProductCard({ product, onBuy }: ProductCardProps) {
  return (
    <article className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} loading="lazy" />
        <span className="product-tag">{product.tag}</span>
        <button type="button" className="heart-button" aria-label={"Guardar " + product.name}>♡</button>
        <button type="button" className="quick-buy" onClick={() => onBuy(product.name)}>
          Comprar <span>↗</span>
        </button>
      </div>
      <div className="product-copy">
        <div>
          <p>{product.category}</p>
          <h3>{product.name}</h3>
          <span>{product.description}</span>
        </div>
        <strong>{product.price}</strong>
      </div>
    </article>
  );
}
