import React from 'react';
import emailImg from '../images/email.png';

const Project = props => {
  const {weburl, githuburl, imgurl} = props;
  console.log (imgurl);
  return (
    <div>
      <div className="item">
        <a>
          <img src={emailImg} alt="Project" />
        </a>
        <a href={weburl} target="_blank" className="btn-light">
          <i className="fas fa-eye">Project</i>
        </a>
        <a href={githuburl} target="_blank" className="btn-dark">
          <i className="fab fa-github">Github</i>
        </a>
      </div>
    </div>
  );
};

export default Project;
