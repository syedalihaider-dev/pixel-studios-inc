import { Inter, Lexend } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Header from "../components/Common/Header";
import Footer from "../components/Common/Footer";
import GlobalPopup from "../components/Common/GlobalPopup";

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

import Script from "next/script";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${lexend.variable}`}>
      <body>
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
      </body>
    </html>
  );
}
