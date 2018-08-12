import React, {Component} from 'react';
import portrait from '../images/portrait.jpg';

export default class About extends Component {
  render () {
    return (
      <main id="home">
        <h1 className="lg-heading">
          About
          <span className="text-secondary"> Me</span>
        </h1>
        <h2 className="sm-heading">Let me tell you something about me ...</h2>
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
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. In sapiente, quibusdam fuga laboriosam maiores
              voluptas, explicabo eaque deserunt dolorem corrupti quisquam qui quos ex doloribus esse. Quisquam sint
              a dolores!
            </p>
          </div>
          <div className="job job-1">
            <h3>Designer</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia quisquam quasi sunt accusamus laboriosam necessitatibus
              libero debitis perspiciatis praesentium nihil?
            </p>
          </div>
          <div className="job job-2">
            <h3>Java Developer</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque suscipit doloribus delectus beatae possimus
              perferendis molestiae facilis corrupti mollitia commodi.
            </p>
          </div>
          <div className="job job-3">
            <h3>UI Developer</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe expedita ab officia aliquid facilis optio
              ipsa, molestias laboriosam recusandae libero.
            </p>
          </div>
        </div>
      </main>
    );
  }
}
