import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Tommy's Beverly Hills</h3>
            <p className="text-gray-300 mb-4">
              Fine dining restaurant in the heart of Beverly Hills, California.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/gallery" className="text-gray-300 hover:text-white transition-colors">Gallery</Link></li>
              <li><Link href="/book-event" className="text-gray-300 hover:text-white transition-colors">Book An Event</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="text-gray-300 space-y-2">
              <p>Beverly Hills, CA</p>
              <p>Phone: (555) 123-4567</p>
              <p>Email: info@tommysbeverlyhills.com</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Tommy's Beverly Hills. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
