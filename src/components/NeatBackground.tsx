import { useEffect, useRef } from "react";
import type { NeatConfig } from "@firecms/neat";
import { NeatGradient } from "@firecms/neat";

export type { NeatConfig } from "@firecms/neat";

/** Config mặc định của bạn */
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

type Props = {
  config?: Partial<NeatConfig>;
  /** true = chụp 1 frame rồi tĩnh hoàn toàn (khuyên dùng nếu lag) */
  freeze?: boolean;
  /** true = giảm cấu hình cho nhẹ máy (nếu vẫn muốn động nhẹ) */
  energySaver?: boolean;
};

export default function NeatBackground({
  config,
  freeze = true,           // mặc định: TĨNH để hết lag
  energySaver = false       // bật nếu muốn nền vẫn động nhẹ
}: Props) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Tạo cấu hình hiệu dụng
    const cfg: NeatConfig = { ...NEAT_CONFIG, ...(config ?? {}) };

    // Nếu muốn động nhưng nhẹ máy
    if (energySaver) {
      const isMobile = window.innerWidth < 768;
      cfg.resolution = Math.min(cfg.resolution ?? 0.7, isMobile ? 0.5 : 0.6);
      cfg.speed = Math.min(cfg.speed ?? 4, 1.2);
      cfg.waveAmplitude = 0; // giữ shape ổn định
      cfg.grainScale = 0;
      cfg.grainIntensity = 0;
    }

    const neat = new NeatGradient({
      ref: canvasRef.current,
      ...cfg
    });

    // Nếu cần tĩnh: chụp canvas → đặt làm background của wrapper → destroy neat
    if (freeze) {
      // Đợi 1 frame cho Neat vẽ xong rồi chụp
      const snap = () => {
        if (!canvasRef.current || !wrapperRef.current) return;
        const url = canvasRef.current.toDataURL("image/png");
        neat.destroy();                    // NGẮT render loop (hết tốn GPU/CPU)
        wrapperRef.current.style.backgroundImage = `url(${url})`;
        wrapperRef.current.style.backgroundSize = "cover";
        wrapperRef.current.style.backgroundPosition = "center";
        wrapperRef.current.style.backgroundRepeat = "no-repeat";
        // bỏ canvas để giảm memory
        canvasRef.current.remove();
      };
      // chụp sau 1–2 frame cho chắc
      requestAnimationFrame(() => requestAnimationFrame(snap));
      return () => neat.destroy();
    }

    // Nếu không freeze (vẫn động) → chỉ cần cleanup bình thường
    return () => neat.destroy();
  }, [config, freeze, energySaver]);

  return (
    <div
      ref={wrapperRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        width: "100%",
        height: "100%",
        pointerEvents: "none"
      }}
    >
      {/* Khi freeze: canvas sẽ bị remove sau khi chụp */}
      <canvas
        ref={canvasRef}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
