type BrandLogoProps = {
  href?: string;
};

export function BrandLogo({ href = "#inicio" }: BrandLogoProps) {
  return (
    <a className="brand" href={href} aria-label="Dreamy Pijamas, inicio">
      <span className="brand-star">✦</span>
      <span>
        <strong>dreamy</strong>
        <em>pijamas</em>
      </span>
    </a>
  );
}
