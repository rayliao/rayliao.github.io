import { Metadata } from "next";
import type { Viewport } from "next";
import { i18n, type Locale } from "../i18n-config";
import "./styles/globals.css";
import Providers from "./components/Provider";

export const viewport: Viewport = {
  themeColor: "#000",
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 5,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "RayLiao",
  description: `RayLiao - Hakka Canton - 
  Father & Husband - Front-end developer / Photography enthusiasts / Swimfan`,
  icons: {
    icon: [
      {
        type: "image/svg",
        url: `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎏</text></svg>`,
      },
    ],
  },
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html suppressHydrationWarning lang={params.lang}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
