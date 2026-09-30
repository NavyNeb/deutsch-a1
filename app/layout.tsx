import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SyncManager } from "@/components/auth/SyncManager";
import { AppChrome } from "@/components/shell/AppChrome";

export const metadata: Metadata = {
  title: "Deutsch — Learn German A1",
  description: "A premium German A1 course — guided lessons, exercises, spaced review, and native audio.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F6F5F4" },
    { media: "(prefers-color-scheme: dark)", color: "#0F1417" },
  ],
};

// Applies the saved theme before first paint so light mode never flashes dark.
const themeInit = `try{var t=localStorage.getItem('deutsch-a1-theme');if(t==='light'||t==='dark')document.documentElement.setAttribute('data-theme',t);}catch(e){}`;

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
        <AppChrome>{children}</AppChrome>
      </body>
    </html>
  );
}
