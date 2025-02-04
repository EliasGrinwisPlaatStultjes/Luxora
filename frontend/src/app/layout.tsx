import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Plane } from "lucide-react";
import { Button } from "@/components/ui/button";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Luxora - Your Next Adventure Awaits',
  description: 'Discover and book amazing travel experiences around the world',
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en">
      <body className={inter.className}>
      <header className="fixed w-full z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3">
              <div className="bg-primary/10 p-2 rounded-lg">
                <Plane className="h-6 w-6 text-primary" />
              </div>
              <span className="text-xl font-bold">Luxora</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-foreground/80 hover:text-foreground transition-colors">Destinations</a>
              <a href="#" className="text-foreground/80 hover:text-foreground transition-colors">Experiences</a>
              <a href="#" className="text-foreground/80 hover:text-foreground transition-colors">About</a>
              <a href="#" className="text-foreground/80 hover:text-foreground transition-colors">Contact</a>
              <Button className="bg-primary hover:bg-primary/90 text-white">Book Now</Button>
            </nav>
          </div>
        </div>
      </header>
      {children}
      <footer className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Plane className="h-6 w-6 text-primary" />
                </div>
                <span className="text-xl font-bold">Wanderlust</span>
              </div>
              <p className="text-muted-foreground">Creating unforgettable journeys and lifetime memories through exceptional travel experiences.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">About Us</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Destinations</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Travel Guides</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-6">Support</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">FAQs</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Support Center</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-6">Newsletter</h3>
              <p className="text-muted-foreground mb-6">Subscribe for travel tips and exclusive offers straight to your inbox.</p>
              <div className="space-y-4">
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 rounded-lg border bg-white/50 backdrop-blur-sm"
                />
                <Button className="w-full bg-primary hover:bg-primary/90 text-white">Subscribe</Button>
              </div>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t text-center text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Wanderlust. All rights reserved.</p>
          </div>
        </div>
      </footer>
      </body>
      </html>
  );
}