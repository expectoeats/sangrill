"use client";

import { Navbar } from "@/components/ui/navbar";
import { HeroSlider } from "@/components/ui/hero-slider";
import { PhilosophySection } from "@/components/ui/philosophy-section";
import { MenuGrid } from "@/components/ui/menu-grid";
import { ChefSection } from "@/components/ui/chef-section";
import { GallerySection } from "@/components/ui/gallery-section";
import { TestimonialsSection } from "@/components/ui/testimonials-section";
import { BookingWizard } from "@/components/ui/booking-wizard";
import { Footer } from "@/components/ui/footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* Navigation */}
      <Navbar />

      {/* Hero */}
      <HeroSlider />

      {/* Philosophy / About */}
      <PhilosophySection />

      {/* Menu */}
      <MenuGrid />

      {/* Chef Story */}
      <ChefSection />

      {/* Gallery */}
      <GallerySection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Reservation */}
      <BookingWizard />

      {/* Footer */}
      <Footer />
    </main>
  );
}
