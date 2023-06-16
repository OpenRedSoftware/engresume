import React from "react";
import { CardGroup } from "react-bootstrap";
import "../index.css";
import { logevent } from "../../firebase/firebaseapp";
import { Helmet } from "react-helmet-async";
import GuideCard from "../../components/GuideCard";

function InterviewGuide() {
  React.useEffect(() => {
    logevent("view", { name: window.location.pathname });
  }, []);

  return (
    <main>
      <Helmet prioritizeSeoTags>
        <title>Interview Guide | Pineapple Resume</title>
        <meta property="og:title" content="PineappleResume | Success" />
      </Helmet>
      <div>
        Choose a topic to deep dive:
        <CardGroup>
          <GuideCard
            linkdestination="/interviewguide/behavioral"
            image="holder.js/100px180"
            title="Behavioral Questions"
            description="More than STAR format - How to actually answer behavioral questions"
          />
          <GuideCard
            linkdestination="/interviewguide/coding"
            image="holder.js/100px180"
            title="Coding Questions"
            description="How to prepare for coding questions - Besides Leetcode"
          />
          <GuideCard
            linkdestination="/interviewguide/systemdesign"
            image="holder.js/100px180"
            title="System Design"
            description="Steps to follow during your SD interview - Including the Dos and Don'ts of System Design"
          />
          <GuideCard
            linkdestination="/interviewguide/salary"
            image="holder.js/100px180"
            title="Salaray Negotiation"
            description="Concrete tips you must follow to negotiate for the highest salary"
          />
        </CardGroup>
        <div className="text-muted">
          This interview guide was written by recruiters and hiring managers
          from startups to MANGA+ companies.
        </div>
      </div>
    </main>
  );
}

export default InterviewGuide;
