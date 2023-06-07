import React from "react";
import { connect } from "react-redux";
import { Fade } from "react-bootstrap";


function FeaturesList({ numberOfLessons }) {
  return (
    <ul>
      <li>100% free to use</li>
      <li>Sign up to save progress</li>
      <Fade
        in={numberOfLessons !== null}
      >
        <li>{numberOfLessons}+ Lessons (and more coming!)</li>
      </Fade>
    </ul>
  );
}

const mapStateToProps = (state) => ({
  numberOfLessons: state.splashNumberOfLessons,
});

export default connect(mapStateToProps)(FeaturesList);
