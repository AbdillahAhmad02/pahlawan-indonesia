class SearchBar extends HTMLElement {
    constructor() {
      super();
      this.shadowDOM = this.attachShadow({mode: 'open'});
    }
  
    connectedCallback() {
      this.render();
    }
    
    set clickEvent(event) {
      this._clickEvent = event;
      this.render();
    }
   
    get value() {
      return this.shadowDOM.querySelector('#searchElement').value;
    }
   
    render() {
      this.shadowDOM.innerHTML = `
        
      <style>
        .search-container {
          max-width: 100%;
          box-shadow: 2px 8px 8px 2px rgba(0, 0, 0, 0.2);
          padding: 16px;
          border-radius: 5px;
          display: flex;
          position: sticky;
          top: 10px;
          background-color: white;
          justify-content: center;
        }
        
        .search-container > input {
          font-family: "Quicksand", sans-serif;
          width: 100%;
          padding: 16px;
          border: 0;
          border-bottom: 1px solid #FF7F00;
          font-weight: bold;
        }
        
        .search-container > input:focus {
          outline: 0;
          border-bottom: 2px solid #FF7F00;
        }
      
        
        .search-container >  input::placeholder {
          color: orange;
          font-weight: normal;
        }
        
        .search-container > button {
          font-family: "Quicksand", sans-serif;
          width: 20%;
          cursor: pointer;
          margin-left: auto;
          padding: 10px;
          background-color: #3D657F;
          color: white;
          border: 0;
          text-transform: uppercase;
        }

        .search-container > button:hover {
          font-weight: bold;
          background-color: orange;
      }
        
        @media screen and (max-width: 550px){
          .search-container {
            flex-direction: column;
            position: static;
          }
          
          .search-container > input {
            width: 100%;
            margin-bottom: 12px;
          }
          
          .search-container > button {
            width: 100%;  
          }
          
        }
        </style>
        
        <div id="search-container" class="search-container">
          <input placeholder="Search Pahlawan Name" id="searchElement" type="search">
          <button id="searchButtonElement" type="submit">Search</button>
        </div>
      `;
   
      this.shadowDOM.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);
    }
  }
   
  customElements.define('search-bar', SearchBar);