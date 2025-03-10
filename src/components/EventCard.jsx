import React from "react";

function EventCard({ event }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden w-80">
      {/* Event Image */}
      <div className="relative">
        <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
        {/* Date Badge */}
        <div className="absolute top-2 right-2 bg-gray-900 text-white px-3 py-1 rounded-md text-sm">
          <span className="block text-xs font-bold">{event.month}</span>
          <span className="block text-lg font-semibold">{event.day}</span>
        </div>
      </div>

      {/* Event Details */}
      <div className="p-4">
        {/* Event Category Tag */}
        <span
          className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
            event.category === "FREE" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"
          }`}
        >
          {event.category}
        </span>

        <h3 className="text-xl font-semibold mt-2">{event.title}</h3>
        <p className="text-gray-600 flex items-center gap-1 mt-1">📅 {event.date}</p>
        <p className="text-gray-700 flex items-center gap-1 mt-1">⏰ {event.time}</p>

        {/* Event Details Button */}
        <button className="mt-3 w-full bg-gray-900 text-white py-2 rounded-md hover:bg-gray-700 transition">
          Event Details →
        </button>
      </div>
    </div>
  );
}

export default EventCard;
