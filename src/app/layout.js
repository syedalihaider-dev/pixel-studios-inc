import { Inter, Lexend } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Header from "../components/Common/Header";
import Footer from "../components/Common/Footer";
import GlobalPopup from "../components/Common/GlobalPopup";
import CanonicalLink from "../components/Common/CanonicalLink";
import GlobalSchema from "../components/Schema/GlobalSchema";

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

import Script from "next/script";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${lexend.variable}`}>
      <head>
        <CanonicalLink />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KMBNQ2D8"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <GlobalSchema />
        <Header />
        {children}
        <Footer />
        <GlobalPopup />

        <Script id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key=239dfa05-01f6-4362-bfb9-4f75a7455e10" strategy="afterInteractive" />
        <Script id="zopim-init" strategy="afterInteractive">
          {`
            window.$zopim || function (a, d) {
                var b = $zopim = function (a) {
                        b._.push(a)
                    },
                    c = b.s = a.createElement(d);
                a = a.getElementsByTagName(d)[0];
                b.set = function (a) {
                    b.set._.push(a)
                };
                b._ = [];
                b.set._ = [];
                c.async = !0;
                c.setAttribute("charset", "utf-8");
                c.src = "";
                b.t = +new Date;
                c.type = "text/javascript";
                a.parentNode.insertBefore(c, a)
            }
            (document, "script");

            $zopim(function () {
                function a(a) {
                    if (1 <= a && $zopim.livechat && $zopim.livechat.window) {
                        $zopim.livechat.window.show();
                    }
                }
                if ($zopim.livechat) {
                    $zopim.livechat.setOnUnreadMsgs(a);
                }
            });

            window.toggleChat = function() {
                if (window.$zopim && window.$zopim.livechat && window.$zopim.livechat.window) {
                    window.$zopim.livechat.window.toggle();
                } else if (window.zE) {
                    try {
                        window.zE('webWidget', 'toggle');
                    } catch(err) {
                        console.error(err);
                    }
                }
            };
          `}
        </Script>

        {/* Google Tag (gtag.js) AW-17029360199 */}
        <Script
          id="google-tag-aw"
          src="https://www.googletagmanager.com/gtag/js?id=AW-17029360199"
          strategy="afterInteractive"
        />
        <Script id="google-tag-aw-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17029360199');
          `}
        </Script>

        {/* Google Tag (gtag.js) G-TDJP607ZP4 */}
        <Script
          id="google-analytics"
          src="https://www.googletagmanager.com/gtag/js?id=G-TDJP607ZP4"
          strategy="afterInteractive"
        />
        <Script id="google-analytics-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TDJP607ZP4');
          `}
        </Script>

        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KMBNQ2D8');
          `}
        </Script>

        {/* Event snippet for PSI-Sign-up conversion page */}
        <Script id="conversion-snippet" strategy="afterInteractive">
          {`
            gtag('event', 'conversion', {
              'send_to': 'AW-17029360199/5IJlCIisuJQbEMfUnbg_',
              'value': 1.0,
              'currency': 'USD'
            });
          `}
        </Script>
      </body>
    </html>
  );
}
