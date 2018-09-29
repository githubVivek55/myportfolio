import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getHomeContent} from '../actions/HomeAction';
import PropTypes from 'prop-types';

class Home extends Component {
  componentDidMount () {
    this.props.getHomeContent ();
  }
  render () {
    const {firstName, lastName, desc} = this.props.data.data;
    if (firstName === undefined) {
      return <div>Loading..</div>;
    } else {
      return (
        <main id="home">
          <h1 className="lg-heading">
            {firstName}
            <span className="text-secondary"> {lastName}</span>
          </h1>
          <h2 className="sm-heading">{desc}</h2>

          <div className="icons">
            <a href="https://twitter.com/Vwake5" target="blank">
              <i className="fab fa-twitter fa-2x" />
            </a>
            <a
              href="https://www.linkedin.com/in/vivek-sharma-850141137"
              target="blank"
            >
              <i className="fab fa-linkedin fa-2x" />
            </a>
            <a
              href="https://github.com/githubVivek55?tab=repositories"
              target="blank"
            >
              <i className="fab fa-github fa-2x" />
            </a>
          </div>
        </main>
      );
    }
  }
}
Home.propTypes = {
  getHomeContent: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  data: state.home,
});

export default connect (mapStateToProps, {getHomeContent}) (Home);
