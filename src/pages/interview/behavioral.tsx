import React from "react";
import "../index.css";
import { logevent } from "../../firebase/firebaseapp";
import SEO from "../../components/SEO";

function Behavioral() {
  React.useEffect(() => {
    logevent("view", { name: window.location.pathname });
  }, []);

  return (
    <>
      <SEO title="STAR Format Properly | Pineapple Resume"
        description="Advanced tips on How to use STAR Format - Use this cheat sheet to ace your next interview"
        url="https://www.pineappleresume.com/behavioral" />
      <div>
        <h2 className="text-center p-2">Behavioral Interview Guide</h2>
        <ul>
          <li className="pb-2">
            <div className="pb-2">
              Why Situation, Task, Action, Result Format?
            </div>
            <ul className="pb-2">
              <li>It forces linear story-telling</li>
              <li>Keeps the interviewer engaged</li>
              <li>
                You will cover everything the interviewer is expecting to hear
                (whether the interviewer knows it or not)
              </li>
            </ul>
          </li>
          <li className="pb-2">
            <div className="pb-2">Tips</div>
            <ul className="pb-2">
              <li>
                Avoid saying “we” when telling stories. Everything should be
                what <i>you</i> did.
              </li>
              <li>Never decline answering a question.</li>
            </ul>
          </li>
          <li className="pb-2">
            <div className="pb-2">Prepare stories</div>
            <ul className="pb-2">
              <li>Do not write out essays.</li>
              <li>
                Your stories should be 2-3 words that <i>remind</i> you of a
                task you completed.
              </li>
              <li>
                Group your stories by LPs.
                <ul>
                  <li>
                    If you don't want to follow the Amazon LPs, at least group
                    by Ownership/Customer Obsession/Dive Deep/Hire & Develop the
                    Best
                  </li>
                  <li>
                    These groups will cover 90% of the questions you will be
                    asked in a behavioral interview
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        <div className="pb-2">
          For every response, walk through these questions and give the answer.
          It should take 3-5 minutes maximum.
        </div>
        <ul className="pb-2">
          <li>ST-</li>
          <ul>
            <li>What problem are you trying to solve?</li>
            <li>Who is the customer?</li>
            <li>Why does it need to be solved now?</li>
            <li>Why do I need to solve it? Can't it be solved elsewhere?</li>
            <li>What negative outcome do we avoid by prioritising this?</li>
            <li>What metrics would show success? (give #)</li>
          </ul>
          <li>A-</li>
          <ul>
            <li>What course of action did you take?</li>
            <li>Why that course of action?</li>
            <li>What additional information did you seek out?</li>
            <li>What alternatives did you consider and reject?</li>
          </ul>
          <li>R-</li>
          <ul>
            <li>What was the outcome</li>
            <li>What were the performance metrics?</li>
            <li>How did this outcome measure against estimations?</li>
            <li>What monitoring frameworks did you put in place?</li>
          </ul>
        </ul>

        <ul>
          <li className="pb-2">
            <div className="pb-2">Advanced Tips</div>
            <ul className="pb-2">
              <li>
                The interviewer’s question doesn’t actually matter - What
                matters is you prove you have the skill they’re looking for
              </li>
              <li>
                Consider the following question: “Tell me about a time you made
                a hard decision to sacrifice short term gain for a longer-term
                goal”
              </li>
              <ul>
                <li>
                  The interviewer does not really care about the specifics
                </li>
                <li>
                  The interviewer wants you to prove you have ownership over the
                  products you’re working on
                </li>
              </ul>
            </ul>
          </li>
        </ul>

        <div className="pb-2">Great external resources:</div>
        <ul className="pb-2">
          <li>
            Guess the LP - In addition to answering the questions above, GuessTheLP tells
            you what the interviewer wants to know for each LP:{" "}
            <a href="https://guessthelp.com/">guessthelp.com</a>
          </li>
          <li>
            Amazon Leadership Principles:{" "}
            <a href="https://www.amazon.jobs/content/en/our-workplace/leadership-principles">
              amazon.jobs
            </a>
          </li>
        </ul>

        <p className="text-muted">
          This article focuses is based around Amazon's LPs, but the same principles apply to every company.
        </p>
      </div>
    </>
  );
}

export default Behavioral;
