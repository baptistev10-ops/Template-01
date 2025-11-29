import { aboutSection } from "../config/site.config";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative bg-gray-950 overflow-hidden px-6 pt-20"
    >
      <div className="absolute top-0 right-0 w-2/3 h-full bg-linear-to-bl from-indigo-900/20 to-transparent skew-x-12 transform origin-top-right pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full z-10 grid md:grid-cols-2 gap-12 items-center">
        <div data-aos="fade-right">
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight uppercase">
            {aboutSection.homeTitle.firstTitle} <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-purple-500">
              {aboutSection.homeTitle.secondTitle}
            </span>
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-lg">
            {aboutSection.homeDescription}
          </p>
          <div className="flex gap-4">
            <a
              href="#contact"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded font-bold transition-all shadow-lg shadow-indigo-500/30 hover:-translate-y-1"
            >
              {aboutSection.homeButton.button1}
            </a>
            <a
              href="#portfolio"
              className="bg-transparent border-2 border-gray-700 text-gray-300 hover:border-indigo-500 hover:text-indigo-400 px-8 py-4 rounded font-bold transition-all"
            >
              {aboutSection.homeButton.button2}
            </a>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="hidden md:block aspect-square bg-gray-800 rounded-3xl border-4 border-gray-800 shadow-2xl shadow-indigo-900/20 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-linear-to-tr from-gray-900 to-indigo-900/40 flex items-center justify-center text-gray-600 font-black text-4xl text-center p-4">
            IMAGE / VISUAL
          </div>
        </div>
      </div>
    </section>
  );
}
