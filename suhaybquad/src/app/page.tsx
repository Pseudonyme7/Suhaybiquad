import Hero from '@/components/Hero';
import FeaturedTours from '@/components/FeaturedTours';
import WhyUs from '@/components/WhyUs';
import Testimonials from '@/components/Testimonials';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturedTours />
        <WhyUs />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
