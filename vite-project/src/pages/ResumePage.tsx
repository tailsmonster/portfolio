import React from "react";

interface Props {};


const ResumePage = (props: Props) => {
  const resumeURL = "https://raw.githubusercontent.com/tailsmonster/portfolio/refs/heads/main/vite-project/src/assets/resume.pdf"
  return (
    <>
      <h1>{resumeURL}</h1>;
    </>
  )
  }

export default ResumePage