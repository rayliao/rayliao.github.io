import "./global.css";
import Script from "next/script";
import { PreSvg } from "components/Svg";
import Dashboard from "./dashboard";
import { i18n } from "../../common/i18n-config";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export const metadata = {
  title: {
    default: "RayLiao",
    template: "%s | RayLiao",
  },
  description: `RayLiao - Hakka Canton - 
  Father & Husband - Front-end developer / Photography enthusiasts / Swimfan`,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    shortcut:
      "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎏</text></svg>",
  },
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang={params.lang}>
      <Script
        async
        defer
        data-website-id="4e517b17-fc44-4044-8427-896e6f22006f"
        src="https://analysis.puffin.studio/umami.js"
      />
      <PreSvg />
      <Dashboard>{children}</Dashboard>
    </html>
  );
}
