import { RevealOnScroll } from "../RevealOnScroll";
import deviethImg from "../../assets/devieth.png";



export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center relative bg-white/10 px-6"
    >
      <RevealOnScroll>
        <div className="z-10 flex flex-col items-center">
          
          <img
  src={deviethImg}
  alt="Devieth Jushua M. Anto"
  className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full shadow-lg border-4 border-orange-500 mb-8"

/>

          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-red-400 bg-clip-text text-transparent leading-tight">
            Hola, I'm Devieth Jushua M. Anto
          </h1>

          <p className="text-white/80 text-lg mb-8 max-w-xl">
            From Cavite State University, I'm currently a 3rd-year student at CvSU Bacoor.
          </p>

         
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-orange-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-orange-500/50 text-orange-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
