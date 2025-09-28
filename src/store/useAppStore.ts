// src/store/useAppStore.ts
import { create } from "zustand";

export type Mode = "presentation" | "explore";
export type Theme = "classic" | "lotus" | "indigo" | "heritage" | "crimson";

type Poll = { agree: number; neutral: number; disagree: number };

type AppState = {
  mode: Mode;
  cohesion: number;      // 0–100
  poll: Poll;
  theme: Theme;          // <-- thêm theme
  setCohesion: (v: number) => void;
  vote: (k: keyof Poll) => void;
  toggleMode: () => void;
  setTheme: (t: Theme) => void;
};

const DEFAULT_THEME: Theme = "crimson";

const getSavedTheme = (): Theme => {
  if (typeof window === "undefined") return DEFAULT_THEME;
  const v = localStorage.getItem("unity-theme") as Theme | null;
  const themes: Theme[] = ["classic", "lotus", "indigo", "heritage", "crimson"];
  return v && themes.includes(v) ? v : DEFAULT_THEME;
};

export const useAppStore = create<AppState>()((set, get) => {
  const initialTheme = getSavedTheme();
  if (typeof document !== "undefined") {
    document.documentElement.setAttribute("data-theme", initialTheme);
  }

  return {
    mode: "presentation",
    cohesion: 50,
    poll: { agree: 0, neutral: 0, disagree: 0 },
    theme: initialTheme,

    setCohesion: (v) => set({ cohesion: v }),
    vote: (k) => set({ poll: { ...get().poll, [k]: get().poll[k] + 1 } }),
    toggleMode: () =>
      set({ mode: get().mode === "presentation" ? "explore" : "presentation" }),

    setTheme: (t) => {
      if (typeof window !== "undefined") {
        localStorage.setItem("unity-theme", t);
      }
      if (typeof document !== "undefined") {
        document.documentElement.setAttribute("data-theme", t);
      }
      set({ theme: t });
    },
  };
});
