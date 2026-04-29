export default function Footer({onEnquire}) {
  return (
    <footer className="bg-white mt-20 border-t">
      <div className="max-w-6xl mx-auto px-4 py-10">
        
        {/* TOP */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          
          {/* LEFT */}
          <div>
            <h2 className="text-2xl font-bold text-blue-600">
              accredian
            </h2>
            <p className="text-sm text-gray-500">
              credentials that matter
            </p>

            {/* SOCIAL */}
            <div className="flex gap-4 mt-4 text-gray-600 text-xl">
              <span>📘</span>
              <span>💼</span>
              <span>🐦</span>
              <span>📷</span>
              <span>▶️</span>
            </div>
          </div>

          {/* RIGHT  */}
          <div className="text-right">
            <button onClick={onEnquire} className="bg-blue-600 text-white cursor-pointer px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition">
              Enquire Now
            </button>
            <p className="text-sm text-gray-500 mt-2">
              Speak with our Advisor
            </p>
          </div>
        </div>

        {/* DIVIDER */}
        <hr className="my-8" />

        {/* BOTTOM LINKS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* LEFT */}
          <div>
            <h3 className="font-semibold mb-3">Accredian</h3>
            <ul className="space-y-2 text-gray-600">
              <li>About</li>
              <li>Blog</li>
              <li>Why Accredian</li>
            </ul>
          </div>

          {/* RIGHT */}
          <div>
            <h3 className="font-semibold mb-3">Contact Us</h3>
            <p className="text-gray-600">
              Email us:{" "}
              <span className="text-blue-600">
                enterprise@accredian.com
              </span>
            </p>
            <p className="text-gray-600 mt-2">
              Office Address: 4th Floor, 250, Phase IV, Udyog Vihar,
              Sector 18, Gurugram, Haryana
            </p>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="text-center text-gray-500 text-sm mt-8">
          © 2026 Accredian. All Rights Reserved
        </div>
      </div>
    </footer>
  );
}