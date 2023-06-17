import React from "react";
import "../index.css";
import { logevent } from "../../firebase/firebaseapp";
import GuideCard from "../../components/GuideCard";
import SEO from "../../components/SEO";

function InterviewGuide() {
  React.useEffect(() => {
    logevent("view", { name: window.location.pathname });
  }, []);

  return (
    <div className="container">
      <SEO
        title="Interview Guide | Pineapple Resume"
        description="How to Answer Behavioral, Coding, System Design, and Salary Negotiation Questions - Use this cheat sheet to ace any interview."
        url="https://www.pineappleresume.com/interview"
      />

      <div className="row justify-content-center align-items-center">
        Choose a topic to deep dive:
      </div>
      <div className="row justify-content-center align-items-center d-flex align-items-stretch mt-2 mb-3">
        <GuideCard
          linkdestination="/behavioral"
          image="/res/icons/behavioral.svg"
          title="Behavioral Questions"
          description="More than STAR format - How to actually answer behavioral questions."
        />
        <GuideCard
          linkdestination="/coding"
          image="/res/icons/code.svg"
          title="Coding Questions"
          description="How to prepare for coding questions - Besides Leetcode."
        />
        <GuideCard
          linkdestination="/systemdesign"
          image="/res/icons/sd.svg"
          title="System Design"
          description="Steps to follow during your SD interview - Including the Dos and Don'ts of System Design."
        />
        <GuideCard
          linkdestination="/salary"
          image="/res/icons/salary.svg"
          title="Salary Negotiation"
          description="Concrete tips to follow when negotiating for the highest salary."
        />
      </div>
      <div className="text-muted">
        Resources on this page were written by recruiters and hiring managers
        from startups to MANGA companies.
      </div>
    </div>
  );
}

export default InterviewGuide;
