import Link from "next/link";
import styles from "./page.module.css";
import { brandInfo } from "@/constants/brandInfo";

export const metadata = {
  title: "Terms and Conditions - Pixel Studios Inc",
  description: "Terms and Conditions for Pixel Studios Inc. Read the policies governing our animation and video production services.",
};

export default function TermsAndConditionsPage() {
  return (
    <main className={styles.pageWrapper}>
      <section className={styles.banner}>
        <div className="container">
          <h1 className={styles.title}>Terms &amp; Conditions</h1>
          <p className={styles.subtitle}>Please read these terms carefully before placing an order with us.</p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className="container">
          <div className={styles.layout}>
            <aside className={styles.sidebar}>
              <nav className={styles.nav}>
                <a href="#revision-policy">1. Revision Policy</a>
                <a href="#fair-usage">2. Fair Usage Policy</a>
                <a href="#refunds">3. Refunds &amp; Cancellations</a>
                <a href="#payments">4. Payments</a>
                <a href="#deliverables">5. Final Deliverables</a>
                <a href="#refund-reasons">6. Valid Refund Reasons</a>
                <a href="#original-work">7. Original Work Guarantee</a>
                <a href="#service-terms">8. Service-Specific Terms</a>
                <a href="#request-refund">9. Request a Refund</a>
              </nav>
            </aside>

            <article className={styles.article}>
              <section className={styles.section}>
                <p>
                  These Terms and Conditions govern every project, quote, and order placed with Pixel Studios Inc, covering our 2D and 3D animation, explainer video, motion graphics, and video production services. By placing an order with us, you agree to the terms outlined below. If anything here is unclear, our team is happy to walk you through it before you commit to a project.
                </p>
              </section>

              <section id="revision-policy" className={styles.section}>
                <h2>1. Revision Policy</h2>
                <p>Every project comes with a revision allowance based on the package selected at the time of order. Where a package includes unlimited revisions, we will refine your animation or video at no extra cost, provided the original concept and creative brief stay the same. Requests that introduce a new concept, script direction, or style are treated as a new scope, not a revision. Standard revision turnaround is 48 hours from the time we receive clear, consolidated feedback.</p>
              </section>

              <section id="fair-usage" className={styles.section}>
                <h2>2. Fair Usage Policy</h2>
                <p>Unlimited revisions are built around genuine collaboration, not open-ended scope creep. To keep delivery times reasonable for every client, we cap revisions at 30 per project. Requests beyond that threshold will be scoped and quoted as additional work.</p>
              </section>

              <section id="refunds" className={styles.section}>
                <h2>3. Refund Policy and Cancellations</h2>
                <p>Our refund terms are designed to protect both our clients and our team fairly. The terms below apply unless Pixel Studios Inc ends a contract for reasons unrelated to a client&apos;s breach or non-performance.</p>
                <ul>
                  <li>Cancellation within 24 hours of placing an order: full refund, less a 10% processing fee. This does not apply once initial concepts have been delivered or a revision has been requested.</li>
                  <li>Cancellation before delivery of the first draft: full refund, less a 10% processing fee.</li>
                  <li>Refund requested within 48 hours of first delivery: 65% refund, less a 10% processing fee.</li>
                  <li>Refund requested between 48 and 120 hours after first delivery: 30% refund, less a 10% processing fee.</li>
                  <li>No refund requests are accepted more than 120 hours after first delivery, though we always welcome the chance to resolve concerns directly.</li>
                </ul>
              </section>

              <section id="payments" className={styles.section}>
                <h2>4. Payments</h2>
                <p>We accept payment via major credit and debit cards, bank transfer, and check. Payment terms are confirmed in writing at the time a project is agreed. All creative work, files, and deliverables remain the property of Pixel Studios Inc until payment is received in full.</p>
              </section>

              <section className={styles.section}>
                <h2>Order Inactivity</h2>
                <p>If an order sits without any client action for 30 consecutive days, it will be considered inactive and is not eligible for a refund. Reactivating an inactive order may involve an additional fee depending on the scope and stage of the project.</p>
              </section>

              <section id="deliverables" className={styles.section}>
                <h2>5. Final Deliverables</h2>
                <p>Once final files have been delivered and approved, the order is considered complete and closed. Refund requests are not accepted after this point.</p>
              </section>

              <section className={styles.section}>
                <h2>Bundled and Custom Packages</h2>
                <p>For orders combining multiple services, such as an explainer video paired with logo animation, each service within the package is treated individually for refund purposes. If one service has already been approved, only the remaining, unapproved services in the package are eligible for a refund.</p>
              </section>

              <section id="refund-reasons" className={styles.section}>
                <h2>6. Valid Refund Reasons</h2>
                <p>Refund requests must relate to a genuine mismatch between the delivered work and the agreed creative brief. If the work reflects the brief, we will continue offering revisions until you&apos;re satisfied rather than processing a refund. Feedback that simply changes direction after approval does not qualify as grounds for a refund.</p>
              </section>

              <section className={styles.section}>
                <h2>Good Faith Orders</h2>
                <p>Our refund terms assume every order is placed in good faith. If we find that a client has commissioned the same project from multiple studios with the intent of claiming a refund from one or more of them, we reserve the right to decline that refund request.</p>
              </section>

              <section className={styles.section}>
                <h2>Client Feedback and Collaboration</h2>
                <p>Timely, clear feedback is part of every project&apos;s success. We ask clients to review drafts and respond within a reasonable window so revisions and delivery stay on schedule.</p>
              </section>

              <section id="original-work" className={styles.section}>
                <h2>7. Original Work Guarantee</h2>
                <p>We guarantee that every animation, video, and design is built specifically for your project. In the rare event that a delivered concept closely resembles existing third-party work, we will rework it at no charge. Any resemblance to existing work is coincidental, and Pixel Studios Inc accepts no liability for such overlap. Clients are responsible for registering copyright on their finished deliverables if desired.</p>
              </section>

              <section id="service-terms" className={styles.section}>
                <h2>8. Service-Specific Refund Terms</h2>
                <ul>
                  <li><strong>2D and 3D Animation:</strong> No refund once the storyboard has been approved.</li>
                  <li><strong>Explainer Videos:</strong> No refund once scriptwriting has begun.</li>
                  <li><strong>Motion Graphics:</strong> No refund once the visual style frame has been approved.</li>
                  <li><strong>Voiceover and Sound Design:</strong> No refund once voice recording or sound production has started.</li>
                  <li><strong>Logo Animation and Branding:</strong> No refund once the final logo or brand asset has been approved.</li>
                  <li><strong>Website Design and Development:</strong> No refund once the site has been developed or launched.</li>
                </ul>
              </section>

              <section id="request-refund" className={styles.section}>
                <h2>9. How to Request a Refund?</h2>
                <p>To request a refund, contact our support team with your order details and a clear explanation of your concern, either by email or live chat. We will work to resolve the issue directly wherever possible, or confirm your eligibility for a refund in writing. Once a refund is processed, all rights to the delivered content transfer to Pixel Studios Inc, and you agree not to use, publish, or claim ownership of any version of that content going forward. Refund decisions are made on a case-by-case basis in line with these terms.</p>
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
