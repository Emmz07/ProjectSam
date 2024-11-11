import { Hero } from '@/components/sections/hero';
import { Projects } from '@/components/sections/projects';
import { Services } from '@/components/sections/services';
import { About } from '@/components/sections/about';
import { Contact } from '@/components/sections/contact';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <Projects />
      <Services />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}