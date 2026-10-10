import { ImageResponse } from "next/og";

export const alt = "Dreamy Pijamas: pijamas suaves para dormir bonito";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#f8dfe2",
          color: "#2f2b2d",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "center",
          padding: "80px",
          width: "100%",
        }}
      >
        <div style={{ color: "#d98794", fontSize: 22, letterSpacing: ".18em" }}>
          DREAMY PIJAMAS
        </div>
        <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: "-.07em" }}>
          dreamy
        </div>
        <div style={{ fontFamily: "serif", fontSize: 42, fontStyle: "italic" }}>
          pijamas
        </div>
        <div style={{ color: "#705f63", fontSize: 28, marginTop: 34 }}>
          Pijamas suaves para dormir bonito.
        </div>
        <div style={{ color: "#a56f78", fontSize: 20, marginTop: 48 }}>
          pijamas / accesorios / regalos
        </div>
      </div>
    ),
    { ...size },
  );
}
