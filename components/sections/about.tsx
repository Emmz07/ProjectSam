import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Users, Building } from 'lucide-react';
import { FadeIn } from '@/components/animations/fade-in';

const stats = [
  {
    icon: Building,
    value: "150+",
    label: "Projects Completed"
  },
  {
    icon: Award,
    value: "25+",
    label: "Awards Won"
  },
  {
    icon: Users,
    value: "1000+",
    label: "Happy Clients"
  }
];

export function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <div>
              <h2 className="font-playfair text-4xl font-bold mb-6">
                Transforming Visions into Architectural Reality
              </h2>
              <p className="text-muted-foreground mb-6">
                With over two decades of experience in real estate development and architectural design,
                we've established ourselves as industry leaders in creating exceptional living spaces
                and commercial developments.
              </p>
              <p className="text-muted-foreground mb-8">
                Our commitment to innovation, sustainability, and unparalleled quality has earned us
                recognition across the industry and the trust of our valued clients.
              </p>
              <Button size="lg">Learn More</Button>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <FadeIn key={index} delay={index * 0.2}>
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <stat.icon className="h-8 w-8 mx-auto mb-4 text-primary" />
                    <div className="text-3xl font-bold mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}