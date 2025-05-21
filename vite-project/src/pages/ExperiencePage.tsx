// import React from "react";
import experiences from "../lib/experiences"
import { Experience } from "../lib/Experience"
import educations from "../lib/educations";
import { Education } from "../lib/Education";
import certifications from "../lib/certifications";
import { Certification } from "../lib/Certification";
// interface Props {};


const experience_content = () => {
  return ( 
    <>
      <div className="space-y-10 ">
          {[...experiences].reverse().map((exp: Experience, idx: number) => (
            <div key={idx} className="bg-white rounded-xl shadow-md p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold font-Inter">{exp.title}</h3>
                  <p className="text-m font-semibold text-gray-600 ">{`${exp.company} - ${exp.type}`}</p>
                  <p className="text-sm text-gray-600">{exp.startDate.join(" ")} – {exp.endDate?.join(" ")}</p>
                  <p className="text-sm text-gray-600">{`${exp.location} - ${exp.locationType}`}</p>
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
    </>
  )
}

const education_content = () => {
  return (
    <>
      <div className="space-y-10">
        {[...educations].reverse().map((edu:Education, idx: number) => (
          <div key={idx} className="bg-white rounded-x1 shadow-md p-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold font-Inter">{edu.school}</h3>
                <p className="text-m text-gray-600 font-semibold">{`${edu.field}`}</p>
                <p className="text-sm text-gray-600">{`${edu.startDate.join(" ")} - ${edu.endDate?.join(" ")}`}</p>
              </div>
              <span className="">
                <img className="h-20 w-20" src={edu.logo} alt={`${edu.school} logo`}/>
              </span> 
            </div>
            <ul className="mt-4 list-disc list-inside text-sm text-gray-700 space-y-1">
                  {edu.description.map((point: string, i: number) => (
                    <li key={i}>{point}</li>
                  ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  )
}

const certification_content = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {[...certifications].reverse().map((cert: Certification, idx: number) => (
        <div
          key={idx}
          className="bg-white rounded-xl shadow-md transition p-4 flex flex-col items-center text-center"
        >
          {cert.logo && (
            <img
              src={cert.logo}
              alt={`${cert.issuer} logo`}
              className="w-12 h-12 object-contain mb-2"
            />
          )}
          <h3 className="text-sm font-semibold">{cert.title}</h3>
          <p className="text-xs text-gray-600">{cert.issuer}</p>
          <p className="text-xs text-gray-500">{cert.date.join(" ")}</p>
          {cert.credential?.[0] && (
            <a
              href={cert.credential[0]}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 text-xs text-blue-500 underline"
            >
              View Credential
            </a>
          )}
        </div>
      ))}
    </div>
  );
}


const ExperiencePage = () => {
  return (
    <div className="min-h-screen bg-neutral-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold m-4 text-center font-Inter">Experience</h2>
        {experience_content()}
      </div>

      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold m-4 text-center font-Inter">Education</h2>
        {education_content()}
      </div>

      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold m-4 text-center font-Inter">Certifications</h2>
        {certification_content()}
      </div>
    </div>
  );


}

export default ExperiencePage;