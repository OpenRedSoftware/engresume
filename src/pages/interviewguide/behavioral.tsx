import React from "react";
import "../index.css";
import { logevent } from "../../firebase/firebaseapp";
import { Helmet } from "react-helmet-async";

function Behavioral() {
  React.useEffect(() => {
    logevent("view", { name: window.location.pathname });
  }, []);

  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>STAR Format Properly | Pineapple Resume</title>
        <meta property="og:title" content="STAR Format Properly | Pineapple Resume" />
        <meta property="og:description" content="Advanced tips on How to use STAR Format - Use this cheat sheet to ace your next interview" />
      </Helmet>
      <div>
        <h2 className="text-center">Behavioral Interview Guide</h2>
        <ul>
          <li className="pb-2">
            <div className="pb-2">Why Situation, Task, Action, Result Format?</div>
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
                what you did.
              </li>
              <li>Never decline answering a question</li>
              <li>
                Practice downwards tone inflection - You don’t want to come off
                as lacking confidence
              </li>
            </ul>
          </li>
          <li className="pb-2">
            <div className="pb-2">Prepare stories</div>
            <ul className="pb-2">
              <li>Do not write out essays</li>
              <li>
                Your stories should be 2-3 words that remind you of a task you
                completed
              </li>
              <li>
                Group your stories by what sort of question they might be asking
                about
              </li>
              <li>
                I recommend the Amazon LPs:
                https://www.amazon.jobs/content/en/our-workplace/leadership-principles
              </li>
              <li>
                If you’re targeting a less senior position, at least group your
                stories for the main ones (Ownership/Customer Obsession/
              </li>
            </ul>
          </li>
        </ul>
        <div className="pb-2">
          For every response, walk through these questions and give the answer.
          It should take 3-5 minutes maximum. If you answer all these questions
          in each of your responses, you will crush the interview.
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

        <li className="pb-2">
          <div className="pb-2">Advanced Tips</div>
          <ul className="pb-2">
            <li>
              The interviewer’s question doesn’t actually matter - What matters
              is you prove you have the skill they’re looking for in the
              question
            </li>
            <li>
              Consider the following question: “Tell me about a time you made a
              hard decision to sacrifice short term gain for a longer-term goal”
            </li>
            <ul>
              <li>
                The interviewer does not really care about the specifics here
              </li>
              <li>
                The interviewer wants you to prove you have ownership over the
                products you’re working on
              </li>
            </ul>
          </ul>
        </li>

        <div className="pb-2">Great external resources:</div>
        <ul className="pb-2">
          <li>
            Guess the LP - Fantastic Behavioral questions:{" "} 
            <a href="https://guessthelp.com/">guessthelp.com</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Behavioral;
