type EyebrowProps = {
  children: React.ReactNode;
  withLines?: boolean;
};

export function Eyebrow({ children, withLines = false }: EyebrowProps) {
  return (
    <p className={withLines ? "eyebrow" : "eyebrow eyebrow-left"}>
      {withLines && <span />}
      {children}
      {withLines && <span />}
    </p>
  );
}
