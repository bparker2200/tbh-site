import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/Hero.webp"
        alt="Tommy's Beverly Hills Event Venue"
        fill
        className="object-cover"
        style={{ zIndex: 0 }}
        priority
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" style={{ zIndex: 1 }}></div>

      {/* Content */}
      <div className="relative text-center text-white px-4" style={{ zIndex: 2 }}>
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Tommy's Beverly Hills
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto">
          A private event venue with French elegance in the heart of Beverly Hills
        </p>
      </div>
    </section>
  );
}
