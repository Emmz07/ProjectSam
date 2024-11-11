import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FadeIn } from '@/components/animations/fade-in';

const projects = [
  {
    id: 1,
    title: "The Azure Heights",
    category: "Luxury Residential",
    location: "Beverly Hills, CA",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3",
    description: "A modern masterpiece featuring panoramic views and sustainable design",
    year: "2023"
  },
  {
    id: 2,
    title: "Emerald Plaza",
    category: "Commercial",
    location: "Manhattan, NY",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3",
    description: "Mixed-use development combining retail and office spaces",
    year: "2022"
  },
  {
    id: 3,
    title: "The Oasis",
    category: "Residential Complex",
    location: "Miami, FL",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3",
    description: "Luxury apartment complex with resort-style amenities",
    year: "2023"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground">
              A showcase of our most prestigious developments and architectural achievements
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <FadeIn key={project.id} delay={index * 0.2}>
              <Card className="group overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Badge variant="secondary" className="text-lg font-medium">
                        View Project
                      </Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <Badge variant="outline" className="mb-3">
                      {project.category}
                    </Badge>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <div className="flex justify-between items-center text-sm">
                      <span>{project.location}</span>
                      <span className="text-muted-foreground">{project.year}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}