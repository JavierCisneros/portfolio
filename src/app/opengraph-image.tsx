import { ImageResponse } from "next/og";

export const alt = "Javier Cisneros, Full-Stack Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0d0e10",
          color: "#f4f3ef",
          padding: "76px 84px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24 }}>
          <span style={{ fontWeight: 700 }}>Javier Cisneros</span>
          <span style={{ color: "#7ca2ff" }}>javiercisneros.me</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 980 }}>
          <div style={{ fontSize: 78, fontWeight: 700, letterSpacing: "-3px", lineHeight: 1.04 }}>
            Full-Stack Software Engineer
          </div>
          <div style={{ marginTop: 34, fontSize: 30, lineHeight: 1.4, color: "#a3a3a3" }}>
            Cloud applications, secure integrations, and end-to-end production ownership.
          </div>
        </div>
        <div style={{ display: "flex", gap: 28, fontSize: 22, color: "#a3a3a3" }}>
          <span>React</span><span>TypeScript</span><span>Node.js</span><span>AWS</span>
        </div>
      </div>
    ),
    size,
  );
}
