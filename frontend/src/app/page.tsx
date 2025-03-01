"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Globe2, Heart, MapPin, Plane, Search, Star, Users, Palmtree as PalmtreeFill } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
      <div className="min-h-screen bg-background">
        {/* Sticky Header */}
        <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b">
          <div className="container mx-auto">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="bg-primary/10 p-2 rounded-full">
                  <PalmtreeFill className="h-6 w-6 text-primary" />
                </div>
                <span className="text-xl font-bold">TravelPal</span>
              </div>

              <nav className="hidden md:flex items-center gap-8">
                <a href="#destinations" className="text-sm font-medium hover:text-primary transition-colors">
                  Popular Destinations
                </a>
                <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">
                  Features
                </a>
                <a href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">
                  Testimonials
                </a>
                <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">
                  Pricing
                </a>
              </nav>

              <div className="flex items-center gap-4">
                <Button variant="ghost" asChild>
                  <Link href="/login">Sign In</Link>
                </Button>
                <Button asChild>
                  <Link href="/register">Get Started</Link>
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
          <div className="container mx-auto px-4 py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative z-10">
                <Badge className="mb-4" variant="secondary">
                  #1 Travel Planning Platform
                </Badge>
                <h1 className="text-5xl font-bold mb-6">
                  Your Journey Begins with{" "}
                  <span className="text-primary">TravelPal</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Plan your dream trips, connect with fellow travelers, and explore the world like never before. Let's make your travel dreams a reality.
                </p>

                <div className="bg-card shadow-lg rounded-2xl p-4 mb-8">
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div className="col-span-2">
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                        <Input
                            className="pl-10"
                            placeholder="Where do you want to go?"
                        />
                      </div>
                    </div>
                    <Button className="w-full">
                      <Search className="mr-2 h-4 w-4" /> Explore
                    </Button>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                        <img
                            key={i}
                            src={`https://i.pravatar.cc/48?img=${i}`}
                            alt={`User ${i}`}
                            className="w-10 h-10 rounded-full border-2 border-background"
                        />
                    ))}
                  </div>
                  <div className="flex gap-4 items-center">
                    <div className="flex items-center gap-1">
                      <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                      <span className="font-medium">4.9</span>
                    </div>
                    <span className="text-muted-foreground">
                    from 2,000+ happy travelers
                  </span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="grid grid-cols-12 grid-rows-6 gap-4">
                  <div className="col-span-7 row-span-6 relative rounded-2xl overflow-hidden shadow-2xl">
                    <img
                        src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800"
                        alt="Travel"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4">
                      <div className="flex items-center gap-3">
                        <img
                            src="https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=100"
                            alt="Destination"
                            className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div>
                          <h3 className="font-semibold">Santorini, Greece</h3>
                          <p className="text-sm text-muted-foreground">
                            Most booked destination
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-5 row-span-3 relative rounded-2xl overflow-hidden shadow-xl">
                    <img
                        src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800"
                        alt="Travel"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                      <div className="absolute bottom-4 left-4 text-white">
                        <Badge variant="secondary" className="mb-2">
                          Trending
                        </Badge>
                        <h4 className="font-medium">Swiss Alps</h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-5 row-span-3 relative rounded-2xl overflow-hidden shadow-xl">
                    <img
                        src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800"
                        alt="Travel"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                      <div className="absolute bottom-4 left-4 text-white">
                        <Badge variant="secondary" className="mb-2">
                          Popular
                        </Badge>
                        <h4 className="font-medium">Bali, Indonesia</h4>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Stats */}
                <div className="absolute -right-8 top-1/4 bg-background rounded-xl shadow-lg p-4 hidden lg:block">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Globe2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold">180+</div>
                      <div className="text-sm text-muted-foreground">
                        Destinations
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute -left-8 bottom-1/4 bg-background rounded-xl shadow-lg p-4 hidden lg:block">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold">20k+</div>
                      <div className="text-sm text-muted-foreground">
                        Happy Users
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Destinations */}
        <section className="py-20 bg-muted/30" id="destinations">
          <div className="container mx-auto px-4">
            <div className="flex items-end justify-between mb-12">
              <div>
                <Badge variant="secondary" className="mb-4">
                  Explore the World
                </Badge>
                <h2 className="text-3xl font-bold mb-2">Popular Destinations</h2>
                <p className="text-muted-foreground">
                  Discover our most-loved and trending travel spots
                </p>
              </div>
              <Button variant="outline" className="hidden sm:flex gap-2">
                View All Destinations <ArrowRight className="h-4 w-4" />
              </Button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "Bali, Indonesia",
                  image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800",
                  rating: 4.8,
                  price: "$1,299",
                  tags: ["Beach", "Culture"],
                },
                {
                  name: "Santorini, Greece",
                  image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800",
                  rating: 4.9,
                  price: "$1,599",
                  tags: ["Islands", "Romance"],
                },
                {
                  name: "Tokyo, Japan",
                  image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800",
                  rating: 4.7,
                  price: "$1,899",
                  tags: ["City", "Culture"],
                },
                {
                  name: "Swiss Alps",
                  image: "https://images.unsplash.com/photo-1531366936337-7c912516ebab?w=800",
                  rating: 4.8,
                  price: "$2,099",
                  tags: ["Mountains", "Adventure"],
                },
              ].map((destination, index) => (
                  <Card key={index} className="group overflow-hidden">
                    <div className="relative aspect-[4/3]">
                      <img
                          src={destination.image}
                          alt={destination.name}
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      <Button
                          size="icon"
                          variant="secondary"
                          className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Heart className="h-4 w-4" />
                      </Button>
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <h3 className="text-lg font-semibold mb-2">
                          {destination.name}
                        </h3>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm">{destination.rating}</span>
                          </div>
                          <span className="font-medium">{destination.price}</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex gap-2">
                        {destination.tags.map((tag, i) => (
                            <Badge key={i} variant="secondary">
                              {tag}
                            </Badge>
                        ))}
                      </div>
                    </div>
                  </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20" id="features">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <Badge variant="secondary" className="mb-4">
                Why Choose TravelPal
              </Badge>
              <h2 className="text-3xl font-bold mb-4">
                Everything You Need for Perfect Trips
              </h2>
              <p className="text-muted-foreground">
                From planning to sharing memories, we've got all the tools you need
                for unforgettable travel experiences.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Globe2 className="h-6 w-6" />,
                  title: "Smart Trip Planning",
                  description:
                      "AI-powered recommendations and easy-to-use planning tools",
                  features: [
                    "Personalized itineraries",
                    "Budget tracking",
                    "Local insights",
                  ],
                },
                {
                  icon: <Users className="h-6 w-6" />,
                  title: "Social Travel",
                  description:
                      "Connect with friends and plan amazing group adventures",
                  features: [
                    "Group planning",
                    "Cost sharing",
                    "Travel memories",
                  ],
                },
                {
                  icon: <Plane className="h-6 w-6" />,
                  title: "Travel Management",
                  description:
                      "Keep all your travel plans organized in one place",
                  features: [
                    "Trip timeline",
                    "Document storage",
                    "Travel alerts",
                  ],
                },
              ].map((feature, index) => (
                  <Card key={index} className="relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="p-6 relative">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                      <p className="text-muted-foreground mb-6">
                        {feature.description}
                      </p>
                      <ul className="space-y-3">
                        {feature.features.map((item, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                              <span className="text-sm">{item}</span>
                            </li>
                        ))}
                      </ul>
                    </div>
                  </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0">
            <img
                src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=2000"
                alt="Background"
                className="w-full h-full object-cover opacity-10"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-90" />
          </div>

          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl mx-auto text-center text-white">
              <Badge
                  variant="secondary"
                  className="bg-white/20 text-white border-0 mb-4"
              >
                Limited Time Offer
              </Badge>
              <h2 className="text-4xl font-bold mb-4">
                Start Planning Your Dream Trip Today
              </h2>
              <p className="text-white/80 text-lg mb-8">
                Join thousands of happy travelers who are already using TravelPal to
                create unforgettable memories. Get started for free!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                    size="lg"
                    variant="secondary"
                    className="gap-2"
                    asChild
                >
                  <Link href="/register">
                    Get Started <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white/20"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
  );
}