import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-gray-100 min-h-screen font-poppins">
      
      {/* Header Section (After Navbar) */}
      <div className="text-center py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-600">Connect Communities</h1>
        <p className="text-gray-700 text-lg">Bridging gaps between faiths with tech and a dash of fun!</p>
      </div>

      {/* Main Section */}
      <section className="flex items-center justify-center p-6">
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-10">
          
          {/* Left Content */}
          <div className="max-w-lg space-y-4">
            {/* Badge */}
            <div className="flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full w-fit">
              <span className="text-sm font-semibold">✅ Unlimited Advantages</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Unite, Innovate, Connect, <br />
              <span className="text-blue-700">Inspires Together</span>
            </h1>

            {/* Description */}
            <p className="text-gray-600">
              Join us to be part of a community where spirituality meets innovation.
              Together, we'll build a world that’s more inclusive, engaging, and 
              connected than ever before!
            </p>

            {/* CTA Button */}
            <Link
              to="/events"
              className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-gray-800 transition"
            >
              Explore Events →
            </Link>
          </div>

          {/* Right Content - Images */}
          <div className="grid grid-cols-3 gap-4">
            <img
              src="https://communionhub.org/static/media/event-1.e37c47c6656e8a5c0043.avif"
              className="w-32 h-48 md:w-40 md:h-56 rounded-[40px] object-cover"
              alt="Event 1"
            />
            <img
              src="https://communionhub.org/static/media/event-2.0cb0185956a6cc4d90f8.webp"
              className="w-32 h-48 md:w-40 md:h-56 rounded-[40px] object-cover"
              alt="Event 2"
            />
            <img
              src="https://communionhub.org/static/media/event-2.0cb0185956a6cc4d90f8.webp"
              className="w-32 h-48 md:w-40 md:h-56 rounded-[40px] object-cover"
              alt="Event 3"
            />
          </div>

        </div>
      </section>

    </div>
  );
}

export default Home;
