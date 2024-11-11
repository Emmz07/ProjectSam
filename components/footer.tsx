import { Instagram, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-playfair font-bold mb-4">Alexander Wright</h3>
            <p className="text-muted-foreground mb-4">
              Crafting exceptional living spaces and architectural masterpieces that define luxury living.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#projects" className="text-muted-foreground hover:text-primary">
                  Projects
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Office Hours</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Monday - Friday</li>
              <li>9:00 AM - 6:00 PM</li>
              <li>Weekend by appointment</li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center text-muted-foreground">
          <p>&copy; {currentYear} Alexander Wright. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}