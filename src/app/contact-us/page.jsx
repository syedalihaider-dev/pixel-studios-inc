import Banner from "@/components/Contact/Banner";
import ContactFormSection from "@/components/Contact/ContactFormSection";
import { Metadata } from "next";

export const metadata = {
  title: "Pixel Studios Inc - Contact Us",
  description: "Connect with Pixel Studios Inc., a leading animation studio. Reach out to our team for project inquiries, collaborations, or any questions regarding our 2D and 3D animation services. Let’s bring your ideas to life together.",
  keywords: "Contact Pixel Studios Inc, Best Animation Studio In India, 2D Animation Studio, 3D Animation Studio, Explainer Videos, Whiteboard Animation, Motion Graphics, Character Animation",
}

export default function ContactUsPage() {
  return (
    <main>
      <Banner />
      <div style={{ background: "radial-gradient(60.57% 91.94% at 69.22% 43%, #19042D 0%, #19042D 100%)" }}>
        <ContactFormSection />
      </div>
    </main>
  );
}
