const cityFacts = (city) => city.name + " has a population of " + city.population + " and is situated in " + city.continent


console.log(cityFacts({
  name: "Paris",
  population: "2,140,526",
  continent: "Europe"
}));
// Paris has a population of 2,140,526 and is situated in Europe
