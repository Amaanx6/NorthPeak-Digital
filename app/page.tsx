import Navbar from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Metrics } from "@/components/metrics";
import { Services } from "@/components/services";
import { FeaturedWork } from "@/components/featured-work";
import { Testimonials } from "@/components/testimonials";
import { Pricing } from "@/components/pricing";
import { Contact } from "@/components/contact";
import { CtaBanner } from "@/components/cta-banner";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Metrics />
        <Services />
        <FeaturedWork />
        <Testimonials />
        <Pricing />
        <Contact />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
