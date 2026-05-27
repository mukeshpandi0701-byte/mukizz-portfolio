import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Mukesh Pandi — Full Stack Developer & AI Builder";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://mukizz.dev";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: "linear-gradient(135deg, #141827 0%, #1b2138 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
          fontFamily: '"Geist Sans"',
          color: "#f5f5f5",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle at 20% 50%, rgba(0, 151, 178, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(184, 146, 42, 0.08) 0%, transparent 50%)",
            pointerEvents: "none",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
            zIndex: 1,
            textAlign: "center",
          }}
        >
          {/* Name */}
          <div
            style={{
              fontSize: "72px",
              fontWeight: 700,
              letterSpacing: "-2px",
              background: "linear-gradient(120deg, #f5f5f5 0%, #00b8d9 70%, #00d4ff 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Mukesh Pandi
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: "32px",
              color: "#b0b8c1",
              fontWeight: 500,
              marginTop: "12px",
            }}
          >
            Full Stack · AI · Product Builder
          </div>

          {/* Accent line */}
          <div
            style={{
              width: "80px",
              height: "3px",
              background: "#0097b2",
              marginTop: "20px",
              borderRadius: "2px",
            }}
          />

          {/* Bio */}
          <div
            style={{
              fontSize: "20px",
              color: "#7a8290",
              marginTop: "20px",
              maxWidth: "800px",
              lineHeight: "1.6",
            }}
          >
            Engineering student building ambitious products
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            right: "60px",
            fontSize: "18px",
            color: "#b0b8c1",
            opacity: 0.6,
          }}
        >
          mukizz.dev
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Geist Sans",
          data: await fetch(new URL("https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLteHAPYxIUozlm-QrL-c603ctPEySignMwc5Z.woff2")).then(
            (res) => res.arrayBuffer()
          ),
          weight: 700,
        },
      ],
    }
  );
}
