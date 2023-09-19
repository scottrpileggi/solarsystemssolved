import { maxBy } from "./e17"

/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  let yearArray = data.asteroids
    .reduce(function(acc, val) {
    let year = val.discoveryYear
    if (acc[year] == null) {acc[year] = [year, 0]};
    acc[year][1] += 1;
    return acc;
  }, {});
  
  let convertedArray = Object.values(yearArray);


  const greatestYear = maxBy(
    convertedArray,
    (year) => year[1]
  );

  return greatestYear[0];
}

  // let yearArray = data.asteroids 
  //   .reduce(function(acc, asteroid) {
  //     let year = asteroid.discoveryYear;

  //     if (!acc.includes(acc[year])) {
  //       acc[year] = {y: year, count: 1};
  //     } else {
  //       acc[year].count += 1;
  //     }
  //   }, []);
    
  //   return yearArray;

  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
