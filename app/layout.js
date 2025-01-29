import "./globals.css";

export const metadata = {
  title: "Periyodik Tablo Oyunu",
  description: "Ali Emir Oktay tarafından yapılan periyodik tablo oyunu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="w-full h-full bg-amber-100"
      >
        {children}
      </body>
    </html>
  );
}
