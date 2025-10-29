import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.squarespace-cdn.com/content/v1/61cba9937b5c222977c574c6/24c7c7da-12e6-4164-89b5-8923d745e11a/RyanGobuty_Tommys_01.jpg"
          alt="Tommy's Beverly Hills Interior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Tommy's Beverly Hills
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Fine dining experience in the heart of Beverly Hills
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/book-event"
            className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors"
          >
            Book An Event
          </a>
          <a
            href="/contact"
            className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
