import './hero-item.js';
 
class HeroList extends HTMLElement {
    constructor() {
      super();
      this.shadowDOM = this.attachShadow({mode: 'open'});
    }

  set hero(hero) {
    this._hero = hero;
    this.render();
  }
 
  renderError(message) {
    this.shadowDOM.innerHTML = `
    <style>
        .placeholder {
          font-weight: lighter;
          color: rgba(0,0,0,0.5);
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
      </style>
    `;
    this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }
 
  render() {
    this.shadowDOM.innerHTML = '';
    this._hero.forEach(heroes => {
      const heroesItemElement = document.createElement('hero-item');
      heroesItemElement.heroes = heroes;
      
      this.shadowDOM.appendChild(heroesItemElement);
    });
  }
}
 
customElements.define('hero-list', HeroList);