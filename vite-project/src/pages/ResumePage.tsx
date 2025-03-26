import React from "react";

interface Props {};

const ResumePage = (props: Props) => {
  return (
    <>
      <h1>Welcome!</h1>;
      <embed src="https://drive.google.com/viewerng/viewer?embedded=true&url=http://example.com/the.pdf" width="500" height="375"></embed>
    </>
  )
  }

export default ResumePage