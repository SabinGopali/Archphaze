import React from "react";
import img from "../assets/homescreen.png";
import { Link } from "react-router-dom";

const JoinOurTeam = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between px-6 py-12 lg:px-16 bg-white text-gray-800 gap-10 lg:gap-20">
      {/* Left Content */}
      <div className="w-full lg:w-1/2 space-y-6">
        <h1 className="text-3xl sm:text-4xl font-bold uppercase">Join Our <span className="text-red-500">Team</span> </h1>
        <p className="text-base sm:text-lg">
          Join our Journey to Enhancing Great Software to Perfection!
        </p>

        <div className="overflow-x-auto rounded-lg shadow-sm">
          <table className="min-w-full border border-gray-200">
            <thead>
              <tr className="bg-gray-100 text-sm sm:text-base">
                <th className="border px-4 py-2 text-left">Position</th>
                <th className="border px-4 py-2 text-left">Vacancy</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Frontend Developer", 2],
                ["Backend Developer", 3],
                ["Full Stack Developer", 1],
                ["Mobile App Developer", 2],
                ["DevOps Engineer", 1],
                ["QA Engineer", 2],
                ["UI/UX Designer", 1],
              ].map(([position, vacancy], i) => (
                <tr key={i} className="text-sm sm:text-base">
                  <td className="border px-4 py-2">{position}</td>
                  <td className="border px-4 py-2">{vacancy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-sm sm:text-base leading-relaxed text-justify">
          We are a dynamic team of dedicated, vibrant minds, united in our
          mission to deliver unparalleled technical support to both local and
          global brands. Our culture thrives on collaboration, devoid of
          hierarchies, where every voice is valued and every idea welcomed.
          Together, we cultivate an environment of creativity and cooperation,
          empowering each member to flourish and achieve greatness. Do not
          hesitate to send your resume even for freshers. We are excited to have
          you onboard!
        </p>

        <p className="text-sm sm:text-base text-justify">
          Send us your resume to{" "}
          <Link
            to="mailto:info@example.com"
            className="text-red-500 font-medium"
          >
            info@example.com
          </Link>{" "}
          to explore your career at{" "}
          <span className="text-red-500 font-medium text-justify">Archphaze Technologies</span>.
        </p>
      </div>

      {/* Right Image */}
      <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
        <img
          src={img}
          alt="Team illustration"
          className="w-full max-w-md mx-auto lg:max-w-full h-auto"
        />
      </div>
    </div>
  );
};

export default JoinOurTeam;
