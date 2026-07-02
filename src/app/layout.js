import { Inter, Lexend } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Header from "../components/common/Header";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

export const metadata = {
  title: "Pixel Studios Inc",
  description: "Award-Winning Digital Agency",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${lexend.variable}`}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
