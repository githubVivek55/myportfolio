import React, {Component} from 'react';
import portrait from '../images/portrait.jpg';
import {connect} from 'react-redux';
import {getAboutme} from '../actions/AboutmeAction';
import PropTypes from 'prop-types';

class About extends Component {
  componentDidMount () {
    this.props.getAboutme ();
  }
  render () {
    const {bio, role} = this.props.data.data;

    if (role === undefined || role.length === 0) {
      return (
        <React.Fragment>
          <p>Loading..</p>
        </React.Fragment>
      );
    } else {
      console.log (role);
      return (
        <main id="home">
          <h1 className="lg-heading">
            About
            <span className="text-secondary"> Me</span>
          </h1>
          <h2 className="sm-heading">Let me tell you something about me </h2>
          <div className="about-info">
            <img
              src={portrait}
              height="150px"
              width="150px"
              alt="vivek sharma"
              className="bio-image"
            />
            <div className="bio">
              <h3 className="text-secondary">BIO</h3>
              <p>
                {bio}
              </p>
            </div>
            <div className="job job-1">
              <h3>{role[0].title}</h3>
              <p>{role[0].desc}</p>
            </div>
            <div className="job job-2">
              <h3>{role[1].title}</h3>
              <p>{role[1].desc}</p>
            </div>
            <div className="job job-3">
              <h3>{role[2].title}</h3>
              <p>{role[2].desc}</p>
            </div>
          </div>
        </main>
      );
    }
  }
}

About.propTypes = {
  getAboutme: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  data: state.Aboutme,
});

export default connect (mapStateToProps, {getAboutme}) (About);
