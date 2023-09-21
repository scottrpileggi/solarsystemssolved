import { maxBy } from "./e17";

/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  const asteroidObject = data.asteroids
    .reduce((obj, asteroid) => {
      let year = asteroid.discoveryYear;
      if (!obj[year]) {obj[year] = {"year": year, "count": 0};}
      obj[year]["count"] += 1;
      return obj;
      }, {});

  return (maxBy(Object.values(asteroidObject), (asteroid) => asteroid.count)).year;
} 

// Your code goes here...
// feel free to import your `maxBy` or `minBy` methods from previous lessons

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
