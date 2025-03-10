import { Link } from "react-router-dom";

function About() {
  return (
    <section className="bg-gray-100 py-12 px-6 md:px-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">About CommunionHub</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          CommunionHub is a platform dedicated to bringing people together through meaningful events.
          Whether it's religious gatherings, social meetups, or charity initiatives, we make it easier
          to discover and participate in events that align with your values.
        </p>

        <div className="mt-6">
          <h3 className="text-2xl font-semibold text-blue-500">Our Mission</h3>
          <p className="text-gray-600 mt-2">
            We aim to foster a sense of community by connecting individuals through shared experiences.
            By simplifying event discovery and participation, we help strengthen bonds within communities.
          </p>
        </div>

        <div className="mt-6">
          <h3 className="text-2xl font-semibold text-blue-500">Why Join Us?</h3>
          <ul className="text-gray-600 mt-2 space-y-2">
            <li>✅ Find events that match your interests</li>
            <li>✅ Connect with like-minded individuals</li>
            <li>✅ Stay informed about upcoming community gatherings</li>
          </ul>
        </div>

        <div className="mt-8">
          <Link to="/events" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Explore Events
          </Link>
        </div>
      </div>
    </section>
  );
}

export default About;
