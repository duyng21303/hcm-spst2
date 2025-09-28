// src/components/NeatBackground.tsx
import { useEffect, useRef } from "react";
import type { NeatConfig } from "@firecms/neat";
import { NeatGradient } from "@firecms/neat";

export type { NeatConfig } from "@firecms/neat";

/* Dùng config nào bạn muốn (ví dụ từ NEAT editor) */
// ĐÚNG THEO CONFIG BẠN GỬI (đã loại yOffset, grainSparsity vì Neat không hỗ trợ)
export const NEAT_CONFIG: NeatConfig = {
  colors: [
    { color: "#5F2202", enabled: true },
    { color: "#622B02", enabled: true },
    { color: "#5B0202", enabled: true },
    { color: "#712E03", enabled: true },
    { color: "#642D02", enabled: true },
  ],
  speed: 4,
  horizontalPressure: 4,
  verticalPressure: 3,
  waveFrequencyX: 0,
  waveFrequencyY: 0,
  waveAmplitude: 0,
  shadows: 2,
  highlights: 7,
  colorBrightness: 1,
  colorSaturation: 8,
  wireframe: false,
  colorBlending: 5,
  backgroundColor: "#6B0505",
  backgroundAlpha: 1,
  grainScale: 0,
  grainIntensity: 0,
  grainSpeed: 0,
  resolution: 0.7
};

type Props = { config?: Partial<NeatConfig> };

export default function NeatBackground({ config }: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // NeatGradient hiện yêu cầu ref là <canvas>
    const neat = new NeatGradient({
      ref: canvasRef.current,
      ...NEAT_CONFIG,
      ...(config ?? {})
    });

    return () => neat.destroy();
  }, [config]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        width: "100%",
        height: "100%",
        pointerEvents: "none"
      }}
    />
  );
}
