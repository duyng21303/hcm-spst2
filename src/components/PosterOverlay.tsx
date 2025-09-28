import React from "react";

type Props = {
  src: string;
  /** 0..1 (độ trong của ảnh phủ) */
  opacity?: number;
  /** px (độ mờ của chính ảnh) */
  blur?: number;
  /** chế độ hòa trộn: 'overlay'|'multiply'|'soft-light'|'screen'|'normal' */
  blend?: React.CSSProperties["mixBlendMode"];
  /** có vignette tối viền không */
  vignette?: boolean;
};

export default function PosterOverlay({
  src,
  opacity = 0.22,
  blur = 2,
  blend = "overlay",
  vignette = true
}: Props) {
  return (
    <div
      aria-hidden
      className="poster-overlay"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,           // nằm trên NEAT (nếu NEAT để -2) nhưng dưới nội dung
        backgroundImage: `url(${src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        filter: `blur(${blur}px)`,
        opacity,
        mixBlendMode: blend as any,
        pointerEvents: "none"
      }}
    >
      {vignette && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(1200px 600px at 50% 55%, rgba(0,0,0,0) 50%, rgba(0,0,0,.28) 100%)",
            mixBlendMode: "multiply",
            pointerEvents: "none"
          }}
        />
      )}
    </div>
  );
}
