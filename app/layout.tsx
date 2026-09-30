import type { Metadata } from "next";
import "./globals.css";
import { SyncManager } from "@/components/auth/SyncManager";
import { AppChrome } from "@/components/shell/AppChrome";

export const metadata: Metadata = {
  title: "Deutsch — Learn German A1",
  description: "A premium German A1 course — guided lessons, exercises, spaced review, and native audio.",
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
