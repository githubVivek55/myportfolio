import React, {Component} from 'react';
import emailImg from '../images/email.png';

export default class Work extends Component {
  render () {
    return (
      <div>
        <main id="home">
          <h1 className="lg-heading">
            My
            <span className="text-secondary">Work</span>
          </h1>
          <h2 className="sm-heading">Checkout some of my projects ...</h2>
          <div className="projects">
            <div className="item">
              <a>
                <img src={emailImg} alt="Project" />
              </a>
              <a className="btn-light">
                <i className="fas fa-eye">Project</i>
              </a>
              <a className="btn-dark">
                <i className="fab fa-github">Github</i>
              </a>
            </div>
            <div className="item">
              <a className="btn-light">
                <img src={emailImg} alt="Project" />
              </a>
              <a className="btn-light">
                <i className="fas fa-eye">Project</i>
              </a>
              <a className="btn-dark">
                <i className="fab fa-github">Github</i>
              </a>
            </div>
            <div className="item">
              <a>
                <img src={emailImg} alt="Project" />
              </a>
              <a className="btn-light">
                <i className="fas fa-eye">Project</i>
              </a>
              <a className="btn-dark">
                <i className="fab fa-github">Github</i>
              </a>
            </div>
            <div className="item">
              <a>
                <img src={emailImg} alt="Project" />
              </a>
              <a className="btn-light">
                <i className="fas fa-eye">Project</i>
              </a>
              <a className="btn-dark">
                <i className="fab fa-github">Github</i>
              </a>
            </div>
            <div className="item">
              <a>
                <img src={emailImg} alt="Project" />
              </a>
              <a className="btn-light">
                <i className="fas fa-eye">Project</i>
              </a>
              <a className="btn-dark">
                <i className="fab fa-github">Github</i>
              </a>
            </div>
          </div>
        </main>
      </div>
    );
  }
}
