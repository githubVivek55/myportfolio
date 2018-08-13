import React, {Component} from 'react';

export default class Contact extends Component {
  render () {
    return (
      <div>
        <main id="home">
          <h1 className="lg-heading">
            Contact
            <span className="text-secondary"> Me</span>
          </h1>
          <h2 className="sm-heading">This is how you can reach me...</h2>

          <div className="boxes">
            <div>
              <span className="text-secondary">Email:</span>
              sharmav6550@gmail.com
            </div>
            <div>
              <span className="text-secondary">Phone:</span>
              9903367333
            </div>
            <div>
              <span className="text-secondary">Address:</span>
              Wakad, Pune-410057
            </div>
          </div>
        </main>
      </div>
    );
  }
}
