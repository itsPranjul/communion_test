import { useState } from "react";

function EventForm({ addEvent }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && date && time && category && image) {
      addEvent({
        id: Date.now(),
        title,
        date,
        time,
        category,
        image,
        month: new Date(date).toLocaleString("default", { month: "short" }).toUpperCase(),
        day: new Date(date).getDate(),
      });

      // Reset Form
      setTitle("");
      setDate("");
      setTime("");
      setCategory("");
      setImage("");
    }
  };

  return (
    <div className="mt-6">
      <h3 className="text-xl font-bold mb-3">Add New Event</h3>
      <form onSubmit={handleSubmit} className="bg-gray-100 p-5 rounded-lg shadow-md space-y-3">
        {/* Event Title */}
        <input
          type="text"
          placeholder="Event Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />

        {/* Date & Time */}
        <div className="flex gap-3">
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-1/2 p-2 border rounded"
            required
          />
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-1/2 p-2 border rounded"
            required
          />
        </div>

        {/* Category Selection */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Select Category</option>
          <option value="FREE">Free</option>
          <option value="DONATION">Donation</option>
        </select>

        {/* Event Image */}
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />

        {/* Submit Button */}
        <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">
          Add Event
        </button>
      </form>
    </div>
  );
}

export default EventForm;
