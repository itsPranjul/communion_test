import { useState, useEffect } from "react";
import EventCard from "../components/EventCard";
import EventForm from "../components/EventForm";
import eventsData from "../data/eventsData"; // Import predefined events

function Events() {
  const [events, setEvents] = useState(() => {
    const savedEvents = localStorage.getItem("events");
    return savedEvents ? JSON.parse(savedEvents) : eventsData; // Load from localStorage or use predefined data
  });

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  const addEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4 text-center">Upcoming Events</h2>

      {events.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No events added yet.</p>
      )}

      <EventForm addEvent={addEvent} />
    </div>
  );
}

export default Events;
