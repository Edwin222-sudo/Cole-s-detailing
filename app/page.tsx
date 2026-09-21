"use client";

import { useState } from 'react';
import Image from 'next/image';

// --- DATA FROM CRAIGSLIST AD ---
const pricingData = {
  fullService: [
    { type: "Cars", price: 230 },
    { type: "Trucks & SUVs", price: 270 },
    { type: "Vans & Commercial", price: 300 },
  ],
  interiorOnly: [
    { type: "Car", price: 120 },
    { type: "Truck/SUV", price: 150 },
  ],
  exteriorOnly: [
    { type: "Car", price: 80 },
    { type: "Truck/SUV", price: 100 },
  ],
  restoration: [
    { type: "Car (Starting at)", price: 400 },
    { type: "Truck/SUV (Starting at)", price: 600 },
  ],
  addOns: [
    { name: "Ceramic Coating", price: "800-1200" },
    { name: "Ceramic Wax / Soft Ceramic", price: 15 },
    { name: "Headlight Restoration", price: 75 },
    { name: "Glass Coating", price: 200 },
    { name: "Trim Restore", price: 50 },
    { name: "Leather Restore", price: "25-100" },
    { name: "Engine Bay Cleaning", price: 50 },
    { name: "Carpet Recolor", price: "50-300" },
    { name: "Scratch Correction", price: "200-250" },
    { name: "Small Glass Crack Repair", price: "20-60" },
    { name: "Iron/Rust Removal", price: "20+" },
    { name: "Full Tire Dressing", price: 35 },
    { name: "Tire Lettering", price: "200-300" },
    { name: "Paint Decontamination", price: 35 },
    { name: "Heavy Stain Removal", price: "30-50" },
    { name: "Biohazard (Urine/Mold)", price: "15-30" },
  ]
};

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    vehicle: '',
    service: 'Full Service Detail',
    date: '',
    time: '',
    notes: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send an email or API request to a database
    alert(`Thanks ${formData.name}! We received your request for a ${formData.service} on your ${formData.vehicle}. We will text you at ${formData.phone} to confirm.`);
  };

  return (
    <main className="min-h-screen bg-neutral-900 text-white">
      {/* NAVIGATION */}
      <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-red-900/50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tighter text-brand-red uppercase">Cole's Detailing</h1>
          <div className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#services" className="hover:text-brand-red transition">Services</a>
            <a href="#pricing" className="hover:text-brand-red transition">Pricing</a>
            <a href="#gallery" className="hover:text-brand-red transition">Gallery</a>
            <a href="#book" className="bg-brand-red px-4 py-2 rounded hover:bg-red-700 transition">Book Now</a>
          </div>
          <a href="tel:2484805603" className="md:hidden bg-brand-red px-3 py-1 rounded text-sm">Call Now</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          {/* Placeholder for the image you provided */}
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-neutral-900"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h2 className="text-brand-red font-bold tracking-widest uppercase mb-2">Mobile Detailing We Come To You</h2>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">Premium Auto Care <br/>At Your Doorstep</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Serving Oakland, Wayne, and Macomb County. Specializing in Ceramic Coating, Deep Interior Cleaning, and Heavy Stain Removal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#book" className="bg-brand-red text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-red-700 transition shadow-lg shadow-red-900/50">
              Book Appointment
            </a>
            <a href="sms:2484805603" className="bg-white text-black px-8 py-4 rounded-md font-bold text-lg hover:bg-gray-200 transition">
              Text for Quote: 248-480-5603
            </a>
          </div>
        </div>
      </section>

      {/* INFO BANNER */}
      <div className="bg-brand-red py-4">
        <div className="container mx-auto px-6 text-center font-bold text-lg">
          CALL OR TEXT NOW FOR PRICES AND SCHEDULING: 248-480-5603
        </div>
      </div>

      {/* SERVICES SECTION */}
      <section id="services" className="py-20 bg-neutral-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Our <span className="text-brand-red">Services</span></h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-800 p-8 rounded-xl border border-neutral-700 hover:border-brand-red transition">
              <h3 className="text-2xl font-bold mb-4">Full Service Detail</h3>
              <p className="text-gray-400 mb-4">Complete interior and exterior restoration. Vacuum, wipe down, power scrub, deep clean fabric/leather, UV protection, power wash, wheel cleaning, and hydrophobic glass application.</p>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>✓ Interior Deep Clean</li>
                <li>✓ Exterior Power Wash</li>
                <li>✓ UV Protection</li>
              </ul>
            </div>
            <div className="bg-neutral-800 p-8 rounded-xl border border-neutral-700 hover:border-brand-red transition">
              <h3 className="text-2xl font-bold mb-4">Ceramic Coating</h3>
              <p className="text-gray-400 mb-4">Long-lasting protection for your paint. Options range from soft ceramic wax to full professional ceramic coating.</p>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>✓ Ceramic Wax ($15)</li>
                <li>✓ Full Ceramic ($800-1200)</li>
                <li>✓ Glass Coating ($200)</li>
              </ul>
            </div>
            <div className="bg-neutral-800 p-8 rounded-xl border border-neutral-700 hover:border-brand-red transition">
              <h3 className="text-2xl font-bold mb-4">Restoration & Add-ons</h3>
              <p className="text-gray-400 mb-4">Heavy duty cleaning for abandoned vehicles or specific problem areas like headlights, engines, and stains.</p>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>✓ Headlight Restoration ($75)</li>
                <li>✓ Engine Bay ($50)</li>
                <li>✓ Stain Removal ($30-50)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="pricing" className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Transparent <span className="text-brand-red">Pricing</span></h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {/* Full Service */}
            <div className="bg-neutral-900 p-6 rounded-lg border-t-4 border-brand-red">
              <h3 className="text-xl font-bold mb-4">Full Service Detail</h3>
              {pricingData.fullService.map((item, idx) => (
                <div key={idx} className="flex justify-between py-2 border-b border-neutral-800">
                  <span>{item.type}</span>
                  <span className="font-bold text-brand-red">${item.price}</span>
                </div>
              ))}
            </div>

            {/* Interior Only */}
            <div className="bg-neutral-900 p-6 rounded-lg border-t-4 border-gray-600">
              <h3 className="text-xl font-bold mb-4">Interior Only</h3>
              {pricingData.interiorOnly.map((item, idx) => (
                <div key={idx} className="flex justify-between py-2 border-b border-neutral-800">
                  <span>{item.type}</span>
                  <span className="font-bold text-brand-red">${item.price}</span>
                </div>
              ))}
            </div>

            {/* Exterior Only */}
            <div className="bg-neutral-900 p-6 rounded-lg border-t-4 border-gray-600">
              <h3 className="text-xl font-bold mb-4">Exterior Only</h3>
              {pricingData.exteriorOnly.map((item, idx) => (
                <div key={idx} className="flex justify-between py-2 border-b border-neutral-800">
                  <span>{item.type}</span>
                  <span className="font-bold text-brand-red">${item.price}</span>
                </div>
              ))}
            </div>

            {/* Restoration */}
            <div className="bg-neutral-900 p-6 rounded-lg border-t-4 border-yellow-600">
              <h3 className="text-xl font-bold mb-4">Heavy Restoration</h3>
              {pricingData.restoration.map((item, idx) => (
                <div key={idx} className="flex justify-between py-2 border-b border-neutral-800">
                  <span>{item.type}</span>
                  <span className="font-bold text-brand-red">${item.price}+</span>
                </div>
              ))}
              <p className="text-xs text-gray-500 mt-2">Price varies by restoration needed.</p>
            </div>
          </div>

          {/* Add-ons Table */}
          <div className="bg-neutral-900 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Optional Services & Add-Ons</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-4">
              {pricingData.addOns.map((item, idx) => (
                <div key={idx} className="flex justify-between py-2 border-b border-neutral-800 text-sm">
                  <span className="text-gray-300">{item.name}</span>
                  <span className="font-bold text-white">${item.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section id="gallery" className="py-20 bg-neutral-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Our <span className="text-brand-red">Work</span></h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Replace these divs with <Image /> tags of your actual work */}
            <div className="aspect-square bg-neutral-800 rounded-lg flex items-center justify-center text-gray-600">Before/After 1</div>
            <div className="aspect-square bg-neutral-800 rounded-lg flex items-center justify-center text-gray-600">Before/After 2</div>
            <div className="aspect-square bg-neutral-800 rounded-lg flex items-center justify-center text-gray-600">Before/After 3</div>
            <div className="aspect-square bg-neutral-800 rounded-lg flex items-center justify-center text-gray-600">Before/After 4</div>
          </div>
          <p className="text-center text-gray-500 mt-6">Photos of recent details in Oakland, Wayne & Macomb County.</p>
        </div>
      </section>

      {/* BOOKING SECTION */}
      <section id="book" className="py-20 bg-black">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl font-bold mb-4 text-center">Book Your <span className="text-brand-red">Detail</span></h2>
          <p className="text-center text-gray-400 mb-12">Fill out the form below to request a quote and schedule. We will text you back to confirm.</p>
          
          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6 bg-neutral-900 p-8 rounded-xl border border-neutral-800">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-400">Full Name</label>
              <input required name="name" onChange={handleChange} type="text" className="w-full bg-black border border-neutral-700 rounded p-3 text-white focus:border-brand-red outline-none" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-400">Phone Number</label>
              <input required name="phone" onChange={handleChange} type="tel" className="w-full bg-black border border-neutral-700 rounded p-3 text-white focus:border-brand-red outline-none" placeholder="248-480-5603" />
            </div>
            
            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-bold text-gray-400">Vehicle (Year, Make, Model)</label>
              <input required name="vehicle" onChange={handleChange} type="text" className="w-full bg-black border border-neutral-700 rounded p-3 text-white focus:border-brand-red outline-none" placeholder="e.g. 2018 Ford F-150" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-400">Service Type</label>
              <select name="service" onChange={handleChange} className="w-full bg-black border border-neutral-700 rounded p-3 text-white focus:border-brand-red outline-none">
                <option>Full Service Detail</option>
                <option>Interior Only</option>
                <option>Exterior Only</option>
                <option>Ceramic Coating</option>
                <option>Heavy Restoration</option>
                <option>Other (Specify in notes)</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-400">Preferred Date</label>
              <input required name="date" onChange={handleChange} type="date" className="w-full bg-black border border-neutral-700 rounded p-3 text-white focus:border-brand-red outline-none" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-400">Preferred Time</label>
              <input required name="time" onChange={handleChange} type="time" className="w-full bg-black border border-neutral-700 rounded p-3 text-white focus:border-brand-red outline-none" />
            </div>

            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-bold text-gray-400">Additional Notes / Order Request</label>
              <textarea name="notes" onChange={handleChange} rows={3} className="w-full bg-black border border-neutral-700 rounded p-3 text-white focus:border-brand-red outline-none" placeholder="Mention any heavy stains, pet hair, or specific add-ons you want."></textarea>
            </div>

            <button type="submit" className="md:col-span-2 bg-brand-red text-white font-bold text-lg py-4 rounded hover:bg-red-700 transition">
              Request Quote & Booking
            </button>
            <p className="text-xs text-center text-gray-500 md:col-span-2 mt-2">
              By submitting, you agree to be contacted via text/call. We accept Cash, Venmo, Zelle, Cash App.
            </p>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-neutral-950 py-12 border-t border-neutral-800 text-center text-gray-500">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold text-brand-red mb-4">Cole's Detailing</h2>
          <p className="mb-2">Mobile Detailing Serving Oakland, Wayne & Macomb County</p>
          <p className="mb-6 font-bold text-white text-xl">248-480-5603</p>
          <p className="text-sm">Solomoncole456@gmail.com</p>
          <p className="text-xs mt-8">© {new Date().getFullYear()} Cole's Detailing. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
