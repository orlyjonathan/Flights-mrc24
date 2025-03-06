import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import UpdateFlightForm from './UpdateFlightForm';  // Update the import path accordingly
import { Flight } from "../../../model/flightsModel";

// Example function to simulate fetching the flight from an API
const fetchFlightById = (id: string): Flight => {
    // This is a mock data, replace it with an actual API call
    return {
        flight_id: 1,
        airplane_id: 1, // Add this property
        origin: "New York",
        destination: "Los Angeles",
        departure_date: "2025-05-10",
        departure_time: "12:30",
        arrival_time: "15:30",
        price: 200,
    };
};

const UpdateFlightPage: React.FC = () => {
    const { flightId } = useParams<{ flightId: string }>();  // Get the flightId from URL
    const [flight, setFlight] = useState<Flight | null>(null);

    useEffect(() => {
        if (flightId) {
            const fetchedFlight = fetchFlightById(flightId);
            setFlight(fetchedFlight);  // Fetch the flight data based on flightId
        }
    }, [flightId]);

    const handleSubmit = (updatedFlight: Partial<Flight>) => {
        console.log("Updated flight:", updatedFlight);
        // You would normally send this updated data to the API here
    };

    const handleCancel = () => {
        console.log("Update canceled");
        // Handle cancel logic, like redirecting back to the flight list page
    };

    if (!flight) {
        return <div>Loading...</div>;  // Show loading state while fetching flight data
    }

    return (
        <UpdateFlightForm
            flight={flight}  // Pass the fetched flight as a prop
            onSubmit={handleSubmit}
            onCancel={handleCancel}
        />
    );
};

export default UpdateFlightPage;
