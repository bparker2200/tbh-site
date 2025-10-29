import Image from 'next/image';

const galleryImages = [
  {
    src: "https://images.squarespace-cdn.com/content/v1/61cba9937b5c222977c574c6/c71070fc-02e4-41fd-8ed6-f116b22673a0/2024.GG.UNI.10.jpeg",
    alt: "Restaurant Interior 1"
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/61cba9937b5c222977c574c6/c1987995-3032-4944-b6b2-b27d9278d4f3/RyanGobuty_Interior_1.jpg",
    alt: "Restaurant Interior 2"
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/61cba9937b5c222977c574c6/24c7c7da-12e6-4164-89b5-8923d745e11a/RyanGobuty_Tommys_01.jpg",
    alt: "Restaurant Interior 3"
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/61cba9937b5c222977c574c6/f9669b40-1b7c-40f4-9941-f5503e15e764/0056+Tommys+2022-05-28+IG.jpg",
    alt: "Restaurant Interior 4"
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/61cba9937b5c222977c574c6/4a3a9cab-f5bd-4d96-81cb-4116e50137af/2024.GG.UNI.19.jpeg",
    alt: "Restaurant Interior 5"
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/61cba9937b5c222977c574c6/1c120743-86be-4227-88d4-d5f1fc9b9c3c/RyanGobuty_Tommys_02.jpg",
    alt: "Restaurant Interior 6"
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/61cba9937b5c222977c574c6/86455421-019a-47fb-b82f-747a87bb5053/Bar+to+DR.jpeg",
    alt: "Bar to Dining Room"
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/61cba9937b5c222977c574c6/eca9324d-613a-4cca-8d64-597981685f15/0059+Tommys+2022-05-28+IG.jpg",
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
