class AppBar extends HTMLElement {
    constructor() {
      super();
      this.shadowDOM = this.attachShadow({mode: 'open'});
    }
  
      connectedCallback() {
        this.render();
      }
   
      render() {
        this.shadowDOM.innerHTML = `
              <style>
                * {
                  margin: 0;
                  padding: 0;
                  box-sizing: border-box;
                }
  
                :host {
                  display: block;
                  width: 100%;
                  background-color: #3D657F;
                  color: white;
                  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                }
                h2 {
                  padding: 16px;
                  text-align: center;
                }
                
  
              </style>
              
             <h2> Pahlawan Indonesia</h2>
            `;
    }
  
  
  //   render() {
  //     this.innerHTML = `
  //         <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
  //             <div class="container">
  //                 <a class="navbar-brand">Pahlawan <span>Indonesia</span></a>
  //                 <button class="navbar-toggler" data-target="#my-nav" data-toggle="collapse" aria-controls="my-nav" aria-expanded="false" aria-label="Toggle navigation">
  //                     <span class="navbar-toggler-icon"></span>
  //                 </button>
  //             </div>
  //         </nav>`
  // }
  
  }
  
  customElements.define('app-bar', AppBar);