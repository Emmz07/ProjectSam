import {
    Building2,
    PenTool,
    Home,
    Briefcase,
    TreePine,
    Shield
  } from 'lucide-react';
  import { Card, CardContent } from '@/components/ui/card';
  import { FadeIn } from '@/components/animations/fade-in';
  
  const services = [
    {
      icon: Building2,
      title: "Architectural Design",
      description: "Custom architectural solutions tailored to your vision and needs"
    },
    {
      icon: Home,
      title: "Residential Development",
      description: "Luxury homes and residential complexes built to perfection"
    },
    {
      icon: Briefcase,
      title: "Commercial Projects",
      description: "Modern office spaces and retail developments"
    },
    {
      icon: PenTool,
      title: "Interior Design",
      description: "Sophisticated interior designs that complement the architecture"
    },
    {
      icon: TreePine,
      title: "Property Sales",
      description: "Eco-friendly solutions and green building practices"
    },
    {
      icon: Shield,
      title: "Project Management",
      description: "End-to-end project oversight and coordination"
    }
  ];
  
  export function Services() {
    return (
      <section id="services" className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="font-playfair text-4xl font-bold mb-4">Our Services</h2>
              <p className="text-muted-foreground">
                Comprehensive real estate development and architectural services
              </p>
            </div>
          </FadeIn>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <Card className="group hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="mb-6">
                      <service.icon className="h-12 w-12 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    );
  }