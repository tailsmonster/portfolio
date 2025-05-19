// import React from "react";
import experiences from "../lib/experiences"
import { Experience } from "../lib/Experience"
// interface Props {};

const ExperiencePage = () => {
  return (
    <div className="min-h-screen bg-neutral-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-left">Experience</h1>
        <div className="space-y-10">
          {[...experiences].reverse().map((exp: Experience, idx: number) => (
            <div key={idx} className="bg-white rounded-xl shadow-md p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-semibold">{exp.title}</h2>
                  <p className="text-sm text-gray-600">{`${exp.company} - ${exp.type}`}</p>
                  <p className="text-sm text-gray-600">{exp.startDate.join(" ")} – {exp.endDate.join(" ")}</p>
                  <p className="text-sm text-gray-600">{`${exp.location} - ${exp.locationType}`}</p>
                  {/* <p className="text-sm text-gray-500">{exp.type}</p> */}
                </div>
                <span className="">
                  <img className="h-20 w-20" src={exp.logo} alt={`${exp.company} logo`}/>
                </span> 
              </div>
              <ul className="mt-4 list-disc list-inside text-sm text-gray-700 space-y-1">
                {exp.description.map((point: string, i: number) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );


}

export default ExperiencePage