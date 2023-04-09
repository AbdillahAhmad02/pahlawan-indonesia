class HeroItem extends HTMLElement {

    constructor() {
      super();
      this.shadowDOM = this.attachShadow({mode: 'open'});
    }
  
    set heroes(heroes) {
      this._heroes = heroes;
      this.render();
    }
  
    render() {
      this.shadowDOM.innerHTML = `
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            background-color: white;
          }
          :host {
            display: block;
            margin-bottom: 18px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            border-radius: 10px;
            overflow: hidden;
  
          }
          .fan-art-hero {
            width: 100%;
            object-fit: cover;
            object-position: center;
          }
          .hero-info {
            padding: 24px;
          }
          .hero-info > h2 {
            font-weight: bold;
          }
          .hero-info > p {
            margin-top: 10px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 10; /* number of lines to show */
          }
        </style>
  
        <div class="hero-info">
          <h2>${this._heroes.name}</h2>
          <p> Tahun Kelahiran : ${this._heroes.birth_year}</p>
          <p> Tahun Kematian : ${this._heroes.death_year}</p>
          <p> Deskripsi : ${this._heroes.description}</p>
          <p> Ascension year : ${this._heroes.ascension_year}</p>
        </div>
    `;
  }
  }
  
  customElements.define('hero-item', HeroItem);