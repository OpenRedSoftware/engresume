import React from "react";
import "../index.css";
import { logevent } from "../../firebase/firebaseapp";
import { Helmet } from "react-helmet-async";
import GuideCard from "../../components/GuideCard";

function InterviewGuide() {
  React.useEffect(() => {
    logevent("view", { name: window.location.pathname });
  }, []);

  return (
    <div className="container">
      <Helmet prioritizeSeoTags>
        <title>Interview Guide | Pineapple Resume</title>
        <meta
          property="og:title"
          content="Interview Guide | Pineapple Resume"
        />
        <meta
          property="og:description"
          content="How to Answer Behavioral, Coding, System Design, and Salary Negotiation Questions - Use this cheat sheet to ace any interview."
        />
      </Helmet>

      <div className="row justify-content-center align-items-center">
        Choose a topic to deep dive:
      </div>
      <div className="row justify-content-center align-items-center">
        <GuideCard
          linkdestination="/interviewguide/behavioral"
          image="/res/icons/behavioral.svg"
          title="Behavioral Questions"
          description="More than STAR format - How to actually answer behavioral questions."
        />
        <GuideCard
          linkdestination="/interviewguide/coding"
          image="/res/icons/code.svg"
          title="Coding Questions"
          description="How to prepare for coding questions - Besides Leetcode."
        />
        <GuideCard
          linkdestination="/interviewguide/systemdesign"
          image="/res/icons/sd.svg"
          title="System Design"
          description="Steps to follow during your SD interview - Including the Dos and Don'ts of System Design."
        />
        <GuideCard
          linkdestination="/interviewguide/salary"
          image="/res/icons/salary.svg"
          title="Salary Negotiation"
          description="Concrete tips to follow when negotiating for the highest salary."
        />
        <div className="text-muted">
          Resources on this page were written by recruiters and hiring managers
          from startups to MANGA companies.
        </div>
      </div>
    </div>
  );
}

export default InterviewGuide;
