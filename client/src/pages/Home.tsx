import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/hero";
import Stats from "../components/home/Stats";
import ServicesSection from "../components/home/ServicesSection";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Testimonials from "../components/home/Testimonials";
import Industries from "../components/home/Industries";
import PortfolioPreview from "../components/home/PortfolioPreview";
import FAQ from "../components/home/FAQ";
import CTA from "../components/home/CTA";
import Footer from "../components/home/Footer";
import FloatingButtons from "../components/layout/FloatingButtons";
import TrustedClients from "../components/home/TrustedClients";
import GoogleReviews from "../components/home/GoogleReviews";
import ProcessSection from "../components/home/ProcessSection";
import QuoteBanner from "../components/home/QuoteBanner";


export default function Home() {
  return (
    <>
        <Navbar />
        <Hero />
        <Stats />
        <TrustedClients />
        <ServicesSection />
        <WhyChooseUs />
        <ProcessSection />
        <PortfolioPreview />
        <Industries />
        <Testimonials />
        <GoogleReviews/>
        <FAQ />
        <QuoteBanner/>
        <FloatingButtons />
        <CTA />
        <Footer />
    </>
  );
}