function getData(countryURL) {
    fetch(" https://restcountries.eu/rest/v2/all")
  .then(function(res)
  {
console.log(res.json());
  })
 
  .catch((error)=> console.log(error));
   
  }