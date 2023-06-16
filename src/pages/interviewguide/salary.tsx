import React from "react";
import "../index.css";
import { logevent } from "../../firebase/firebaseapp";
import { Helmet } from "react-helmet-async";

function Salary() {
  React.useEffect(() => {
    logevent("view", { name: window.location.pathname });
  }, []);

  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>Salary Negotiation Guide | Pineapple Resume</title>
        <meta property="og:title" content="PineappleResume | Success" />
        <meta property="og:description" content="Salary Negotiation Guide" />
        <meta property="og:url" content="https://www.pineappleresume.com/salary" />
        <meta name="description" content="Salary Negotiation Guide" />
      </Helmet>
      You absolutely must negotiate salary. Recruiters and hiring managers expect it. It is almost unheard of for an offer to be withdrawn due to negotiation
      <div className="container">
        <h1 className="text-center">Salary Negotiation Guide</h1>
        <ul>
          <li className="pb-2">
            <div className="pb-2">Tips:</div>
            <ul className="pb-2">
              <li>Know the comp before you enter negotiation</li>
              <ul>
                <li>Use Levels.fyi to look it up for the company, role, and location</li>
                <li>The highest salary you can get is at the top of the pay band for this role</li>
                <li>If your exact role/company isn’t available on Levels, find similar ones</li>
              </ul>
              <li>Do not lie about your current comp</li>
              <ul>
                <li>If you don’t want to share your comp (it’s too low), instead talk about what comp you’d like to see</li>
              </ul>
              <li>Your frame of mind must be that you adore this company and want to work at it, no matter what</li>
              <ul>
                <li>Do not use words like “well I’m waiting on another offer..”</li>
              </ul>
              <li>If you have to give a number first, give a range</li>
              <ul>
                <li>If you give a single number, you’ve capped yourself</li>
                <li>The lowest number you give must always be the lowest value you would accept the offer for</li>
                <li>If you’re not going to join this company for anything less than 180k, don’t say “160-200” and hope it will somehow work out. Say “180-200”. Be prepared to accept the lowest number you give.</li>
                <li>If they can’t match your lowest number, you’ve already messed up</li>
                <ul>
                  <li>Did you not do your research before making your number?</li>
                  <li>Is this a leveling issue?</li>
                  <li>Are you not understanding all the parts in the TC?</li>
                  <li>Can the company just not pay this much, and that difference is too large to overcome?</li>
                </ul>
              </ul>
            </ul>
          </li>
          <li className="pb-2">
            <div className="pb-2">Great external resources:</div>
            <ul className="pb-2">
              <li>https://www.levels.fyi/</li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Salary;