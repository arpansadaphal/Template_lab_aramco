"use client"

export default function Footer() {

  return (

    <footer className="bg-black text-white pt-24 pb-10">

      <div className="max-w-7xl mx-auto px-6">

        {/* TOP GRID */}

        <div className="grid md:grid-cols-5 gap-12">

          {/* BRAND */}

          <div className="md:col-span-2">

            <h3 className="text-2xl font-semibold">
              PolymerCo
            </h3>

            <p className="mt-4 text-gray-400 max-w-sm">
              Delivering advanced polymer solutions that power industries,
              infrastructure, and innovation worldwide.
            </p>

            {/* Newsletter */}

            <div className="mt-6 flex">

              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-3 rounded-l-lg bg-white/10 border border-white/20 focus:outline-none"
              />

              <button className="px-5 bg-white text-black rounded-r-lg">
                →
              </button>

            </div>

          </div>

          {/* LINKS */}

          <div>
            <h4 className="text-sm font-semibold text-gray-300">
              Company
            </h4>

            <ul className="mt-4 space-y-3 text-gray-400 text-sm">
              <li>About</li>
              <li>Leadership</li>
              <li>Careers</li>
              <li>News</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-300">
              Industries
            </h4>

            <ul className="mt-4 space-y-3 text-gray-400 text-sm">
              <li>Automotive</li>
              <li>Packaging</li>
              <li>Construction</li>
              <li>Energy</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-300">
              Resources
            </h4>

            <ul className="mt-4 space-y-3 text-gray-400 text-sm">
              <li>Documentation</li>
              <li>Case Studies</li>
              <li>Support</li>
              <li>Contact</li>
            </ul>
          </div>

        </div>

        {/* DIVIDER */}

        <div className="border-t border-white/10 my-12" />

        {/* BOTTOM BAR */}

        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">

          <p>
            © 2026 PolymerCo. All rights reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0">

            <span>Privacy Policy</span>
            <span>Terms of Service</span>

          </div>

        </div>

      </div>

    </footer>
  )
}
