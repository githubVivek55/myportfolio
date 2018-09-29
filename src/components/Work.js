import React, {Component} from 'react';
import Project from './Project';
import axios from 'axios';
import {connect} from 'react-redux';
import {getMyWork} from '../actions/WorkAction';
import PropTypes from 'prop-types';

class Work extends Component {
  componentDidMount () {
    this.props.getMyWork ();
  }
  render () {
    console.log (this.props);
    const {heading, subHeading, projects} = this.props.data.data;

    if (projects === undefined || projects.length === 0) {
      return <React.Fragment><p>Loading..</p></React.Fragment>;
    } else {
      return (
        <div>
          <main id="home">
            <h1 className="lg-heading">
              {heading}
              <span className="text-secondary">{subHeading}</span>
            </h1>
            <h2 className="sm-heading">Checkout some of my projects ...</h2>
            <div className="projects">
              {projects.map (item => (
                <Project
                  key={item._id}
                  weburl={item.webUrl}
                  githuburl={item.githubUrl}
                  imgurl={item.imgUrl}
                />
              ))}
            </div>
          </main>
        </div>
      );
    }
  }
}

Work.propTypes = {
  getMyWork: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  data: state.MyWork,
});

export default connect (mapStateToProps, {getMyWork}) (Work);
