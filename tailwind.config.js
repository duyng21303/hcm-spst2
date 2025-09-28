/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Be Vietnam Pro", "system-ui", "sans-serif"],
        serif: ["Noto Serif Display", "serif"],
      },
      colors: {
        vn: {
          red:   "#DA251D",  // đỏ cờ
          gold:  "#FFCD00",  // vàng sao
          black: "#0D0C0C",  // đen son mài
          bamboo:"#2E7D32",  // xanh tre
          lotus: "#E85D75",  // hồng sen
          indigo:"#1E3A8A"   // lam chàm (truyền thống)
        }
      },
      boxShadow: {
        lacquer: "0 0 0 1px rgba(255,255,255,0.06), 0 30px 80px rgba(218,37,29,0.18)",
        goldGlow:"0 0 25px rgba(255,205,0,0.35)",
      },
      backgroundImage: {
        // dải đỏ-vàng với chiều sâu son mài
        "vn-grad":
          "radial-gradient(1200px 700px at 15% 10%, rgba(255,205,0,.12), transparent 60%)," +
          "radial-gradient(900px 600px at 80% 20%, rgba(218,37,29,.15), transparent 60%)," +
          "linear-gradient(180deg, #0D0C0C, #0D0C0C)",
      },
    },
  },
  plugins: [],
}
