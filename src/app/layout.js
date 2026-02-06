import "./globals.css";

export const metadata = {
  title: "Artisan Textile House | Premium Indian Textile Exports",
  description: "Discover exquisite handcrafted Indian textiles. Premium fabrics, bespoke designs, and exceptional craftsmanship for the world's most discerning clientele.",
  keywords: "luxury textiles, Indian fabrics, premium exports, handcrafted textiles, bespoke fabrics, silk, cashmere, heritage weaves",
  authors: [{ name: "Artisan Textile House" }],
  openGraph: {
    title: "Artisan Textile House | Premium Indian Textile Exports",
    description: "Exquisite handcrafted Indian textiles for the world's most discerning clientele.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
