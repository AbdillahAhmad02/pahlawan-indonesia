class DataSource {
    static searchHero(keyword) {
      return fetch(`https://indonesia-public-static-api.vercel.app/api/heroes/${keyword}`)
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        if (responseJson.heroes) {
          return Promise.resolve(responseJson.heroes);
        } else {
          return Promise.reject(`${keyword} is not found`);
        }
      });
    }
  }
   
  export default DataSource;