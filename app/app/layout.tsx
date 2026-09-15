import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MEC REAL STATE",
  description:
    "Encuentra propiedades para comprar, alquilar e invertir en República Dominicana.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
