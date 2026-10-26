import type { Metadata, Viewport } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: { default: "KOV Interior | Thoughtful interiors in Ahmedabad", template: "%s | KOV Interior" },
  description: "KOV Interior creates thoughtful, personal homes in Ahmedabad — from space planning and interior design to considered turnkey execution.",
  applicationName: "KOV Interior",
  openGraph: { title: "KOV Interior — Make room for living", description: "Interiors that feel like you, only a little more at ease. Thoughtful residential design in Ahmedabad.", locale: "en_IN", type: "website" },
  robots: { index: true, follow: true },
};
export const viewport: Viewport = { themeColor: "#f3f0e9", colorScheme: "light" };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
