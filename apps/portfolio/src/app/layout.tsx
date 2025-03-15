import type { Metadata } from "next";
import { roboto, oswald } from "@/font/font";
import "./globals.css";
import "rsuite/dist/rsuite-no-reset.min.css";
import "@/styles/timeline.css";
// import "@repo/ui/styles.css";

export const metadata: Metadata = {
  title: "YA WAI AUNG",
  description: "Engage, explore, interact. Rows that respond.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <head>
        <link
          rel="icon"
          type="image/x-icon"
          sizes="32x32"
          href="/apple-icon?<generated>"
        />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body className={`${roboto.variable} ${oswald.variable}`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
