import React from "react";
import "../index.css";
import { logevent } from "../../firebase/firebaseapp";
import { Helmet } from "react-helmet-async";

function SystemDesign() {
  React.useEffect(() => {
    logevent("view", { name: window.location.pathname });
  }, []);

  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>System Design Interview Guide | Pineapple Resume</title>
        <meta
          property="og:title"
          content="How to answer System Design questions in an Interview | Pineapple Resume"
        />
        <meta
          property="og:description"
          content="Use this System Design cheat sheet to ace any System Design interview question."
        />
      </Helmet>
      <div>
        <h2 className="text-center p-2">System Design Interview Guide</h2>
        <ul>
          <li className="pb-2">
            <div className="pb-2">Tips:</div>
            <ul className="pb-2">
              <li>
                Make sure you walk through every API call after your design.
              </li>
              <li>
                If you’re going to make any elegant drawings at all, make sure
                you’re fluent in your design software.
              </li>
              <li>
                Do not blurt out SQL vs NoSQL pros & cons. Mention only what is
                relevant to your design.
              </li>
              <li>Be very wary of time</li>
              <ul>
                <li>
                  A lot of major parts in the SD interview can be covered in
                  under 20 seconds, so don’t spend 5 minutes on them
                </li>
                <li>
                  I.e. Edge cases, bottlenecks, analytics, security, health
                  checks
                </li>
                <li>
                  The interviewer will ask for more detail if they want you to
                  spend more time
                </li>
              </ul>
              <li>
                When making modifications due to changing requirements at the
                end of the interview, you don’t need to draw them
              </li>
              <li>
                Requirements and Math mostly the same in every SD interview,
                don’t spend much time here
              </li>
              <li>
                The SD interview is a two-way conversation. Drive the
                conversation, but be ready for feedback.
              </li>
            </ul>
          </li>
          <p>As a concrete example, let’s design Twitter.</p>
          <li className="pb-2">
            <div className="pb-2">Steps to follow:</div>
            <ul className="pb-2">
              <li>Requirements Clarifications</li>
              <ul>
                <li>
                  Are we focusing on the backend only, or are we developing the
                  front-end too?
                </li>
                <li>Mention edge cases out loud (10 seconds)</li>
                <li>Functional</li>
                <ul>
                  <li>
                    Will users of our service be able to post tweets and follow
                    other people?
                  </li>
                  <li>Will users be able to search tweets?</li>
                  <li>Do we need to display hot trending topics?</li>
                </ul>
                <li>Non Functional</li>
                <ul>
                  <li>Availability: 99.999%</li>
                  <li>Latency: 0.5 seconds to load Tweets</li>
                  <li>Scale (how many users, pick a realistic number)</li>
                </ul>
                <li>Talk about edge cases out loud (10 seconds)</li>
              </ul>
              <li>
                Back of the envelope estimations
                <ul>
                  <li>
                    What scale is expected from the system (e.g., number of new
                    tweets, number of tweet views, number of timeline
                    generations per sec., etc.)?
                  </li>
                  <li>Do math to calculate storage</li>
                </ul>
              </li>
              <li>System interface design</li>
              <ul>
                <li>
                  postTweet(user_id, tweet_data, tweet_location, user_location,
                  timestamp, …)
                </li>
                <li>
                  generateTimeline(user_id, current_time, user_location, …)
                </li>
                <li>markTweetFavorite(user_id, tweet_id, timestamp, …)</li>
              </ul>
              <li>Defining data model</li>
              <ul>
                <li>
                  User: UserID, Name, Email, DoB, CreationDate, LastLogin, etc.
                </li>
                <li>
                  Tweet: TweetID, Content, TweetLocation, NumberOfLikes,
                  TimeStamp, etc.
                </li>
                <li>UserFollow: UserID1, UserID2</li>
                <li>FavoriteTweets: UserID, TweetID, TimeStamp</li>
              </ul>
              <ul>
                <li>Storage, transportation, encryption</li>
                <li>What database to use?</li>
                <ul>
                  <li>SQL better for relational data/efficient queries</li>
                  <ul>
                    <li>If asked-</li>
                    <li>User id is primary key, int, serial</li>
                    <li>
                      Photo has own primary id, int serial, has user id as
                      foreign key
                    </li>
                  </ul>
                  <li>
                    NoSQL better for unorganized data, easier to horizontally
                    scale & shard
                  </li>
                </ul>
              </ul>
              <li>High-level design</li>
              <ul>
                <li>Do not waste ample time making it pretty</li>
                <li>Be very good in the software you’re using</li>
              </ul>
            </ul>
          </li>
        </ul>
        <div className="pb-2">Great external resources:</div>
        <ul className="pb-2">
          <li>
            AI driven System Design interviews:{" "}
            <a href="https://www.hellointerview.com/">hellointerview</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default SystemDesign;
