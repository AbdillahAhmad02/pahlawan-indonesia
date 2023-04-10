class DataSource {
    static searchHero(keyword) {
      return fetch(`https://indonesia-public-static-api.vercel.app/api/heroes?q=${keyword}`)
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        if (responseJson) {
          return Promise.resolve(responseJson);
        } else {
          return Promise.reject(`${keyword} is not found`);
        }
      });
    }
  }
   
  export default DataSource;
