import React from "react";

function ComingSoon() {
  return (
    <section className="relative flex items-center justify-center h-screen w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white">
      {/* Overlay for dim effect */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative text-center px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 animate-fadeIn">
          Coming Soon
        </h1>
        <p className="text-lg md:text-2xl mb-8 animate-fadeIn delay-200">
          We are working hard to launch something amazing!
        </p>
        <button className="bg-white text-purple-600 font-semibold px-6 py-3 rounded-full hover:bg-purple-100 transition duration-300 animate-fadeIn delay-400">
          Notify Me
        </button>
      </div>

      {/* Tailwind Animation (add in your tailwind config if not present) */}
      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn { animation: fadeIn 1s ease forwards; }
          .delay-200 { animation-delay: 0.2s; }
          .delay-400 { animation-delay: 0.4s; }
        `}
      </style>
    </section>
  );
}

export default ComingSoon;