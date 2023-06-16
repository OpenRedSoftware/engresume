import React from "react";
import "../index.css";
import { logevent } from "../../firebase/firebaseapp";
import { Helmet } from "react-helmet-async";

function Coding() {
  React.useEffect(() => {
    logevent("view", { name: window.location.pathname });
  }, []);

  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>Coding Interview Guide | Pineapple Resume</title>
        <meta property="og:title" content="Acing Coding Interviews | Pineapple Resume" />
        <meta property="og:description" content="How to Answer Coding Interview Questions Properly - Use this cheat sheet to ace any Leetcode interview question." />
      </Helmet>
      <div>
        <h2 className="text-center">Coding Interview Guide</h2>
        <ul>
          <li className="pb-2">
            <div className="pb-2">
              If you’re not talking, I can only assume you’re completely lost
            </div>
            <ul className="pb-2">
              <li>
                It is almost unheard of for a candidate to pass a high level
                technical interview if they go more than 30 seconds at a time
                without saying something
              </li>
              <li>
                If you’re not writing code, talk out loud about what you’re
                thinking of
              </li>
              <li>
                “It looks like we’re going to need to sort the input so that
                [...]”
              </li>
              <li>If you are writing code, explain what you’re writing</li>
              <li>“We need to iterate over all the elements and [...]”</li>
            </ul>
          </li>
          <li className="pb-2">
            <div className="pb-2">
              If you don’t get the brute force solution, you’re lost
            </div>
            <ul className="pb-2">
              <li>
                The brute force solution should only take a few minutes, and it
                will reinforce that you understand the problem
              </li>
              <li>
                It doesn’t matter if you got 90% of the way to an optimal
                solution
              </li>
            </ul>
          </li>
          <li className="pb-2">
            <div className="pb-2">Steps to follow:</div>
            <ul className="pb-2">
              <li>Repeat the question, talk through it</li>
              <li>Come up with examples, solve them</li>
              <li>Come up with edge cases</li>
              <li>Code</li>
              <li>Test main examples</li>
              <li>Test edge cases</li>
              <li>Improve</li>
              <li>Talk about time+space complexity</li>
            </ul>
          </li>
          <li className="pb-2">
            <div className="pb-2">How many Leetcode questions?</div>
            <ul className="pb-2">
              <li>
                If targeting entry-level MANGA+, aim for at least Blind75 + 50-100 more
                mediums with &#62;80% success rate
              </li>
              <li>
                For senior roles, aim for full Neetcode 150 + 50-100 more mediums
              </li>
              <li>
                If based in India, aim for 200+ mediums and 50-100 hards, and use Codeforces instead of Leetcode
              </li>
            </ul>
          </li>
        </ul>
        <div className="pb-2">Great external resources:</div>
        <ul className="pb-2">
          <li>
            Neetcode - The most important Leetcode questions you should solve +
            excellent video walkthrough solutions:{" "}
            <a href="https://neetcode.io/practice">neetcode.io/practice</a>
          </li>
          <li>
            Codeforces - Rating system, more challenging than Leetcode, great for getting problems at your level:{" "}
            <a href="https://codeforces.com/">codeforces.com</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Coding;
