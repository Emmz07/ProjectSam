import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-screen relative flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <div className="container mx-9 px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-6">
            Crafting <span className='text-indigo-500'>Exceptional</span> Living Spaces
          </h1>
          <p className="text-lg md:text-xl my-3 text-gray-200 mb-8">
            Award-winning real estate developer and architectural designer specializing in luxury homes and commercial spaces.
          </p>
          <div className="flex flex-col mt-4 sm:flex-row gap-4">
            <Button size="lg" className="text-lg font-semibold bg-indigo-500">
              Contact Me
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}