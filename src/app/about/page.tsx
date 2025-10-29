import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function About() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="relative h-96 flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.squarespace-cdn.com/content/v1/5ec321c2af33de48734cc929/1589847938105-HMG5F9IQGCYLYA6CXCWF/20140301_Trade-151_0124-copy.jpg"
              alt="About Tommy's Beverly Hills"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-5xl font-bold mb-4">About Us</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Discover the story behind Tommy's Beverly Hills
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Story</h2>
              <p className="text-gray-600 mb-6 text-center">
                It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.
              </p>
              <p className="text-gray-600 mb-6 text-center">
                At Tommy's Beverly Hills, we believe in creating memorable dining experiences that bring people together. Our commitment to excellence and attention to detail has made us a beloved destination in the heart of Beverly Hills.
              </p>
            </div>
          </div>
        </section>

        {/* Image Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Make it stand out.</h3>
                <p className="text-gray-600 mb-6">
                  Our restaurant combines classic elegance with modern sophistication, creating an atmosphere that's both welcoming and refined. Every detail has been carefully considered to provide our guests with an exceptional dining experience.
                </p>
                <p className="text-gray-600">
                  From our carefully curated menu to our attentive service, we strive to exceed expectations and create lasting memories for every guest who walks through our doors.
                </p>
              </div>
              <div className="relative aspect-square">
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/61cba9937b5c222977c574c6/c1987995-3032-4944-b6b2-b27d9278d4f3/RyanGobuty_Interior_1.jpg"
                  alt="Restaurant Interior"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
