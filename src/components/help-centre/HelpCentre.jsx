import React from 'react'

export default function HelpCentre() {
  return (
    <main className="px-6 md:px-10 max-w-3xl mx-auto">
      {/* Header */}
      <div className="text-center flex flex-col items-center justify-center gap-4 mt-8">
        {/* Image before heading */}
        <img
          src="/help-centre.svg"
          alt="Feedback"
          className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-contain mb-4"
        />

        <h3 className="text-[#1A1A1A] text-center text-lg sm:text-xl md:text-3xl lg:text-4xl font-semibold">
          Are you facing any problems?
        </h3>

        <p className="text-[#4D4D4D] text-sm sm:text-base md:text-lg max-w-xs sm:max-w-md md:max-w-2xl mx-auto">
          If you need instant support then send us a message on WhatsApp. <br />
          Our support will reply as soon as possible after you send us a message
        </p>
      </div>

      {/* Submit Button */}
      <div className="text-center mt-2">
        <button
          type="button"
          className="inline-flex items-center gap-2 bg-green-500 rounded-md px-6 py-3 text-white text-sm font-semibold hover:scale-105 hover:bg-green-600 transition"
        >
          {/* WhatsApp Icon (Image) */}
          <img
            src="/logos-whatsapp-icon.svg"
            alt="WhatsApp"
            className="w-5 h-5"
          />

          <span>Chat on WhatsApp</span>
        </button>
        <p className="text-[#4D4D4D] text-sm sm:text-base md:text-lg max-w-xs sm:max-w-md md:max-w-2xl mx-auto">
          or
        </p>
        <p className="text-[#4D4D4D] text-sm sm:text-base md:text-lg max-w-xs sm:max-w-md md:max-w-2xl mx-auto">
          Send us email:{" "}
          <span className="text-[#FF9D00]">Info@Prodefied.com</span>
        </p>
      </div>
    </main>
  );
}

