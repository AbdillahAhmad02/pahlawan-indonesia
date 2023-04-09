import '../component/hero-list.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';
 
const main = () => {
  const searchElement = document.querySelector('search-bar');
  const heroListElement = document.querySelector('hero-list');
 
  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchHero(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };
 
  const renderResult = result => {
    heroListElement.hero = result;
  };
 
  const fallbackResult = message => {
    heroListElement.renderError(message);
  };
 
  searchElement.clickEvent = onButtonSearchClicked;
};
 
export default main;