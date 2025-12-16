import React from "react";
import logo from "../assets/1st ap logo white-bg.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-green-100 to-green-300 text-gray-900 pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center space-y-6">

        {/* Logo */}
        <img src={logo} alt="Logo" className="h-60 -mt-20 relative w-auto mb-2" />

        {/* Slogan / Description */}
        <p className="text-center text-gray-700 -mt-25  text-sm sm:text-base max-w-md leading-relaxed">
          আমাদের প্ল্যাটফর্মের মাধ্যমে কৃষকরা সহজে সেবা, সঠিক পরামর্শ এবং প্রয়োজনীয় তথ্য পেতে পারে। 
          <br />
          সব খামার সবুজ রাখুন, এবং প্রাণী ভালো রাখুন।
        </p>

        {/* Social Icons */}
        <div className="flex gap-6">
          <a href="https://www.facebook.com/share/1BzSSBcVse/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:scale-110 transform transition-transform">
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
          </a>

          <a href="https://www.youtube.com/@Roots_Of_Biology" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:scale-110 transform transition-transform">
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
            </svg>
          </a>

          <a href="https://www.facebook.com/groups/539865460287674/?ref=share&mibextid=NSMWBT" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:scale-110 transform transition-transform">
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
          </a>
        </div>

        {/* Credits */}
        <p className="text-gray-600 text-sm">
          Website created by <a href="https://www.facebook.com/share/14Df137xNjF/" target="_blank" rel="noopener noreferrer" className="text-green-700 hover:underline">Tamjid Hossain Epick</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
