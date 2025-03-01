"use client"

import { useParams } from "next/navigation";

export default function TripsDetailPage() {
    const { id } = useParams();
    
    return (
        <div>
            <h1>Trip Detail for ID: {id}</h1>
        </div>
    )
}