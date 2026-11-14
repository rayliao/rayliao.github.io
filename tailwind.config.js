import typography from "@tailwindcss/typography";

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

/** @type {import('tailwindcss').Config} */
const config = {
  // 个人站沿用 dark: 类名，但由博客的 data-theme 属性统一驱动
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // cactus 主色 #2bbc8a（深浅两套共用同一色相，色阶供徽章/悬停使用）
        grass: {
          50: "#eafaf4",
          100: "#d3f4e8",
          200: "#a7e9d1",
          300: "#7bddba",
          400: "#53d1a3",
          500: "#2bbc8a",
          600: "#23976e",
          700: "#1b7253",
          800: "#144d38",
          900: "#0d3325",
        },
        // cactus 暖灰：浅色正文 #22272a / 深色正文 #c9cacc，meta #666 / #908d8d
        gray: {
          50: "#f5f5f5",
          100: "#eeeeee",
          200: "#e0e0e0",
          300: "#cccccc",
          400: "#908d8d",
          500: "#666666",
          600: "#555555",
          700: "#3a3f42",
          800: "#22272a",
          900: "#1d1f21",
        },
      },
      textColor: {
        skin: {
          base: withOpacity("--color-text-base"),
          accent: withOpacity("--color-accent"),
          inverted: withOpacity("--color-fill"),
        },
      },
      backgroundColor: {
        skin: {
          fill: withOpacity("--color-fill"),
          accent: withOpacity("--color-accent"),
          inverted: withOpacity("--color-text-base"),
          card: withOpacity("--color-card"),
          "card-muted": withOpacity("--color-card-muted"),
        },
      },
      outlineColor: {
        skin: {
          fill: withOpacity("--color-accent"),
        },
      },
      borderColor: {
        skin: {
          line: withOpacity("--color-border"),
          fill: withOpacity("--color-text-base"),
          accent: withOpacity("--color-accent"),
        },
      },
      fill: {
        skin: {
          base: withOpacity("--color-text-base"),
          accent: withOpacity("--color-accent"),
        },
        transparent: "transparent",
      },
      fontFamily: {
        // cactus 等宽字体栈；plex 保留别名，全站统一
        mono: ["Menlo", "Meslo LG", "monospace"],
        plex: ["Menlo", "Meslo LG", "monospace"],
      },
      fontSize: {
        // cactus 正文 14px / 行高 1.725
        sm: ["14px", "1.725"],
      },
      borderRadius: {
        // cactus 圆角：行内代码 2px / 代码块 4px / 按钮与卡片 5px
        sm: "2px",
        DEFAULT: "4px",
        md: "4px",
        lg: "5px",
        xl: "5px",
      },
      typography: {
        DEFAULT: {
          css: {
            lineHeight: "1.725",
            pre: {
              color: false,
            },
            code: {
              color: false,
            },
          },
        },
      },
    },
  },
  plugins: [typography],
};

export default config;