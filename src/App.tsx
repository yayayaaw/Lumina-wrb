import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { SignatureMenu } from './components/SignatureMenu';
import { DigitalMenu } from './components/DigitalMenu';
import { Gallery } from './components/Gallery';
import { Promos } from './components/Promos';
import { Testimonials } from './components/Testimonials';
import { Location } from './components/Location';
import { Faq } from './components/Faq';
import { SocialFollow } from './components/SocialFollow';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Toast } from './components/Toast';

// Subpages
import { GalleryPage } from './components/pages/GalleryPage';
import { MenuPage } from './components/pages/MenuPage';
import { AboutPage } from './components/pages/AboutPage';
import { CareerPage } from './components/pages/CareerPage';
import { ReservationPage } from './components/pages/ReservationPage';
import { CmsPage } from './components/pages/CmsPage';
import { PageType } from './types';
import { SiteProvider } from './context/SiteContext';

function AppContent() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pdfToast, setPdfToast] = useState(false);

  // Scroll listener for navbar background with passive listener & RAF for zero lag
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 30);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle page navigation & in-page scrolling
  const handleNavigatePage = (page: PageType, sectionId?: string) => {
    setMobileMenuOpen(false);

    if (page !== currentPage) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });

      if (page === 'home' && sectionId && sectionId !== 'root') {
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) {
            const topOffset = el.getBoundingClientRect().top + window.pageYOffset - 80;
            window.scrollTo({ top: topOffset, behavior: 'smooth' });
          }
        }, 150);
      }
      return;
    }

    // Already on the same page
    if (page === 'home') {
      if (!sectionId || sectionId === 'root') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const el = document.getElementById(sectionId);
        if (el) {
          const topOffset = el.getBoundingClientRect().top + window.pageYOffset - 80;
          window.scrollTo({ top: topOffset, behavior: 'smooth' });
        }
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleDownloadPdf = (e: React.MouseEvent) => {
    e.preventDefault();
    setPdfToast(true);
    setTimeout(() => setPdfToast(false), 4000);
  };

  return (
    <div className="font-sans text-[#2C2A29] bg-[#F9F8F6] min-h-screen selection:bg-[#8C7A6B] selection:text-white flex flex-col justify-between">
      {/* Toast Notification */}
      <Toast show={pdfToast} />

      {/* Global Navigation Bar */}
      <Navbar
        isScrolled={isScrolled}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        currentPage={currentPage}
        onNavigatePage={handleNavigatePage}
      />

      {/* Main View Router */}
      <main className="flex-1">
        {currentPage === 'cms' && (
          <CmsPage 
            onBackToHome={() => handleNavigatePage('home')} 
            onPreviewSection={(sec) => handleNavigatePage('home', sec)}
          />
        )}

        {currentPage === 'gallery' && (
          <GalleryPage onBackToHome={() => handleNavigatePage('home', 'gallery')} />
        )}

        {currentPage === 'menu' && (
          <MenuPage
            onBackToHome={() => handleNavigatePage('home', 'menu')}
            onScrollToReservation={() => handleNavigatePage('reservation')}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onBackToHome={() => handleNavigatePage('home', 'about')}
            onNavigateToMenu={() => handleNavigatePage('menu')}
            onNavigateToGallery={() => handleNavigatePage('gallery')}
          />
        )}

        {currentPage === 'career' && (
          <CareerPage onBackToHome={() => handleNavigatePage('home')} />
        )}

        {currentPage === 'reservation' && (
          <ReservationPage 
            onBackToHome={() => handleNavigatePage('home')} 
            onNavigateToMenu={() => handleNavigatePage('menu')}
          />
        )}

        {currentPage === 'home' && (
          <>
            {/* 1. Hero Section */}
            <Hero />

            {/* 2. About Preview */}
            <About onNavigateToAbout={() => handleNavigatePage('about')} />

            {/* 3. Signature Menu Highlights */}
            <SignatureMenu onOrderClick={() => handleNavigatePage('menu')} />

            {/* 4. Digital Menu Preview */}
            <DigitalMenu
              onDownloadPdf={handleDownloadPdf}
              onNavigateToMenu={() => handleNavigatePage('menu')}
            />

            {/* 5. Gallery Atmosphere */}
            <Gallery onNavigateToGallery={() => handleNavigatePage('gallery')} />

            {/* 6. Promo & Events */}
            <Promos />

            {/* 7. Testimonials (Kata Mereka) */}
            <Testimonials />

            {/* 8. Location & Map */}
            <Location />

            {/* 9. FAQ */}
            <Faq />

            {/* 10. Follow Our Journey */}
            <SocialFollow />
          </>
        )}
      </main>

      {/* Global Footer (hide on CMS page for a clean studio dashboard experience) */}
      {currentPage !== 'cms' && <Footer onNavigatePage={handleNavigatePage} />}

      {/* Floating WhatsApp Quick Action */}
      {currentPage !== 'cms' && <FloatingWhatsApp />}
    </div>
  );
}

export default function App() {
  return (
    <SiteProvider>
      <AppContent />
    </SiteProvider>
  );
}


