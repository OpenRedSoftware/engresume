import React from "react";
import { logevent } from "../../firebase/firebaseapp";
import SEO from "../../components/SEO";

function Coding() {
  React.useEffect(() => {
    logevent("view", { name: window.location.pathname });
  }, []);

  return (
    <>
      <SEO
        title="Acing Coding Interviews | Pineapple Resume"
        description="How to Answer Coding Interview Questions Properly - Use this cheat sheet to ace any Leetcode interview question."
        url="htt[s://www.pineappleresume.com/coding"
      />
      <div>
        <h2 className="text-center p-2">Coding Interview Guide</h2>
        <div className="pb-2">Pre-interview prep</div>
        <ul className="pb-2">
          <li>
            How many Leetcode questions?
            <ul>
              <li>
                Entry-level SWE: Blind75 with &#62;80% success rate (without
                checking hints or solutions)
              </li>
              <li>
                Entry-level MANGA+: Blind75 + 200 total mediums, &#62;80%
                success rate
              </li>
              <li>Senior roles: full Neetcode 150 + 200 more mediums</li>
              <li>If based in India, aim for 100+ hards</li>
            </ul>
          </li>
          <li>
            What language?
            <ul>
              <li>
                Any language is fine, but Python is best. It's succinct,
                interviewers knows it, and it has great builtins (lru_cache,
                bisect, heap)
              </li>
            </ul>
            <li>Study Guide:</li>
            <ul>
              <li>
                Basic algorithm and data structures
                <sup>
                  <a href="#links">#</a>
                </sup>
              </li>
              <li>Blind 75</li>
              <li>Neetcode 150</li>
              <li>Daily Leetcode Challenge until your interview</li>
            </ul>
          </li>
        </ul>
        <div className="pb-2">Interview Room</div>
        <ul>
          <li>Never stop talking out loud</li>
          <ul className="pb-2">
            <li>Going silent is the #1 reason people fail interviews.</li>
            <li>
              Despite being a coding round, most of your evaluation will be on
              communication, not coding.
            </li>
            <li>
              Communicate your thought process. Walk through examples out loud.
              When you're coding, explain what you're doing.
            </li>
            <ul>
              <li>
                "As a brute force, we could permutate over all of the [...]"
              </li>
              <li>
                "It looks like we’re going to need to sort the input so that
                [...]"
              </li>
              <li>"We need to iterate over all the elements and [...]"</li>
            </ul>
            <li>
              In the hundreds of technical interviews I've run, not one
              candidate get a "strong hire" if they went silent for over 60
              seconds.
            </li>
          </ul>
          <li className="pb-2">
            You must get a solution, even if it's brute force
          </li>
          <ul className="pb-2">
            <li>The brute force solution should only take a minute or two.</li>
            <li>
              If you know you will get the optimal solution, you don't need to
              write the brute force.
            </li>
            <li>
              Brute forcing will reinforce that you understand the problem.
            </li>
            <li>
              While unlikely, a coding round can be saved by great communication
              around a brute force solution.
            </li>
          </ul>
          <li>
            If whiteboarding, leave space between each line so you can easily
            make adjustments.
          </li>
        </ul>
        <div className="pb-2">During the interview, follow these steps:</div>
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
        <div className="pb-2" id="links">
          Great external resources:
        </div>
        <ul className="pb-2">
          <li>
            Bari's Playlist - Introduction to Algorithms and Time Complexity:{" "}
            <a href="https://www.youtube.com/playlist?list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O">
              youtube.com
            </a>
            <ul>
              <li>
                This is quite long, but the first 16 videos are fantastic for
                beginners
              </li>
            </ul>
          </li>
          <li>
            Data Structures by an ex-Competitive Programmer:{" "}
            <a href="https://www.youtube.com/playlist?list=PLDV1Zeh2NRsB6SWUrDFW2RmDotAfPbeHu">
              youtube.com
            </a>
            <ul>
              <li>
                These videos are quite short and will set you up for Blind75
              </li>
            </ul>
          </li>
          <li>
            Neetcode - The most important Leetcode questions you should solve +
            excellent video walkthrough solutions:{" "}
            <a href="https://neetcode.io/practice">neetcode.io/practice</a>
          </li>
          <li>
            Codeforces - Rating system, more challenging than Leetcode, great
            for getting problems at your level:{" "}
            <a href="https://codeforces.com/">codeforces.com</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Coding;
