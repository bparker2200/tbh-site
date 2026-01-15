import Image from 'next/image';

const galleryImages = [
  {
    src: "/gallery/gallery-01.jpeg",
    alt: "Restaurant Interior 1"
  },
  {
    src: "/gallery/gallery-02.jpg",
    alt: "Restaurant Interior 2"
  },
  {
    src: "/gallery/gallery-03.jpg",
    alt: "Restaurant Interior 3"
  },
  {
    src: "/gallery/gallery-04.jpg",
    alt: "Restaurant Interior 4"
  },
  {
    src: "/gallery/gallery-05.jpeg",
    alt: "Restaurant Interior 5"
  },
  {
    src: "/gallery/gallery-06.jpg",
    alt: "Restaurant Interior 6"
  },
  {
    src: "/gallery/gallery-07.jpeg",
    alt: "Bar to Dining Room"
  },
  {
    src: "/gallery/gallery-08.jpg",
    alt: "Restaurant Interior 7"
  }
];

export default function Gallery() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Gallery</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the elegant atmosphere and beautiful interiors of Tommy's Beverly Hills
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div key={index} className="relative aspect-square overflow-hidden rounded-lg shadow-lg">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
