import { ImageResponse } from "next/og";
import { portfolioData } from "@/data/portfolio";

export const alt = `${portfolioData.personal.name} — ${portfolioData.personal.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ display: "flex", height: "100%", width: "100%", flexDirection: "column", justifyContent: "space-between", background: "#f5f4ee", color: "#20332b", padding: "72px", borderLeft: "16px solid #37674f" }}>
      <div style={{ display: "flex", color: "#37674f", fontSize: 22, letterSpacing: 3, textTransform: "uppercase" }}>Portfolio / Data & Business Intelligence</div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", fontSize: 84, fontWeight: 500, letterSpacing: -4, lineHeight: 1.1 }}>Data, made meaningful.</div>
        <div style={{ display: "flex", marginTop: 28, maxWidth: 900, color: "#37674f", fontSize: 34 }}>{portfolioData.personal.name}</div>
      </div>
      <div style={{ display: "flex", borderTop: "1px solid #d7dcd1", paddingTop: 24, color: "#5f6b61", fontSize: 22 }}>Python · SQL · Power BI · Advanced Excel · Operations Analytics</div>
    </div>,
    size,
  );
}
