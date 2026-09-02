import { Inter, Lexend } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Header from "@/components/Common/Header";
import Footer from "@/components/Common/Footer";
import GlobalPopup from "@/components/Common/GlobalPopup";
import CanonicalLink from "@/components/Common/CanonicalLink";
import GlobalSchema from "@/components/Schema/GlobalSchema";
import LeadTracker from "@/components/Common/LeadTracker";
import DeferredThirdParties from "@/components/Common/DeferredThirdParties";

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
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "BvO8shiuQFBpVIy-2A3iDrOD3pz3PExE1rg2rK32jtA",
  },
  other: {
    "dmca-site-verification": "b25RMkRjZG5wRkFoQWdwY3RSWUN2KzV1TE9LU2xJb3pkRkg2cGxYOG5BRT01",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${lexend.variable}`}>
      <head>
        <CanonicalLink />
      </head>
      <body>
        <LeadTracker />
        <GlobalSchema />

        <Header />
        
        {children}
        
        <Footer />
        
        <GlobalPopup />
        <DeferredThirdParties />
      </body>
    </html>
  );
}
