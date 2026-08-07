import Link from "next/link";
import styles from "./page.module.css";
import { brandInfo } from "@/constants/brandInfo";

export const metadata = {
  title: "Privacy Policy - Pixel Studios Inc",
  description: "Privacy Policy for Pixel Studios Inc. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className={styles.pageWrapper}>
      <section className={styles.banner}>
        <div className="container">
          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.subtitle}>How Pixel Studios Inc collects, uses, and protects your information.</p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className="container">
          <div className={styles.layout}>
            <aside className={styles.sidebar}>
              <nav className={styles.nav}>
                <a href="#information">1. Information We Collect</a>
                <a href="#use">2. How We Use Your Information</a>
                <a href="#protection">3. How We Protect Information</a>
                <a href="#cookies">4. Cookies</a>
                <a href="#sharing">5. Sharing Your Information</a>
                <a href="#gdpr">6. Your Rights Under GDPR</a>
                <a href="#consent">7. Consent</a>
                <a href="#contact">8. Contact Us</a>
              </nav>
            </aside>

            <article className={styles.article}>
              <section className={styles.section}>
                <p>This Privacy Policy explains what information Pixel Studios Inc collects, why we collect it, and how we protect it. We collect only what&apos;s necessary to understand your project and stay in touch, and we never sell your personal information to third parties.</p>
              </section>

              <section id="information" className={styles.section}>
                <h2>1. Information We Collect</h2>
                <p>When you submit an inquiry or request a quote through our website, we ask for basic contact details such as your name, email address, phone number, and country. We may also collect project details you choose to share, like references, briefs, or files relevant to your animation or video project.</p>
              </section>

              <section id="use" className={styles.section}>
                <h2>2. How We Use Your Information</h2>
                <p>We use your information to respond to inquiries, scope and manage your project, and communicate throughout production. We may also use it to:</p>
                <ul>
                  <li>Improve our website and services based on client feedback.</li>
                  <li>Share relevant updates, offers, or announcements, which you can opt out of at any time.</li>
                  <li>Strengthen our customer support and project communication.</li>
                </ul>
              </section>

              <section id="protection" className={styles.section}>
                <h2>3. How We Protect Your Information</h2>
                <p>We use secure, encrypted connections (SSL) to protect any information submitted through our website, including payment-related details, so your data stays confidential in transit.</p>
              </section>

              <section id="cookies" className={styles.section}>
                <h2>4. Cookies</h2>
                <p>Our website uses cookies to support core site functionality and help us understand how visitors use our site. Cookies do not collect personally identifiable information beyond what you&apos;ve already provided to us directly.</p>
              </section>

              <section id="sharing" className={styles.section}>
                <h2>5. Sharing Your Information</h2>
                <p>We do not sell or trade your personal information. We may share information with trusted service providers who help us operate our website or deliver our services, provided they agree to keep that information confidential. Aggregated, non-identifying data may be used for marketing or analytics purposes.</p>
              </section>

              <section id="gdpr" className={styles.section}>
                <h2>6. Your Rights Under GDPR</h2>
                <p>For clients in regions covered by the General Data Protection Regulation, we process personal data only with clear, informed consent, and never share it with outside parties beyond what&apos;s outlined in this policy. You have the right to access, correct, or request deletion of your data at any time.</p>
              </section>

              <section id="consent" className={styles.section}>
                <h2>7. Consent</h2>
                <p>By submitting your information through our website, you consent to it being processed as described in this policy. Where we request sensitive personal data, we&apos;ll always explain why it&apos;s needed and how it will be used. You may withdraw consent at any time by contacting us via phone or email.</p>
              </section>

              <section id="contact" className={styles.section}>
                <h2>8. Contact Us</h2>
                <p>If you have questions about this Privacy Policy or how your information is handled, reach out to our team any time.</p>
                <p>
                  <a href={brandInfo.phone.href}>{brandInfo.phone.display}</a> | {" "}
                  <a href={brandInfo.email.href}>{brandInfo.email.display}</a> | {" "}
                  <Link href="/">https://www.pixelstudiosinc.com</Link>
                </p>
              </section>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
