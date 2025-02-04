"use client";

import { Plane, Map, Users, Star, ArrowRight, TreePalm as PalmTree } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

export default function Home() {
  return (
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="min-h-screen relative bg-background pt-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center py-12">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <Plane className="h-4 w-4 text-primary animate-pulse" />
                  <span className="text-sm font-medium text-primary">The world awaits you</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold leading-[1.1]">
                  Discover Your
                  <span className="text-primary block mt-2">Next Adventure</span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  Experience extraordinary destinations that will take your breath away. Let us guide you to the world&apos;s most remarkable places.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                    Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button size="lg" variant="outline">
                    View Destinations
                  </Button>
                </div>
                <div className="flex items-center gap-8 pt-8">
                  <div>
                    <p className="text-3xl font-bold">2M+</p>
                    <p className="text-muted-foreground">Happy Travelers</p>
                  </div>
                  <div className="w-px h-12 bg-border" />
                  <div>
                    <p className="text-3xl font-bold">150+</p>
                    <p className="text-muted-foreground">Destinations</p>
                  </div>
                  <div className="w-px h-12 bg-border" />
                  <div>
                    <p className="text-3xl font-bold">98%</p>
                    <p className="text-muted-foreground">Satisfaction</p>
                  </div>
                </div>
              </div>
              <div className="relative grid grid-cols-2 gap-4 lg:gap-6">
                <div className="space-y-4 lg:space-y-6">
                  <AspectRatio ratio={3/4} className="rounded-2xl overflow-hidden">
                    <Image
                        src="https://images.unsplash.com/photo-1602002418082-a4443e081dd1?q=80&w=1974"
                        alt="Tropical Paradise"
                        className="object-cover w-full h-full"
                        width={1974}
                        height={2632}
                    />
                  </AspectRatio>
                  <AspectRatio ratio={1} className="rounded-2xl overflow-hidden">
                    <Image
                        src="https://images.unsplash.com/photo-1512100356356-de1b84283e18?q=80&w=1975"
                        alt="Mountain Adventure"
                        className="object-cover w-full h-full"
                        width={1975}
                        height={1975}
                    />
                  </AspectRatio>
                </div>
                <div className="space-y-4 lg:space-y-6 pt-8">
                  <AspectRatio ratio={1} className="rounded-2xl overflow-hidden">
                    <Image
                        src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=2049"
                        alt="Luxury Hotel"
                        className="object-cover w-full h-full"
                        width={2049}
                        height={2049}
                    />
                  </AspectRatio>
                  <AspectRatio ratio={3/4} className="rounded-2xl overflow-hidden">
                    <Image
                        src="https://images.unsplash.com/photo-1509233725247-49e657c54213?q=80&w=1949"
                        alt="Beach Sunset"
                        className="object-cover w-full h-full"
                        width={1949}
                        height={1462}
                    />
                  </AspectRatio>
                </div>
                <div className="absolute -z-10 top-1/2 right-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl" />
              </div>
            </div>

            {/* Current Deals */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 mb-24">
              {[
                {
                  destination: "Santorini",
                  discount: "20% OFF",
                  image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?q=80&w=2070"
                },
                {
                  destination: "Bali",
                  discount: "Early Bird",
                  image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2070"
                },
                {
                  destination: "Maldives",
                  discount: "Free Upgrade",
                  image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=2070"
                }
              ].map((deal, index) => (
                  <Card key={index} className="group relative overflow-hidden">
                    <AspectRatio ratio={16/9}>
                      <Image
                          src={deal.image}
                          alt={deal.destination}
                          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                          width={2070}
                            height={1163}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      <div className="absolute inset-0 p-6 flex flex-col justify-between">
                        <div className="bg-primary/90 text-white px-3 py-1 rounded-full text-sm font-medium self-start">
                          {deal.discount}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">{deal.destination}</h3>
                          <Button variant="outline" className="bg-white/10 hover:bg-white/20 border-white/50 text-white">
                            View Deal
                          </Button>
                        </div>
                      </div>
                    </AspectRatio>
                  </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-background relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074')] opacity-5" />
          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">We create unforgettable experiences tailored to your dreams</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 text-center transform hover:-translate-y-1 transition-transform duration-300">
                <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Map className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Curated Destinations</h3>
                <p className="text-muted-foreground">Discover hidden gems and iconic locations carefully selected for unforgettable memories</p>
              </div>
              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 text-center transform hover:-translate-y-1 transition-transform duration-300">
                <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Local Expertise</h3>
                <p className="text-muted-foreground">Connect with passionate local guides who share authentic experiences</p>
              </div>
              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 text-center transform hover:-translate-y-1 transition-transform duration-300">
                <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <PalmTree className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Luxury Experience</h3>
                <p className="text-muted-foreground">Indulge in premium accommodations and exclusive activities</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Destinations */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Featured Escapes</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Explore our hand-picked selection of dream destinations</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Maldives Paradise",
                  image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=2070",
                  price: "From $2,499",
                  description: "Crystal clear waters and overwater villas"
                },
                {
                  title: "Amalfi Coast, Italy",
                  image: "https://images.unsplash.com/photo-1633321088355-d0f81134ca3b?q=80&w=2070",
                  price: "From $1,899",
                  description: "Coastal charm and Mediterranean beauty"
                },
                {
                  title: "Swiss Alps",
                  image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?q=80&w=2070",
                  price: "From $2,199",
                  description: "Mountain majesty and alpine luxury"
                }
              ].map((destination, index) => (
                  <Card key={index} className="overflow-hidden group border-0 shadow-lg">
                    <div className="relative h-80">
                      <Image
                          src={destination.image}
                          alt={destination.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          width={2070}
                          height={1163}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="text-2xl font-semibold mb-2">{destination.title}</h3>
                        <p className="text-white/80 mb-3">{destination.description}</p>
                        <p className="text-primary-foreground font-medium bg-primary/90 inline-block px-3 py-1 rounded-full text-sm">
                          {destination.price}
                        </p>
                      </div>
                    </div>
                  </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-background relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074')] opacity-5" />
          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Traveler Stories</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Hear what our adventurers have to say</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  name: "Emma Thompson",
                  location: "Maldives Trip",
                  text: "An absolute dream come true! The attention to detail and personalized service made our honeymoon perfect in every way.",
                  rating: 5,
                  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200"
                },
                {
                  name: "David Chen",
                  location: "Swiss Alps Adventure",
                  text: "Exceptional planning and execution. Every moment was magical, from the luxury accommodations to the private tours.",
                  rating: 5,
                  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200"
                }
              ].map((testimonial, index) => (
                  <Card key={index} className="p-8 bg-white/50 backdrop-blur-sm">
                    <div className="flex items-start gap-4 mb-6">
                      <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover"
                            width={200}
                            height={200}
                      />
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-muted-foreground text-sm">{testimonial.location}</p>
                      </div>
                    </div>
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-muted-foreground">{testimonial.text}</p>
                  </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 overflow-hidden">
          <div
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=2068')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
          >
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready for Your Dream Vacation?</h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">Let us create an unforgettable journey tailored just for you</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                Start Planning Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 border-white/50">
                View Special Offers
              </Button>
            </div>
          </div>
        </section>
      </main>
  );
}