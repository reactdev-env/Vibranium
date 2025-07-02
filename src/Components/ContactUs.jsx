import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-gray-50 min-h-screen px-6 py-12 sm:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">Contact Us</h1>
        <p className="text-gray-600 text-lg">
          We'd love to hear from you! Reach out with any questions, ideas, or just to say hello.
        </p>
      </div>

      {/* Office Addresses */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* USA Office */}
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/684/684908.png"
            alt="USA Office"
            className="w-12 h-12 mx-auto mb-3"
          />
          <h3 className="text-lg font-semibold text-blue-700 mb-1">United States Office</h3>
          <p className="text-gray-600">
            Pavan Technologies Inc. <br />
            100 Market Street, Suite 500 <br />
            San Francisco, CA 94105, USA
          </p>
        </div>

        {/* India Office */}
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/684/684908.png"
            alt="India Office"
            className="w-12 h-12 mx-auto mb-3"
          />
          <h3 className="text-lg font-semibold text-blue-700 mb-1">India Office</h3>
          <p className="text-gray-600">
            Pavan Technologies Pvt. Ltd. <br />
            2nd Floor, Plot No. 27, Hi-Tech City Rd <br />
            Madhapur, Hyderabad, Telangana 500081, India
          </p>
        </div>
      </div>

      {/* Contact Info */}
      <div className="grid md:grid-cols-3 gap-8 mb-12 text-center">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <img
            src="https://cdn-icons-png.flaticon.com/512/597/597177.png"
            alt="Phone"
            className="w-12 h-12 mx-auto mb-3"
          />
          <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
          <p className="text-gray-600">+91 98765 43210</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <img
            src="https://cdn-icons-png.flaticon.com/512/561/561127.png"
            alt="Email"
            className="w-12 h-12 mx-auto mb-3"
          />
          <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
          <p className="text-gray-600">contact@pavantech.com</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2649/2649280.png"
            alt="Support"
            className="w-12 h-12 mx-auto mb-3"
          />
          <h3 className="font-semibold text-gray-800 mb-1">Support</h3>
          <p className="text-gray-600">Mon–Fri, 9am–6pm IST</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white max-w-3xl mx-auto p-8 rounded-xl shadow-lg">
        <form className="grid grid-cols-1 gap-6">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Message</label>
            <textarea
              rows="5"
              placeholder="Your message here..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-6 rounded-full font-semibold hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
