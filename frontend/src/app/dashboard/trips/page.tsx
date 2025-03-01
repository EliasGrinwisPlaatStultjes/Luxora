"use client"

import { useEffect, useState } from "react";
import { fetchTrips } from "@/api/apiService";
import Custom401 from "@/app/dashboard/trips/401";

type Trip = {
    id: number;
    name: string;
    description: string;
}

export default function TripsPage() {
    const [trips, setTrips] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTripsData = async () => {
            const trips = await fetchTrips();
            setTrips(trips)
        }

        fetchTripsData().then(() => setLoading(false)).catch((error) => setError(error));
    }, [])

    if (error) {
        if (error.status === 401) {
            return <Custom401 />
        }
        return <div>Error: {error.message}</div>
    }

    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <h1>Trips</h1>

            <div>
               {
                    trips.map((trip: Trip) => (
                        <div key={trip.id}>
                            <h2>{trip.name}</h2>
                            <p>{trip.description}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}