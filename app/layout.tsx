import { Metadata } from "next";
import type { Viewport } from "next";
import "./styles/globals.css";
import Providers from "./components/Provider";

export const viewport: Viewport = {
  themeColor: "#000",
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    template: "%s | RayLiao",
    default: "RayLiao", // a default is required when creating a template
  },
  description: `RayLiao - Hakka Canton - 
  Father & Husband - Front-end developer / Photography enthusiasts / Swimfan`,
  // icons: {
  //   icon: [
  //     {
  //       type: "image/svg",
  //       url: `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎏</text></svg>`,
  //     },
  //   ],
  // },
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://rayliao.com/#website",
        url: "https://rayliao.com",
        name: "RayLiao",
        description:
          "Ray Liao - 前端开发者、摄影爱好者、客家文化记录者",
        inLanguage: ["zh-CN", "en"],
      },
      {
        "@type": "Person",
        "@id": "https://rayliao.com/#person",
        name: "Ray Liao",
        jobTitle: "Front-end Developer",
        url: "https://rayliao.com",
        sameAs: [
          "https://github.com/rayliao",
          "https://instagram.com/ray__liao/",
        ],
        description:
          "前端开发者、摄影爱好者、客家文化记录者",
      },
    ],
  };

  return (
    <html suppressHydrationWarning>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
