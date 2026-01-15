import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function EventDetailsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-12">Event Details</h1>

            <div className="space-y-12 text-left">
              {/* Guaranteed Guest Count */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">GUARANTEED GUEST COUNT</h2>
                <div className="space-y-4 text-lg text-gray-700">
                  <p>
                    To assure our best service, we require a Final Guaranteed Guest Count seventy-two hours prior to your function.
                  </p>
                  <p>
                    In the absence of a Finalized Guaranteed Guest Count, the number of guests referenced at the time of the original booking will serve as the Final Guaranteed Guest Count.
                  </p>
                </div>
              </div>

              {/* Menu Selections */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">MENU SELECTIONS</h2>
                <div className="space-y-4 text-lg text-gray-700">
                  <p>
                    We look forward to collaborating with you to design the menu of your choice. Menu items are subject to seasonal availability and market conditions. We guarantee pricing as agreed to in signed contracts. Menus are set two weeks prior to events. Please apprise us of special preferences, including allergies, within one week prior to the event.
                  </p>
                </div>
              </div>

              {/* Deposits & Final Payment */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">DEPOSITS & FINAL PAYMENT</h2>
                <div className="space-y-4 text-lg text-gray-700">
                  <p>
                    We require a non-refundable deposit of 50% of the total invoice cost, in order to secure the date and time of the client's event.
                  </p>
                  <p>
                    Deposits may be transferable up to 14 days prior to the event depending on the time and resources that have been spent on preparation for the event.
                  </p>
                  <p>
                    Final payment is due along with the final minimum guest count (10) days prior to the event date.
                  </p>
                </div>
              </div>

              {/* Special Services & Decorations */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">SPECIAL SERVICES & DECORATIONS</h2>
                <div className="space-y-4 text-lg text-gray-700">
                  <p>
                    To ensure a successful event, we are pleased to provide assistance with cakes for special occasions, floral arrangements, ice carvings, decorations, theme accessories and your audio/visual needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
