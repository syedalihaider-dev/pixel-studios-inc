import TeamStandoutSection from "@/components/Common/TeamStandoutSection";
import Banner from "@/components/Common/Banner/Banner";
import CostSection from "@/components/Common/CostSection";
import ServicesSection from "@/components/Common/ServicesSection";

import WhyInvestSection from "@/components/Common/WhyInvestSection";
import CooperationModelsSection from "@/components/Common/CooperationModelsSection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import GreatVideosSection from "@/components/Common/GreatVideosSection";
import FaqSection from "@/components/Common/FaqSection";

const whyChooseSectionFeatures = [
  {
    id: 1,
    title: "Campaigns",
    description: "Full campaign animation built around a specific fundraising push, awareness month, or giving season your organization is planning.",
    icon: "/industry/services-icon-01.png",
  },
  {
    id: 2,
    title: "Donor Outreach",
    description: "Personalized and segment-specific content built to strengthen relationships with major donors and recurring supporters over time.",
    icon: "/industry/services-icon-02.png",
  }
];

const sliderItems = [
  {
    id: 1,
    title: "Fundraising Videos",
    description:
      "Emotionally resonant fundraising videos built for galas, campaigns, and giving days, designed to move an audience from awareness to action within a single sitting.",
    videoSrc:
      "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 2,
    title: "Explainer Videos",
    description:
      "Clear explainer videos introducing a mission, program, or cause to new supporters who are not yet familiar with your work or how it makes an impact.",
    videoSrc:
      "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 3,
    title: "Awareness Videos",
    description:
      "Campaign-ready awareness content built to reach a broad audience and build support for a cause or issue across every channel.",
    videoSrc:
      "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  },
  {
    id: 4,
    title: "Motion Graphics",
    description:
      "Data-driven motion graphics that make impact statistics and program outcomes easier to understand, share, and remember.",
    videoSrc:
      "https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
  }
];


const whyInvestAccordionData = [
  {
    id: 1,
    icon: "/discovery.png",
    title: "Discovery",
    content:
      "We review your mission, campaign goals, and budget to scope an approach that respects both from the start.",
  },
  {
    id: 2,
    icon: "/storyboarding.png",
    title: "Script & Concept",
    content:
      "A script and visual concept are developed around your organization's story and reviewed before design begins.",
  },
  {
    id: 3,
    icon: "/animation.png",
    title: "Storyboard",
    content:
      "Every scene is planned and approved before animation begins, so tone and pacing are locked in early.",
  },
  {
    id: 4,
    icon: "/animation.png",
    title: "Design",
    content:
      "Visual assets are built to match your brand and communicate your mission with care and clarity throughout.",
  },
  {
    id: 5,
    icon: "/animation.png",
    title: "Animation",
    content:
      "Full production, refined through your feedback rounds until the story feels exactly right for your audience.",
  },
  {
    id: 6,
    icon: "/animation.png",
    title: "Review & Delivery",
    content:
      "Final review and delivery in every format your campaign and fundraising channels require to succeed.",
  },
];

const cooperationModelsCards = [
    {
      id: 1,
      icon: "/game-development/outstaffing.png",
      title: "Industry Experience",
      text: "A nonprofit animation company experienced with organizations of every size, from local charities to international NGOs and everything between."
    },
    {
      id: 2,
      icon: "/game-development/dedicated-team.png",
      title: "Custom Solutions",
      text: "Every video starts from your actual mission and story, never a generic template repurposed from another cause."
    },
    {
      id: 3,
      icon: "/game-development/managed-outsourcing.png",
      title: "Fast Turnaround",
      text: "Timelines built around giving seasons, campaign launches, and grant deadlines your organization is already working toward."
    },
    {
      id: 4,
      icon: "/game-development/managed-outsourcing.png",
      title: "Dedicated Team",
      text: "One point of contact manages the project from concept through delivery, understanding your mission along the way."
    }
  ];

const title = (
    <>
      Let's Discuss Your <span>Non-Profit Animation</span> Project
    </>
  );

const text =
    "Talk to our team about your mission, your campaign, and your budget, and we will build the nonprofit animation that helps donors, volunteers, and communities understand why your work matters and how they can help, without stretching your budget past what is realistic for your organization.";

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

export const metadata = {
  title: "Non-Profit Animation Services | Pixel Studios",
  description: "Pixel Studios' non-profit animation services turn missions and campaigns into video that moves donors, volunteers, and communities to act.",
};

export default function NonProfitAnimationPage() {
  return (
    <main>
      <Banner
        title="Non-Profit Animation That Moves People to Act"
        description="A mission statement rarely moves a donor to give. A story does. Our non-profit animation services turn campaigns, missions, and impact stories into video built to reach donors, volunteers, and communities, scoped to fit the budget realities most non-profits actually work within. Every project is scoped around your actual funding, not a corporate production budget, so professional storytelling stays within reach regardless of your organization"
        video="/videos/home.webm"
        showPlayButton={true}
      />
      <CostSection
        subtitle="Non-Profit Animation"
        title="Why Animation Matters in the Non-Profit Industry?"
        description="Non-profits often try to communicate complex social or
                environmental issues on a marketing budget that is a fraction of
                what a comparable corporate campaign would spend, which makes
                professional-quality video feel out of reach for many
                organizations. Donor attention is limited and split across
                dozens of causes competing for the same giving dollars,
                sensitive subject matter needs to be handled with genuine care
                rather than exploited for shock value, and small teams
                frequently lack in-house production skills to create anything
                beyond a basic phone video. International or field-based work
                can also make live-action filming logistically difficult or
                unsafe, leaving gaps in an organization's ability to show its
                work visually, even when that work is exactly what would move a
                hesitant donor to give."
        videoSrc="https://player.vimeo.com/video/1064481379?dnt=1&background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
        bottomText="Nonprofit animation gives organizations a way to tell a compelling,
            professional story without the cost of a full live-action
            production crew and location shoot. Animated nonprofit videos can
            illustrate sensitive situations respectfully, without exposing real
            individuals, and can be produced regardless of where the actual
            work happens in the world. Nonprofits using animation for
            fundraising and awareness campaigns report stronger donor
            engagement, clearer communication of complex issues, and content
            that performs consistently across channels, from a gala
            presentation to a social media appeal, extending far beyond what a
            single-use live-action video could achieve with the same budget."
      />
      <ServicesSection 
        title="Animation Solutions for Non-Profits"
        description="What does a nonprofit animation company need to deliver on a limited budget? These four formats cover the full donor journey, from first awareness through a recurring gift, all scoped to fit realistic nonprofit budgets."
        sliderItems={sliderItems}
      />
            <TeamStandoutSection
        subtitle="Why Choose Us"
        title={<>Common Non-Profits <span>Animation</span> Projects</>}
        description="Most organizations use animation at two key moments in the donor relationship, each with a different tone and goal."
        features={whyChooseSectionFeatures}
      />
      <WhyInvestSection
        subtitle="HOW WE WORK"
        title={<>Our Non-Profits <br />Animation Process</>}
        description="Budget sensitivity matters as much as storytelling in this
                category, so our process is built to respect both from the first
                conversation."
        accordionData={whyInvestAccordionData}
      />
      <CooperationModelsSection
        title="Why Choose Pixel Studios?"
        description="A cause worth supporting deserves a story that actually lands. Here is how our studio helps nonprofits tell theirs well."
        cards={cooperationModelsCards}
      />
      <TestimonialSection />
      <GreatVideosSection
        title={title}
        text={text}
      />
      <FaqSection
        heading="Frequently Asked Questions"
        faqs={faqs}
      />
    </main>
  );
}
