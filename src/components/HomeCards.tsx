import React from "react";
import GuideCard from "./GuideCard";
import FilePenIcon from "../icons/FilePenIcon";
import CircleQuestionIcon from "../icons/CircleQuestionIcon";
import ImproveIcon from "../icons/ImproveIcon";

function InterviewGuide() {
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center d-flex align-items-stretch mt-2 mb-3">
        <GuideCard
          linkdestination="/checkout"
          image={FilePenIcon}
          title="Get Reviewed"
          description="Get your resume professionally reviewed."
        />
        <GuideCard
          linkdestination="/interview"
          image={CircleQuestionIcon}
          title="Interview Guides"
          description="Use our service to get the interviews. Then follow these guides to land the job."
        />
        <GuideCard
          linkdestination="/examples"
          image={ImproveIcon}
          title="Example Reviews"
          description="See examples of the reviews we provide."
        />
      </div>
    </div>
  );
}

export default InterviewGuide;
