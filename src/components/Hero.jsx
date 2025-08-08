import Image from "../assets/1.png";

const Hero = () => (
  <section
    className="relative h-screen w-full bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: `url(${Image})` }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-opacity-60 flex items-center justify-center">
      <div className="container mx-auto px-4 md:px-10 flex flex-col md:flex-row items-center justify-between gap-10">

        {/* Left Side */}
       <div className="text-white max-w-xl w-full backdrop-blur-md bg-white/10 shadow-lg px-6 py-4 rounded-lg">
          <h1 className="text-4xl md:text-5xl font-bold">M3M The Line</h1>
          <h6 className="text-xl md:text-2xl font-bold bg-orange-500 inline-block px-4 py-2 rounded-full mt-4">
            Premium Retail Shops
          </h6>
          <ul className="mt-6 space-y-2 text-lg">
            <li>✓ Invest in Commercial Spaces</li>
            <li>✓ Assured 10% Quarterly Payout</li>
            <li>✓ 24 Months Lease Guarantee</li>
          </ul>


          <h6 className="text-xl md:text-2xl font-bold bg-orange-500 inline-block px-4 py-2 rounded-full mt-4">
            M3M The Line Pentsuites
          </h6>
          <ul className="mt-6 space-y-2 text-lg">
            <li>✓ Price : On Request</li>
            <li>✓ Discount Upto Rs.6 Lacs*</li>
            <li>✓ Pre- leased Pentsuites</li>
          </ul>
        </div>

        {/* Right Side - Form */}
        <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg w-full max-w-md">
          <h3 className="text-2xl font-semibold text-center mb-6">Get Inaugural Offers.</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none"
            />
            <input
              type="tel"
              placeholder="Mobile No"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none"
            />
            <button
              type="submit"
              className="w-full bg-yellow-400 text-black font-semibold px-4 py-2 rounded hover:bg-yellow-300 transition"
            >
              Submit
            </button>
          </form>
        </div>

      </div>
    </div>
  </section>
);

export default Hero;
