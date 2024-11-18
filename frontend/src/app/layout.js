import localFont from "next/font/local";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "GDGoC APSIT",
  description: "GDGoC APSIT website for events, community, resources, and recognition.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Link to the manifest.json */}
        <link rel="manifest" href="/manifest.json" />
        {/* Favicon for the app */}
        <link rel="icon" href="/favicon.ico" />
        {/* Additional meta tags for PWA */}
        <meta name="theme-color" content="#000000" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
