import React from "react";
import { Code, Users, Lightbulb, Rocket } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen px-6 py-12 sm:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-bold text-blue-700 mb-4">Pavan Technologies</h1>
        <p className="text-xl text-gray-700">
          Innovating Digital Experiences — We blend code, creativity, and strategy to build smart software solutions.
        </p>
      </div>

      {/* Company Image + Mission */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
        <img
          src="https://source.unsplash.com/featured/?technology,teamwork"
          alt="Our Team"
          className="rounded-xl shadow-lg w-full h-80 object-cover"
        />
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed text-justify">
            At Pavan Technologies, we are driven by a vision to empower businesses through custom web and AI solutions. We strive to
            deliver scalable, maintainable, and modern applications for industries ranging from healthcare to fintech.
          </p>
        </div>
      </div>

      {/* Core Values */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">Why Choose Us?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <Code className="mx-auto text-blue-600 h-10 w-10 mb-3" />
            <h3 className="font-semibold text-lg mb-2">Clean Code</h3>
            <p className="text-gray-600 text-sm">We follow best practices and scalable architecture for maintainable codebases.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <Users className="mx-auto text-blue-600 h-10 w-10 mb-3" />
            <h3 className="font-semibold text-lg mb-2">Dedicated Team</h3>
            <p className="text-gray-600 text-sm">Our expert team is passionate, skilled, and aligned with your business goals.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <Lightbulb className="mx-auto text-blue-600 h-10 w-10 mb-3" />
            <h3 className="font-semibold text-lg mb-2">Creative Ideas</h3>
            <p className="text-gray-600 text-sm">We don’t just build apps — we craft intelligent, user-friendly experiences.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <Rocket className="mx-auto text-blue-600 h-10 w-10 mb-3" />
            <h3 className="font-semibold text-lg mb-2">Fast Delivery</h3>
            <p className="text-gray-600 text-sm">We focus on lean development and rapid prototyping for quicker launches.</p>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="text-center mt-12">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">Want to work with us?</h3>
        <p className="text-gray-600 mb-6">Let’s create something impactful together. We're just a message away.</p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-md transition">
          Contact Pavan Technologies
        </button>
      </div>
    </div>
  );
};

export default AboutPage;
