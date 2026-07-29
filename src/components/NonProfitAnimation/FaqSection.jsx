"use client";
import React from "react";
import GlobalFaqSection from "../Common/FaqSection";

const faqs = [
  {
    question: "What Is Nonprofit Video Production?",
    answer:
      "Nonprofit video production is the process of creating video content, whether live-action, animated, or a mix of both, specifically to support a nonprofit organization's fundraising, awareness, and donor communication goals.",
  },
  {
    question: "How Much Does Animation Cost for a Nonprofit?",
    answer:
      "Nonprofit animation cost depends on style, length, and complexity, and we work to scope projects that fit realistic nonprofit budgets rather than defaulting to corporate-level pricing.",
  },
  {
    question:
      "Can Small or Local Nonprofits Afford Professional Animation, or Is This Only for Large NGOs?",
    answer:
      "Small and local nonprofits can absolutely access professional animation. We scope projects around your actual budget, and shorter, simpler formats can be just as effective as a longer, more elaborate production.",
  },
  {
    question:
      "Are There Grants or Pro Bono Programs That Cover the Cost of Nonprofit Animation?",
    answer:
      "Some funders and creative agencies do offer grants or pro bono support for nonprofit media, though availability varies. We are happy to discuss your budget realities and scope a project that fits what funding you do have.",
  },
  {
    question:
      "What's the Difference Between an Explainer, a Documentary-Style, and a Testimonial Video?",
    answer:
      "An explainer video introduces your mission or program clearly and concisely, a documentary-style video tells a deeper narrative story, and a testimonial video centers on the voice of someone directly impacted by your work.",
  },
  {
    question:
      "Which Animation Style Works Best for a Nonprofit's Message and Budget?",
    answer:
      "2D animation and whiteboard styles tend to be more budget-friendly and work well for most explainer and awareness content, while 3D can add production value for flagship campaigns with a larger budget.",
  },
  {
    question: "How Can We Measure the Impact of a Nonprofit Animation?",
    answer:
      "Common measures include donation conversion on pages where the video appears, video completion rate, and volunteer sign-up or engagement lift following a campaign launch.",
  },
  {
    question:
      "Can a Nonprofit Animation Studio Create Content in Multiple Languages?",
    answer:
      "Yes. Voiceover and subtitles can be localized for international donors and the communities your organization serves, which is common for NGOs operating across multiple regions.",
  },
  {
    question:
      "Do You Offer Reduced Rates or Payment Plans for Registered Charities?",
    answer:
      "We are happy to discuss flexible scoping and payment structures for registered nonprofits, and we always start by understanding your actual budget before proposing an approach.",
  },
  {
    question:
      "Can Nonprofit Animation Be Used for Grant Applications and Funder Reporting?",
    answer:
      "Yes. Clear, professional video content can strengthen grant applications and funder reports by making program impact easier for reviewers to understand quickly.",
  },
  {
    question:
      "How Do You Handle Sensitive Subject Matter Respectfully in Animation?",
    answer:
      "We work closely with your team to represent sensitive situations accurately and respectfully, avoiding sensationalism while still communicating the real urgency and impact of the issue at hand.",
  },
  {
    question:
      "Can Nonprofit Animation Be Used for Volunteer Recruitment as Well as Fundraising?",
    answer:
      "Yes. The same storytelling approach that moves donors to give often works equally well for recruiting volunteers, and we can build content that speaks to both audiences.",
  },
  {
    question:
      "Do You Offer Shorter, Social-First Formats for Smaller Awareness Campaigns?",
    answer:
      "Yes. Short-form, social-first content is a cost-effective option for smaller campaigns, and it can be produced alongside or instead of a longer flagship video.",
  },
  {
    question:
      "Can We Reuse the Same Animation Across Multiple Fundraising Campaigns Over Time?",
    answer:
      "Yes. A well-built mission or impact video can be reused across multiple campaigns and giving seasons, extending its value well beyond a single fundraising push.",
  },
  {
    question:
      "Do You Work With Nonprofits on a Retainer for Ongoing Content Needs?",
    answer:
      "Yes. For organizations with recurring content needs throughout the year, a retainer arrangement can offer more predictable costs and priority scheduling than one-off projects.",
  },
  {
    question:
      "Can You Help Us Decide Which Stories From Our Program to Feature?",
    answer:
      "Yes. We can work with your team during discovery to identify which stories or statistics will resonate most with your specific donor audience and campaign goal.",
  },
  {
    question:
      "Do You Provide Both a Long-Form Documentary Cut and Short Social Versions?",
    answer:
      "Yes. Most campaign projects are built to produce a longer flagship version alongside shorter social cutdowns from the same core production.",
  },
  {
    question:
      "Do You Offer a Free Initial Consultation Before We Commit to a Project?",
    answer:
      "Yes. We start every relationship with a discovery conversation to understand your mission and budget before proposing an approach that respects both.",
  },
  {
    question:
      "Can Nonprofit Animation Help Us Communicate Impact to Board Members and Major Donors?",
    answer:
      "Yes. A clear, professional animation can be an effective way to summarize program impact for board meetings and major donor conversations, alongside your standard written annual reporting.",
  },
];

export default function FaqSection() {
  return (
    <GlobalFaqSection
      heading="Frequently Asked Questions"
      faqs={faqs}
    />
  );
}