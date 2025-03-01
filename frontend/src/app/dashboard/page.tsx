"use client";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Activity, Calendar, MapPin, Palmtree, Users, Heart, Share2, MoreHorizontal, Plus, Plane, Globe2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export default function DashboardPage() {

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold mb-2">Welcome back, John! 👋</h1>
                    <p className="text-muted-foreground">
                        Track your trips, connect with friends, and plan your next adventure.
                    </p>
                </div>
                <Button className="gap-2">
                    <Plus className="h-4 w-4" /> New Trip
                </Button>
            </div>

            {/* Stats Overview */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card className="bg-gradient-to-br from-primary to-primary/90">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-primary-foreground">Total Trips</CardTitle>
                        <Plane className="h-4 w-4 text-primary-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-primary-foreground">12</div>
                        <div className="flex items-center gap-2">
                            <Badge variant="secondary" className="bg-primary-foreground/20 text-primary-foreground">
                                +2 this month
                            </Badge>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Places Visited</CardTitle>
                        <Globe2 className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">24</div>
                        <Progress value={66} className="mt-2" />
                        <p className="text-xs text-muted-foreground mt-2">
                            66% of your goal reached
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Travel Buddies</CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">8</div>
                        <div className="flex -space-x-2 mt-2">
                            {[1, 2, 3, 4].map((i) => (
                                <img
                                    key={i}
                                    src={`https://i.pravatar.cc/32?img=${i}`}
                                    alt={`User ${i}`}
                                    className="w-8 h-8 rounded-full border-2 border-background"
                                />
                            ))}
                            <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-sm">
                                +4
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Travel Budget</CardTitle>
                        <Activity className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">$2,450</div>
                        <Progress value={45} className="mt-2" />
                        <p className="text-xs text-muted-foreground mt-2">
                            45% of monthly budget used
                        </p>
                    </CardContent>
                </Card>
            </div>

            {/* Upcoming Trips & Recent Activity */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <div>
                                <CardTitle>Upcoming Trips</CardTitle>
                                <CardDescription>Your next adventures</CardDescription>
                            </div>
                            <Link href="/dashboard/trips">
                                <Button variant="outline" size="sm">
                                    View All
                                </Button>
                            </Link>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-6">
                            {[
                                {
                                    destination: "Paris, France",
                                    date: "Mar 15 - Mar 22",
                                    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=400&auto=format&fit=crop&q=60",
                                    participants: 4,
                                    budget: "$2,800",
                                    tags: ["City Break", "Culture"],
                                    progress: 85,
                                },
                                {
                                    destination: "Bali, Indonesia",
                                    date: "Apr 5 - Apr 15",
                                    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&auto=format&fit=crop&q=60",
                                    participants: 2,
                                    budget: "$3,200",
                                    tags: ["Beach", "Adventure"],
                                    progress: 65,
                                },
                                {
                                    destination: "Tokyo, Japan",
                                    date: "May 1 - May 8",
                                    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&auto=format&fit=crop&q=60",
                                    participants: 3,
                                    budget: "$4,000",
                                    tags: ["Urban", "Food"],
                                    progress: 40,
                                },
                            ].map((trip, index) => (
                                <div key={index} className="flex gap-4 p-4 rounded-lg bg-muted/40 relative group">
                                    <img
                                        src={trip.image}
                                        alt={trip.destination}
                                        className="w-24 h-24 rounded-lg object-cover"
                                    />
                                    <div className="flex-1">
                                        <div className="flex items-start justify-between">
                                            <div>
                                                <h4 className="font-semibold mb-1">{trip.destination}</h4>
                                                <p className="text-sm text-muted-foreground mb-2">{trip.date}</p>
                                            </div>
                                            <DropdownMenu modal={false}>
                                                <DropdownMenuTrigger asChild>
                                                    <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100">
                                                        <MoreHorizontal className="h-4 w-4" />
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent>
                                                    <DropdownMenuItem>View Details</DropdownMenuItem>
                                                    <DropdownMenuItem>Edit Trip</DropdownMenuItem>
                                                    <DropdownMenuItem>Share</DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </div>

                                        <div className="flex items-center gap-4 mb-2">
                                            <div className="flex items-center gap-1 text-sm">
                                                <Users className="h-4 w-4 text-muted-foreground" />
                                                <span>{trip.participants} people</span>
                                            </div>
                                            <div className="flex items-center gap-1 text-sm">
                                                <Activity className="h-4 w-4 text-muted-foreground" />
                                                <span>{trip.budget}</span>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <div className="flex gap-2">
                                                {trip.tags.map((tag, i) => (
                                                    <Badge key={i} variant="secondary" className="bg-primary/10 text-primary">
                                                        {tag}
                                                    </Badge>
                                                ))}
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Progress value={trip.progress} className="w-24" />
                                                <span className="text-sm text-muted-foreground">{trip.progress}%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                <Card className="col-span-3">
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <div>
                                <CardTitle>Recent Activity</CardTitle>
                                <CardDescription>Latest updates from your trips</CardDescription>
                            </div>
                            <Button variant="ghost" size="icon">
                                <Share2 className="h-4 w-4" />
                            </Button>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="relative">
                            <div className="absolute w-0.5 bg-muted h-full left-4 top-0" />
                            <div className="space-y-6">
                                {[
                                    {
                                        icon: <Palmtree className="h-4 w-4" />,
                                        title: "Booked beachfront villa in Bali",
                                        time: "2 hours ago",
                                        color: "bg-green-500",
                                    },
                                    {
                                        icon: <Users className="h-4 w-4" />,
                                        title: "Sarah and Mike joined your Tokyo trip",
                                        time: "5 hours ago",
                                        color: "bg-blue-500",
                                    },
                                    {
                                        icon: <Heart className="h-4 w-4" />,
                                        title: "Added 5 places to Paris wishlist",
                                        time: "1 day ago",
                                        color: "bg-red-500",
                                    },
                                    {
                                        icon: <MapPin className="h-4 w-4" />,
                                        title: "Created new trip to Barcelona",
                                        time: "2 days ago",
                                        color: "bg-purple-500",
                                    },
                                ].map((item, index) => (
                                    <div key={index} className="flex gap-4 relative">
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${item.color}`}>
                                            {item.icon}
                                        </div>
                                        <div>
                                            <p className="font-medium">{item.title}</p>
                                            <p className="text-sm text-muted-foreground">{item.time}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Quick Actions */}
            <div className="grid gap-4 md:grid-cols-3">
                <Card className="bg-accent/10">
                    <CardContent className="pt-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center">
                                <Calendar className="h-6 w-6 text-accent-foreground" />
                            </div>
                            <div>
                                <h3 className="font-semibold">Trip Calendar</h3>
                                <p className="text-sm text-muted-foreground">View your travel schedule</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-primary/10">
                    <CardContent className="pt-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
                                <Users className="h-6 w-6 text-primary-foreground" />
                            </div>
                            <div>
                                <h3 className="font-semibold">Travel Groups</h3>
                                <p className="text-sm text-muted-foreground">Manage your travel buddies</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-accent/10">
                    <CardContent className="pt-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center">
                                <Globe2 className="h-6 w-6 text- accent-foreground" />
                            </div>
                            <div>
                                <h3 className="font-semibold">Explore Places</h3>
                                <p className="text-sm text-muted-foreground">Discover new destinations</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Travel Stats */}
            <div className="grid gap-4 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Popular Destinations</CardTitle>
                        <CardDescription>Your most visited places</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {[
                                { city: "Paris", country: "France", visits: 5, percentage: 85 },
                                { city: "Tokyo", country: "Japan", visits: 3, percentage: 65 },
                                { city: "Barcelona", country: "Spain", visits: 2, percentage: 45 },
                            ].map((place, index) => (
                                <div key={index} className="flex items-center gap-4">
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between mb-1">
                                            <span className="font-medium">{place.city}, {place.country}</span>
                                            <span className="text-sm text-muted-foreground">{place.visits} visits</span>
                                        </div>
                                        <Progress value={place.percentage} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Travel Preferences</CardTitle>
                        <CardDescription>Your favorite types of trips</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {[
                                { type: "Beach Getaways", count: 8, percentage: 75 },
                                { type: "City Breaks", count: 12, percentage: 90 },
                                { type: "Mountain Adventures", count: 5, percentage: 45 },
                            ].map((preference, index) => (
                                <div key={index} className="flex items-center gap-4">
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between mb-1">
                                            <span className="font-medium">{preference.type}</span>
                                            <span className="text-sm text-muted-foreground">{preference.count} trips</span>
                                        </div>
                                        <Progress value={preference.percentage} className="bg-primary/20" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}