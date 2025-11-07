import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 bg-white/10"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4 w-full">
          
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-orange-500 to-red-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          
          <div className="rounded-xl p-8 border-white/10 border-t-2 hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              I am Devieth Jushua M. Anto, a 3rd-year student at CVSU Bacoor
              pursuing a Bachelor of Science in Computer Science. I chose to
              study computer science because I want to learn more about this
              course, and I love exploring technology—from web development to
              software design.
            </p>

           
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             
              <div>
                <div className="space-y-4 w-full">
                  {[
                    { label: "HTML & CSS", value: 65 },
                    { label: "JavaScript", value: 40 },
                    { label: "React JS", value: 30 },
                    { label: "Python", value: 40 },
                  ].map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <span className="text-orange-300 font-medium">
                          {skill.label}
                        </span>
                        <span className="text-orange-400 text-sm font-semibold">
                          {skill.value}%
                        </span>
                      </div>
                      <div className="w-full bg-orange-500/10 rounded-full h-2">
                        <div
                          className="bg-orange-500 h-2 rounded-full"
                          style={{ width: `${skill.value}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              
              <div>
                <div className="space-y-4 w-full">
                  {[
                    { label: "Sports", value: 50 },
                    { label: "Dance", value: 10 },
                    { label: "Sing", value: 10 },
                  ].map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <span className="text-orange-300 font-medium">
                          {skill.label}
                        </span>
                        <span className="text-orange-400 text-sm font-semibold">
                          {skill.value}%
                        </span>
                      </div>
                      <div className="w-full bg-orange-500/10 rounded-full h-2">
                        <div
                          className="bg-orange-300 h-2 rounded-full"
                          style={{ width: `${skill.value}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          
          <div className="mt-8 w-full">
            <div className="w-full p-6 rounded-xl border-white/10 border-t-2 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4 text-orange-400 text-center">
                Education
              </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2 text-center">
                <li>
                  <strong>SENIOR HIGH</strong> — Albert Zarate General Hospital College (2017-2019)
                </li>
                 <li>
                  <strong>JUNIOR HIGN</strong> — Golden Acres National High School (2013-2017)
                </li>
                 <li>
                  <strong>PRIMARY</strong> — Golden Acres Elementary School (2013-2017)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
