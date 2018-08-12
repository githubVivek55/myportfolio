import React, {Component} from 'react';

export default class Home extends Component {
  render () {
    return (
      <main id="home">
        <h1 className="lg-heading">
          Vivek
          <span className="text-secondary"> Sharma</span>
        </h1>
        <h2 className="sm-heading">Web Developer, Programmer & Designer</h2>

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
