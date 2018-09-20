import React, {Component} from 'react';
import axios from 'axios';

export default class Home extends Component {
  state = {
    firstName: '',
    lastName: '',
    desc: '',
  };

  componentDidMount () {
    axios.get ('http://localhost:5000/api/items').then (res => {
      this.setState ({
        firstName: res.data[0].firstName,
        lastName: res.data[0].lastName,
        desc: res.data[0].desc,
      });
    });
  }
  render () {
    return (
      <main id="home">
        <h1 className="lg-heading">
          {this.state.firstName}
          <span className="text-secondary"> {this.state.lastName}</span>
        </h1>
        <h2 className="sm-heading">{this.state.desc}</h2>

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
