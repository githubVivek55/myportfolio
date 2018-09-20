import React, {Component} from 'react';
import Project from './Project';

import axios from 'axios';

export default class Work extends Component {
  state = {
    heading: '',
    subHeading: '',
    projects: [],
  };

  componentDidMount () {
    axios.get ('http://localhost:5000/api/items/mywork').then (res => {
      this.setState ({
        heading: res.data[0].heading,
        subHeading: res.data[0].subHeading,
        projects: res.data[0].projects,
      });
    });
  }
  render () {
    const {heading, subHeading, projects} = this.state;

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
