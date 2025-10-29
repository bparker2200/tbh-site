import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function BookEvent() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="relative h-96 flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.squarespace-cdn.com/content/v1/61cba9937b5c222977c574c6/86455421-019a-47fb-b82f-747a87bb5053/Bar+to+DR.jpeg"
              alt="Event Space"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-5xl font-bold mb-4">Book An Event</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Host your special occasion at Tommy's Beverly Hills
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Private Events</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Create unforgettable memories with our elegant event spaces and exceptional service
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Event Spaces</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Private dining room for intimate gatherings</li>
                  <li>• Full restaurant buyout for larger events</li>
                  <li>• Bar area for cocktail receptions</li>
                  <li>• Outdoor patio seating (weather permitting)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Services</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Custom menu planning</li>
                  <li>• Professional event coordination</li>
                  <li>• Audio/visual equipment available</li>
                  <li>• Valet parking service</li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Request Information</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Guests
                  </label>
                  <input
                    type="number"
                    id="guests"
                    name="guests"
                    min="1"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Event Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="Tell us about your event..."
                  ></textarea>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors"
                  >
                    Send Request
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
