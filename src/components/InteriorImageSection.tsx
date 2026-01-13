import Image from 'next/image';

export default function InteriorImageSection() {
  return (
    <section className="relative h-[60vh] w-full overflow-hidden">
      <Image
        src="/hero_f.webp"
        alt="Tommy's Beverly Hills Interior"
        fill
        className="object-cover"
      />
    </section>
  );
}
