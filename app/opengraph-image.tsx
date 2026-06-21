import { ImageResponse } from "next/og";

export const alt = "Bhone Myint San — Junior Data Analyst";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ display: "flex", height: "100%", width: "100%", flexDirection: "column", justifyContent: "space-between", background: "#17131f", color: "#f5f3ff", padding: "72px" }}>
      <div style={{ display: "flex", color: "#a78bfa", fontSize: 26, letterSpacing: 3, textTransform: "uppercase" }}>Portfolio · Data & Business Intelligence</div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", fontSize: 68, fontWeight: 700, lineHeight: 1.1 }}>Bhone Myint San (Bruce)</div>
        <div style={{ display: "flex", marginTop: 24, maxWidth: 900, color: "#c4b5fd", fontSize: 38 }}>Turning complex data into clear insights and practical decisions.</div>
      </div>
      <div style={{ display: "flex", color: "#a1a1aa", fontSize: 24 }}>Python · SQL · Power BI · Data Visualization · Next.js</div>
    </div>,
    size,
  );
}
