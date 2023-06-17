import React from "react";
import "../index.css";
import { logevent } from "../../firebase/firebaseapp";
import { Helmet } from "react-helmet-async";
import Form from "react-bootstrap/Form";

function Salary() {
  React.useEffect(() => {
    logevent("view", { name: window.location.pathname });
  }, []);

  const [cheatsheet, setCheatsheet] = React.useState(
    localStorage.getItem("cheatsheet") === "true"
  );

  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>How to do Salary Negotiation Properly | Pineapple Resume</title>
        <meta
          property="og:title"
          content="How to do Salary Negotiation Properly | Pineapple Resume"
        />
        <meta
          property="og:description"
          content="No fluff - These are the steps you must follow to maximize your negotiation and make sure you get the highest compensation for any role."
        />
        <meta
          property="og:url"
          content="https://www.pineappleresume.com/salary"
        />
        <meta name="description" content="Salary Negotiation Guide" />
      </Helmet>
      <div className="container">
        <h2 className="text-center p-2">Salary Negotiation Guide</h2>
        <div className="row pb-3 pb-md-0">
          <Form>
            <Form.Check
              reverse
              type="switch"
              id="custom-switch"
              label="Cheatsheet"
              onChange={() => {
                setCheatsheet(!cheatsheet);
                localStorage.setItem("cheatsheet", `${!cheatsheet}`);
              }}
              defaultChecked={localStorage.getItem("cheatsheet") === "true"}
            />
          </Form>
        </div>
        <div
          className="pb-2"
          style={{ display: cheatsheet ? "none" : "block" }}
        >
          <div className="pb-2">When should you negotiate salary?</div>
          <ul className="pb-2">
            <li>After you’ve received an offer</li>
            <ul>
              <li>
                Before you have an offer, display the energy of "I love this
                company so much, and can't wait to work here!"
              </li>
            </ul>
            <li>You absolutely must negotiate salary.</li>
            <ul>
              <li>Hiring managers expect this.</li>
              <li>
                It is unheard of for an offer to be withdrawn for negotiation.
              </li>
              <ul>
                <li>
                  Greed, immaturity and lies can get your offer withdrawn.
                </li>
                <li>
                  In over 1,000 candidate hires, we've seen only 2 or 3 cases of
                  an offer being withdrawn due to negotiation.
                </li>
              </ul>
            </ul>
          </ul>
        </div>
        <div className="pb-2">Maximizing Salary:</div>
        <ul className="pb-2">
          <div className="row d-flex align-items-stretch">
            <div className="col-auto">
              <li>
                Know the max comp for this role before you enter negotiation
                {cheatsheet ? ": " : "."}
              </li>
            </div>
            <div
              className="col-auto p-0"
              style={{ display: cheatsheet ? "block" : "none" }}
            >
              <Form>
                <Form.Control
                  className="form-control-sm m-0"
                  onChange={(e) => {
                    localStorage.setItem("salary", e.target.value);
                  }}
                  defaultValue={localStorage.getItem("salary")}
                  placeholder="200"
                />
              </Form>
            </div>
          </div>
          <ul style={{ display: cheatsheet ? "none" : "block" }}>
            <li>Look up the company/role/location on Levels.fyi.</li>
            <li>
              The highest salary you can get is the top of the pay band for this
              role.
            </li>
            <li>
              If your exact role/company isn’t available on Levels, find similar
              ones.
            </li>
          </ul>
          <li>Do not lie about your current comp.</li>
          <ul style={{ display: cheatsheet ? "none" : "block" }}>
            <li>
              Don't bring up your current comp unless you have to. Focus on what
              comp you would like to see.
            </li>
          </ul>
          <li>
            Your frame of mind must be that you adore this company and want to
            work at it.
            <ul>
              <li style={{ display: cheatsheet ? "none" : "block" }}>
                Your hiring manager needs to feel confident when pitching to
                their manager that the number you reach will close the deal.
              </li>
            </ul>
          </li>
          <ul>
            <li>
              Do not use phrases like "well I’m waiting on another offer.."
            </li>
          </ul>
          <div className="row d-flex align-items-stretch">
            <div className="col-auto">
              <li>
                If you have to give a number first, give a range
                {cheatsheet ? ": " : "."}
              </li>
            </div>
            <div
              className="col-auto p-0"
              style={{ display: cheatsheet ? "block" : "none" }}
            >
              <Form>
                <Form.Control
                  className="form-control-sm m-0"
                  onChange={(e) => {
                    localStorage.setItem("range", e.target.value);
                  }}
                  defaultValue={localStorage.getItem("range")}
                  placeholder="180-200"
                />
              </Form>
            </div>
          </div>
          <ul style={{ display: cheatsheet ? "none" : "block" }}>
            <li>If you give a single number, you’ve capped yourself</li>
            <li>
              The lowest number you give must always be the lowest value you
              would accept.
            </li>
            <li>
              If you won't quit your current job for anything less than 180k,
              don’t say “160-200” and hope it will somehow work out. Say
              “180-200”, and be ready to accept 180.
            </li>
            <li>
              If they can’t match your lowest number, there was already a
              problem.
            </li>
            <ul>
              <li>Did you not do your research before making your number?</li>
              <li>Is this a leveling issue?</li>
              <li>Are you not understanding all the parts in the TC?</li>
              <li>Can the company just not pay this much?</li>
            </ul>
          </ul>
          <li>Salary &#62; Stock &#62; Bonus</li>
        </ul>
        <div style={{ display: cheatsheet ? "none" : "block" }}>
          <div className="pb-2">Great external resources:</div>
          <ul className="pb-2">
            <li>
              <a href="https://www.levels.fyi/">Levels.fyi</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Salary;
