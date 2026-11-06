import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SyncManager } from "@/components/auth/SyncManager";
import { AppChrome } from "@/components/shell/AppChrome";
import { ServiceWorkerRegister } from "@/components/pwa/ServiceWorkerRegister";

export const metadata: Metadata = {
  title: "Deutsch — Learn German A1",
  description: "A premium German A1 course — guided lessons, exercises, spaced review, and native audio.",
  applicationName: "Deutsch",
  appleWebApp: { capable: true, title: "Deutsch", statusBarStyle: "default" },
  formatDetection: { telephone: false },
  icons: { apple: "/icons/apple-touch-icon.png" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F1EDE4" },
    { media: "(prefers-color-scheme: dark)", color: "#09090B" },
  ],
};

// Dark is the default. Applies a saved "light" (Papier) choice before first paint so it never flashes dark.
const themeInit = `try{if(localStorage.getItem('deutsch-a1-theme')==='light')document.documentElement.setAttribute('data-theme','light');}catch(e){}`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body className="min-h-full flex flex-col">
        <SyncManager />
        <ServiceWorkerRegister />
        <AppChrome>{children}</AppChrome>
      </body>
    </html>
  );
}
