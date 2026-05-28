"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import BlogCardThree from '@/components/sections/blog/BlogCardThree';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureHoverPattern from '@/components/sections/feature/featureHoverPattern/FeatureHoverPattern';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroSplitDualMedia from '@/components/sections/hero/HeroSplitDualMedia';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import { BookOpen, Heart, Leaf, Package } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="directional-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="small"
        sizing="largeSmallSizeLargeTitles"
        background="noise"
        cardStyle="subtle-shadow"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="layered"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",
          id: "#home",
        },
        {
          name: "About",
          id: "#about",
        },
        {
          name: "Features",
          id: "#features",
        },
        {
          name: "Products",
          id: "#products",
        },
        {
          name: "Testimonials",
          id: "#testimonials",
        },
        {
          name: "FAQ",
          id: "#faq",
        },
        {
          name: "Blog",
          id: "#blog",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=ouaynr"
      logoAlt="Unani Ayurved Logo"
      brandName="Unani Ayurved"
    />
  </div>

  <div id="home" data-section="home">
      <HeroSplitDualMedia
      background={{
        variant: "radial-gradient",
      }}
      title="Authentic Unani & Ayurvedic Wellness, Delivered"
      description="Access timetested remedies and expert consultations from certified practitioners. Experience holistic healing grounded in centuries of tradition."
      tag="Holistic Healing"
      tagAnimation="slide-up"
      buttons={[
        {
          text: "Begin Your Wellness Journey",
          href: "#contact",
        },
      ]}
      buttonAnimation="slide-up"
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-medicinal-spices-herbs_23-2148776450.jpg",
          imageAlt: "Traditional Ayurvedic herbs and ingredients",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/woman-enjoying-aromatherapy_1098-1295.jpg",
          imageAlt: "Ayurvedic practitioner consulting with a patient",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/flat-lay-phytotherapy-still-life_23-2149339717.jpg",
          imageAlt: "Flat lay phytotherapy still life",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/flat-lay-wooden-spoons-with-plants_23-2149339711.jpg",
          imageAlt: "Flat lay wooden spoons with plants",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/fruit-infused-water-teapot-with-dried-apricots-herbs-cherry-stalks-flat-lay-plaster-surface_176474-6355.jpg",
          imageAlt: "Fruit infused water in a teapot with dried apricots, herbs, cherry stalks flat lay on a plaster surface",
        },
      ]}
      mediaAnimation="blur-reveal"
      rating={5}
      ratingText="Trusted by thousands"
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={false}
      heading={[
        {
          type: "text",
          content: "Our Roots in Ancient Wisdom",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/spoon-with-indian-traditional-spice_23-2148295001.jpg",
          alt: "Ayurvedic herbs and ingredients",
        },
        {
          type: "text",
          content: "of Unani and Ayurvedic Healing",
        },
      ]}
      buttons={[
        {
          text: "Learn More About Us",
          href: "#",
        },
      ]}
      description="Unani Ayurved is dedicated to bringing authentic, time-tested traditional remedies to modern life. We connect you with certified practitioners and ethically sourced products, ensuring a holistic path to wellness grounded in centuries of tradition and natural science. Our platform is built on transparency, trust, and personalized care."
    />
  </div>

  <div id="features" data-section="features">
      <FeatureHoverPattern
      animationType="scale-rotate"
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          icon: Leaf,
          title: "Authentic Remedies",
          description: "Discover a curated selection of genuine Unani and Ayurvedic formulations.",
        },
        {
          icon: Heart,
          title: "Expert Consultations",
          description: "Connect with certified practitioners for personalized health guidance.",
        },
        {
          icon: Package,
          title: "Ethically Sourced Products",
          description: "Access high-quality wellness products with transparent ingredient sourcing.",
        },
        {
          icon: BookOpen,
          title: "Knowledge Hub",
          description: "Explore a rich library of resources on traditional medicine and holistic living.",
        },
      ]}
      title="Our Holistic Approach to Wellness"
      description="Discover the pillars of natural health through our comprehensive Unani and Ayurvedic offerings."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      products={[
        {
          id: "1",
          brand: "Unani Essentials",
          name: "Herbal Detox Blend",
          price: "$29.99",
          rating: 5,
          reviewCount: "120 reviews",
          imageSrc: "http://img.b2bpic.net/free-photo/life-style_1122-1841.jpg",
          imageAlt: "Herbal Detox Blend",
        },
        {
          id: "2",
          brand: "Ayurveda Pure",
          name: "Immunity Elixir Capsules",
          price: "$34.50",
          rating: 4,
          reviewCount: "85 reviews",
          imageSrc: "http://img.b2bpic.net/free-photo/brown-plastic-supplement-bottle-with-green-cap_187299-47250.jpg",
          imageAlt: "Immunity Elixir Capsules",
        },
        {
          id: "3",
          brand: "Unani & Co.",
          name: "Digestive Harmony Tea",
          price: "$18.00",
          rating: 5,
          reviewCount: "150 reviews",
          imageSrc: "http://img.b2bpic.net/free-photo/green-smoothie-jar-with-lime-kiwi-berry_169016-4933.jpg",
          imageAlt: "Digestive Harmony Tea",
        },
        {
          id: "4",
          brand: "Ancient Skin",
          name: "Radiant Glow Face Cream",
          price: "$45.00",
          rating: 4,
          reviewCount: "92 reviews",
          imageSrc: "http://img.b2bpic.net/free-photo/smiley-elder-woman-using-face-mask_23-2148672373.jpg",
          imageAlt: "Radiant Glow Face Cream",
        },
        {
          id: "5",
          brand: "Vital Roots",
          name: "Joint Support Formula",
          price: "$39.99",
          rating: 5,
          reviewCount: "70 reviews",
          imageSrc: "http://img.b2bpic.net/free-photo/boomers-using-cbd-oil-cream-treating-body-pain_23-2151263431.jpg",
          imageAlt: "Joint Support Formula",
        },
        {
          id: "6",
          brand: "Hair Nirvana",
          name: "Nourishing Scalp Oil",
          price: "$22.75",
          rating: 4,
          reviewCount: "110 reviews",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-elegant-beauty-selfcare-treatment_23-2149238281.jpg",
          imageAlt: "Nourishing Scalp Oil",
        },
      ]}
      title="Explore Our Authentic Remedies & Wellness Products"
      description="Hand-picked, ethically sourced products for your natural health journey."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardOne
      animationType="depth-3d"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      carouselMode="buttons"
      testimonials={[
        {
          id: "1",
          name: "Priya Sharma",
          role: "Wellness Enthusiast",
          company: "AyurLife Community",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/outdoor-view-happy-lovely-young-female-fitness-trainer-prepares-master-class-involved-active-training-likes-going-sport-better-vitality-flexibility-active-lifestyle_273609-2200.jpg",
          imageAlt: "Priya Sharma",
        },
        {
          id: "2",
          name: "Rajesh Kumar",
          role: "Chronic Pain Sufferer",
          company: "Natural Health Advocates",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/feedback-results-information-satisfeaction_53876-121339.jpg",
          imageAlt: "Rajesh Kumar",
        },
        {
          id: "3",
          name: "Dr. Amina Begum",
          role: "Unani Practitioner",
          company: "Holistic Healing Clinic",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/girl-celebrating-end-quarantine_23-2148639740.jpg",
          imageAlt: "Dr. Amina Begum",
        },
        {
          id: "4",
          name: "Sophie Chen",
          role: "Yoga Instructor",
          company: "Mindful Living Studio",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-woman-shaking-head_23-2147711304.jpg",
          imageAlt: "Sophie Chen",
        },
        {
          id: "5",
          name: "David Miller",
          role: "Researcher",
          company: "Ethnobotany Institute",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/slender-woman-doing-yoga-exercise-nature_651396-2300.jpg",
          imageAlt: "David Miller",
        },
      ]}
      title="Voices of Wellness: Our Community's Journey"
      description="Hear how Unani Ayurved has transformed lives through natural healing and expert guidance."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "1",
          title: "What is the difference between Unani and Ayurveda?",
          content: "Both Unani and Ayurveda are ancient holistic medical systems originating from different regions. Unani, derived from Greek medicine, focuses on balancing the body's four humors. Ayurveda, from India, emphasizes balancing the three doshas (Vata, Pitta, Kapha). While distinct, both share principles of natural healing and personalized care.",
        },
        {
          id: "2",
          title: "How do you ensure product quality and authenticity?",
          content: "We partner directly with certified manufacturers and traditional farms that adhere to strict quality control standards. Our products undergo rigorous testing for purity, potency, and absence of contaminants. We prioritize transparent sourcing and traditional preparation methods to guarantee authenticity.",
        },
        {
          id: "3",
          title: "Can I get a personalized consultation online?",
          content: "Yes, our platform offers secure online consultations with experienced Unani and Ayurvedic practitioners. You can book a session, discuss your health concerns, and receive personalized recommendations for remedies, diet, and lifestyle adjustments from the comfort of your home.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/young-woman-reading-nature_23-2148523921.jpg"
      imageAlt="Person reading a book on traditional medicine"
      mediaAnimation="blur-reveal"
      mediaPosition="left"
      title="Your Questions, Answered"
      description="Find clarity on traditional medicine, product quality, and personalized consultation options."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="blog" data-section="blog">
      <BlogCardThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      carouselMode="buttons"
      title="Insights from Ancient Wisdom"
      description="Delve into articles on Unani and Ayurvedic practices, health tips, and traditional remedies."
      blogs={[
        {
          id: "1",
          category: "Ayurveda",
          title: "The Power of Turmeric in Ayurvedic Healing",
          excerpt: "Explore the incredible benefits of this golden spice, from anti-inflammatory properties to immune support.",
          imageSrc: "http://img.b2bpic.net/free-photo/high-view-rustic-kitchen-objects-with-seeds_23-2148536700.jpg",
          imageAlt: "Ayurvedic herbs spices bowl",
          authorName: "Dr. Kavita Desai",
          authorAvatar: "http://img.b2bpic.net/free-photo/portrait-beautiful-cute-blond-teenager-model-without-makeup-summer-hipster-white-dress-clothes-posing-street-background-touching-her-hair_158538-12801.jpg",
          date: "July 15, 2024",
        },
        {
          id: "2",
          category: "Unani",
          title: "Balancing Your Humors: An Introduction to Unani Principles",
          excerpt: "Understand the concept of humors and how to maintain balance for optimal health and vitality.",
          imageSrc: "http://img.b2bpic.net/free-photo/tablet-near-asian-dishes_23-2147747038.jpg",
          imageAlt: "Yoga meditation peaceful setting",
          authorName: "Hakeem Tariq Khan",
          authorAvatar: "http://img.b2bpic.net/free-psd/investment-instagram-stories-template-illustrated_23-2149042520.jpg",
          date: "July 10, 2024",
        },
        {
          id: "3",
          category: "Wellness",
          title: "Mindful Living: Integrating Traditional Practices Daily",
          excerpt: "Simple ways to incorporate Ayurvedic and Unani wisdom into your daily routine for sustained well-being.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-attractive-woman-drinking-juice-kitchen_1163-2007.jpg",
          imageAlt: "Person drinking herbal tea relax",
          authorName: "Sarah Johnson",
          authorAvatar: "http://img.b2bpic.net/free-photo/front-view-woman-outdoors-portrait_23-2150828878.jpg",
          date: "July 01, 2024",
        },
      ]}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Connect with Our Wellness Experts"
      description="Reach out for personalized guidance, product inquiries, or consultation bookings. Our team is here to support your holistic health journey."
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Your Name",
          required: true,
        },
        {
          name: "email",
          type: "email",
          placeholder: "Your Email",
          required: true,
        },
        {
          name: "subject",
          type: "text",
          placeholder: "Subject",
          required: false,
        },
      ]}
      textarea={{
        name: "message",
        placeholder: "Your Message",
        rows: 5,
        required: true,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/blond-ethnic-coworkers-working-with-laptop_23-2148180691.jpg"
      imageAlt="Customer service representative with headset"
      mediaAnimation="blur-reveal"
      mediaPosition="right"
      buttonText="Send Your Inquiry"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=ouaynr"
      logoAlt="Unani Ayurved Logo"
      logoText="Unani Ayurved"
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Our Mission",
              href: "#",
            },
            {
              label: "Careers",
              href: "#",
            },
          ],
        },
        {
          title: "Services",
          items: [
            {
              label: "Consultations",
              href: "#features",
            },
            {
              label: "Products",
              href: "#products",
            },
            {
              label: "Remedies",
              href: "#products",
            },
          ],
        },
        {
          title: "Resources",
          items: [
            {
              label: "Blog",
              href: "#blog",
            },
            {
              label: "FAQ",
              href: "#faq",
            },
            {
              label: "Case Studies",
              href: "#",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "Contact Us",
              href: "#contact",
            },
            {
              label: "Help Center",
              href: "#",
            },
            {
              label: "Privacy Policy",
              href: "#",
            },
          ],
        },
      ]}
      copyrightText="© 2024 Unani Ayurved. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
