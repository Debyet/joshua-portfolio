import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 bg-white/10"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4 w-full">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-orange-500 to-red-400 bg-clip-text text-transparent text-center">
            My Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* ===== Project 1 ===== */}
            <div className="p-6 rounded-xl border border-white/10 hover:translate-y-1 hover:border-orange-500/30 hover:shadow-[0_2px_8px_rgba(249,115,22,0.2)] transition">
              <h3 className="text-xl font-bold mb-2 text-orange-400">
                My First Menu
              </h3>
              <p className="text-gray-400 mb-4">
                It’s a basic order list—likely for a small food business—without interactive features.
Improvements could include clearer column names, separating unit price from quantity, and adding sorting or filtering options.
              </p>

              <div className="flex justify-between items-center">
                <a
                  href="https://josh0961189.github.io/table/"
                  className="text-orange-400 hover:text-orange-300 transition-colors my-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project →
                </a>
              </div>
            </div>

            {/* ===== Project 2 ===== */}
            <div className="p-6 rounded-xl border border-white/10 hover:translate-y-1 hover:border-orange-500/30 hover:shadow-[0_2px_8px_rgba(249,115,22,0.2)] transition">
              <h3 className="text-xl font-bold mb-2 text-orange-400">
                Grid system
              </h3>
              <p className="text-gray-400 mb-4">
              A grid system to make layouts adapt to any screen size.
              </p>

              <div className="flex justify-between items-center">
                <a
                  href="https://josh0961189.github.io/bootstrapp/"
                  className="text-orange-400 hover:text-orange-300 transition-colors my-3"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
