import React, {Component} from 'react';

export default class Menu extends Component {
  constructor () {
    super ();
    this.state = {
      menuBtn: '',
      menu: '',
      menuNav: '',
      menuBranding: '',
      navItems: '',
      showMenu: false,
    };
  }
  componentDidMount () {
    this.setState ({
      menuBtn: document.querySelector ('.menu-btn'),
      menu: document.querySelector ('.menu'),
      menuNav: document.querySelector ('.menu-nav'),
      menuBranding: document.querySelector ('.menu-branding'),
      navItems: document.querySelectorAll ('.menu-item'),
      showMenu: false,
    });
  }

  toggleMenu = () => {
    if (!this.state.showMenu) {
      this.state.menuBtn.classList.add ('close');
      this.state.menu.classList.add ('show');
      this.state.menuNav.classList.add ('show');
      this.state.menuBranding.classList.add ('show');
      this.state.navItems.forEach (item => item.classList.add ('show'));
      this.setState ({
        showMenu: true,
      });
    } else {
      this.state.menuBtn.classList.remove ('close');
      this.state.menu.classList.remove ('show');
      this.state.menuNav.classList.remove ('show');
      this.state.menuBranding.classList.remove ('show');
      this.state.navItems.forEach (item => item.classList.remove ('show'));
      this.setState ({
        showMenu: false,
      });
    }
  };
  render () {
    return (
      <div>
        <div className="menu-btn" onClick={this.toggleMenu}>
          <div className="btn-line" />
          <div className="btn-line" />
          <div className="btn-line" />
        </div>
        <nav className="menu">
          <div className="menu-branding">
            <div className="portrait" />
          </div>
          <ul className="menu-nav">
            <li className="menu-item current">
              <a href="/" className="menu-link">Home</a>
            </li>
            <li className="menu-item">
              <a href="about.html" className="menu-link">About me</a>
            </li>
            <li className="menu-item">
              <a href="work.html" className="menu-link">My Work</a>
            </li>
            <li className="menu-item">
              <a href="contact.html" className="menu-link">How to reach me</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
