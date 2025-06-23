
import HeaderTop from '@/components/HeaderTop';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import UploadSection from '@/components/UploadSection';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-950 transition-all duration-1000">
      <div className="dark:bg-gradient-to-br dark:from-purple-950 dark:via-indigo-950 dark:to-slate-900 min-h-screen">
        <HeaderTop />
        <Header />
        <Hero />
        <Features />
        <HowItWorks />
        <UploadSection />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
