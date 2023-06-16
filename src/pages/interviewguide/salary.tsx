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
        <title>How to do Salary Negotiation Properly | Pineapple Resume</title>
        <meta property="og:title" content="How to do Salary Negotiation Properly | Pineapple Resume" />
        <meta property="og:description" content="No fluff - These are the steps you must follow to maximize your negotiation and make sure you get the highest compensation for any role." />
        <meta
          property="og:url"
          content="https://www.pineappleresume.com/salary"
        />
        <meta name="description" content="Salary Negotiation Guide" />
      </Helmet>
      <div className="container">
        <h2 className="text-center">Salary Negotiation Guide</h2>
        <ul>
          <li className="pb-2">
            <div className="pb-2">When should you negotiate salary?</div>
            <ul className="pb-2">
              <li>After you’ve received an offer</li>
              <ul>
                <li>
                  Before you have an offer, display the energy of "I love this
                  company so much, and can't wait to work here!"
                </li>
              </ul>
              <li>You absolutely must negotiate salary</li>
              <ul>
                <li>Hiring managers expect this</li>
                <li>
                  It is almost unheard of for an offer to be withdrawn due to
                  salary negotiation
                </li>
                <ul>
                  <li>
                    Complete unfounded greed and lies can get your offer
                    withdrawn
                  </li>
                  <li>
                    In hiring of over 1,000 candidates, we've seen only 2 or 3
                    cases of an offer being withdrawn at the negotiation phase
                  </li>
                </ul>
              </ul>
            </ul>
          </li>
          <li>
            <div className="pb-2">Maximizing Salary:</div>
            <ul className="pb-2">
              <li>Know the comp for this role before you enter negotiation</li>
              <ul>
                <li>
                  Use Levels.fyi to look it up for the company, role, and
                  location
                </li>
                <li>
                  The highest salary you can get is at the top of the pay band
                  for this role
                </li>
                <li>
                  If your exact role/company isn’t available on Levels, find
                  similar ones
                </li>
              </ul>
              <li>Do not lie about your current comp</li>
              <ul>
                <li>
                  If you don’t want to share your comp (it’s too low), instead
                  talk about what comp you’d like to see
                </li>
              </ul>
              <li>
                Your frame of mind must be that you adore this company and want
                to work at it, no matter what
              </li>
              <ul>
                <li>
                  Do not use phrases like “well I’m waiting on another offer..”
                </li>
              </ul>
              <li>If you have to give a number first, give a range</li>
              <ul>
                <li>If you give a single number, you’ve capped yourself</li>
                <li>
                  The lowest number you give must always be the lowest value you
                  would accept the offer for
                </li>
                <li>
                  If you’re not going to join this company for anything less
                  than 180k, don’t say “160-200” and hope it will somehow work
                  out. Say “180-200”. Be prepared to accept the lowest number
                  you give.
                </li>
                <li>
                  If they can’t match your lowest number, you’ve already messed
                  up
                </li>
                <ul>
                  <li>
                    Did you not do your research before making your number?
                  </li>
                  <li>Is this a leveling issue?</li>
                  <li>Are you not understanding all the parts in the TC?</li>
                  <li>
                    Can the company just not pay this much, and that difference
                    is too large to overcome?
                  </li>
                </ul>
              </ul>
            </ul>
          </li>
        </ul>
        <div className="pb-2">Great external resources:</div>
        <ul className="pb-2">
          <li>
            <a href="https://www.levels.fyi/">Levels.fyi</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Salary;
