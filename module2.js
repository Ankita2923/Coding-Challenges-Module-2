// //coding challenge 1
// const game = {
//   team1: "Bayern Munich",
//   team2: "Borussia Dortmund",
//   players: [
//     [
//       "Neuer",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski",
//     ],
//     [
//       "Burki",
//       "Schulz",
//       "Hummels",
//       "Akanji",
//       "Hakimi",
//       "Weigl",
//       "Witsel",
//       "Hazard",
//       "Brandt",
//       "Sancho",
//       "Gotze",
//     ],
//   ],
//   score: "4:0",
//   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//   date: "Nov 9th, 2037",
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // Task 1: Create player arrays for each team
// const players1 = game.players[0];
// const players2 = game.players[1];

// // Task 2: Create goalkeeper and fieldPlayers for Bayern Munich
// const [gk, ...fieldPlayers] = players1;

// // Task 3: Create an array 'allPlayers' containing all players of both teams
// const allPlayers = [...players1, ...players2];

// // Task 4: Create 'players1Final' with substitute players for Bayern Munich
// const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];

// // Task 5: Create variables for odds
// const { team1, x: draw, team2: team2Odds } = game.odds;

// // Task 6: Write a function 'printGoals'
// function printGoals(...playerNames) {
//   console.log(playerNames);
//   console.log(`Total goals scored: ${playerNames.length}`);
// }

// // Test data for Task 6
// printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
// printGoals(...game.scored);

// // Task 7: Determine which team is more likely to win
// const moreLikelyTeam = team1 < team2Odds ? game.team1 : game.team2;
// console.log(`The more likely team to win is ${moreLikelyTeam}`);

// // coding challenge 2
// const game = {
//     team1: 'Bayern Munich',
//     team2: 'Borussia Dortmund',
//     players: [
//       ['Neuer', 'Pavard', 'Martinez', 'Alaba', 'Davies', 'Kimmich', 'Goretzka', 'Coman', 'Muller', 'Gnarby', 'Lewandowski'],
//       ['Burki', 'Schulz', 'Hummels', 'Akanji', 'Hakimi', 'Weigl', 'Witsel', 'Hazard', 'Brandt', 'Sancho', 'Gotze']
//     ],
//     score: '4:0',
//     scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//     date: 'Nov 9th, 2037',
//     odds: {
//       team1: 1.33,
//       x: 3.25,
//       team2: 6.5,
//     },
//   };

//   // Task 1: Loop over the scored array and print player names with goal numbers
//   game.scored.forEach((player, index) => {
//     console.log(`Goal ${index + 1}: ${player}`);
//   });

//   // Task 2: Calculate the average odd
//   const odds = Object.values(game.odds);
//   const averageOdd = odds.reduce((sum, odd) => sum + odd, 0) / odds.length;
//   console.log(`Average odd: ${averageOdd.toFixed(2)}`);

//   // Task 3: Print odds in a formatted way
//   for (const [team, odd] of Object.entries(game.odds)) {
//     const teamName = team === 'x' ? 'draw' : game[`team${team.charAt(4)}`];
//     console.log(`Odd of victory ${teamName}: ${odd}`);
//   }

//   // Task 4: Create an object 'scorers' with player names and goal counts
//   const scorers = {};
//   game.scored.forEach((player) => {
//     scorers[player] = (scorers[player] || 0) + 1;
//   });
//   console.log(scorers);

// // coding challenge 3
// const gameEvents = new Map([
//   [17, "GOAL"],
//   [36, "Substitution"],
//   [47, "GOAL"],
//   [61, "Substitution"],
//   [64, "Yellow card"],
//   [69, "Red card"],
//   [70, "Substitution"],
//   [72, "Substitution"],
//   [76, "GOAL"],
//   [80, "GOAL"],
//   [92, "Yellow card"],
// ]);

// // Task 1: Create an array 'events' of unique game events
// const events = [...new Set(gameEvents.values())];

// // Task 2: Remove the unfair yellow card event (minute 64)
// gameEvents.delete(64);

// // Task 3: Compute and log the average event frequency
// const totalMinutes = 90; // Total game time
// const totalEvents = gameEvents.size;
// const averageEventFrequency = totalMinutes / totalEvents;
// console.log(
//   `An event happened, on average, every ${averageEventFrequency.toFixed(
//     2
//   )} minutes`
// );

// // Task 4: Loop over 'gameEvents' and log each event with first or second half marking
// for (const [minute, event] of gameEvents.entries()) {
//   const half = minute <= 45 ? "FIRST HALF" : "SECOND HALF";
//   console.log(`[${half}] ${minute}: ${event}`);
// }

// // ch4
// document.querySelector("button").addEventListener("click", function () {
//   const textarea = document.querySelector("textarea");
//   const text = textarea.value;

//   const variableNames = text.split("\n");

//   variableNames.forEach((variableName) => {
//     const words = variableName.trim().split("_");
//     const camelCaseName =
//       words[0] +
//       words
//         .slice(1)
//         .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//         .join("");
//     console.log(camelCaseName);
//   });
// });

// OBJECT ORIENTED PROGRAMMING (OOP)

// // coding challenge 1
// // Task 1: Implement the 'Car' constructor function
// function Car(make, speed) {
//   this.make = make;
//   this.speed = speed;
// }

// // Task 2: Implement the 'accelerate' method
// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is accelerating. New speed: ${this.speed} km/h`);
// };

// // Task 3: Implement the 'brake' method
// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} is braking. New speed: ${this.speed} km/h`);
// };

// // Task 4: Create two 'Car' objects and experiment with 'accelerate' and 'brake'
// const car1 = new Car("BMW", 120);
// const car2 = new Car("Mercedes", 95);

// car1.accelerate(); // BMW is accelerating. New speed: 130 km/h
// car1.accelerate(); // BMW is accelerating. New speed: 140 km/h
// car1.brake(); // BMW is braking. New speed: 135 km/h

// car2.accelerate(); // Mercedes is accelerating. New speed: 105 km/h
// car2.brake(); // Mercedes is braking. New speed: 100 km/h

// coding challenge 2
// class CarCl {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   // Getter for speed in mi/h
//   get speedUS() {
//     return this.speed / 1.6;
//   }

//   // Setter for speed in mi/h (converts to km/h before setting)
//   set speedUS(speedUS) {
//     this.speed = speedUS * 1.6;
//   }

//   // Accelerate method
//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} is accelerating. New speed: ${this.speed} km/h`);
//   }

//   // Brake method
//   brake() {
//     this.speed -= 5;
//     console.log(`${this.make} is braking. New speed: ${this.speed} km/h`);
//   }
// }

// // Create a new car and experiment with methods, getter, and setter
// const car1 = new CarCl("Ford", 120);

// console.log(car1.speed); // 120 km/h
// console.log(car1.speedUS); // 75 mi/h

// car1.accelerate(); // Ford is accelerating. New speed: 130 km/h
// car1.speedUS = 60; // Set speed to 60 mi/h, which converts to 96 km/h
// console.log(car1.speed); // 96 km/h

// // coding challenge 3
// class CarCl {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   // Getter for speed in mi/h
//   get speedUS() {
//     return this.speed / 1.6;
//   }

//   // Setter for speed in mi/h (converts to km/h before setting)
//   set speedUS(speedUS) {
//     this.speed = speedUS * 1.6;
//   }

//   // Accelerate method
//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} is accelerating. New speed: ${this.speed} km/h`);
//     return this;
//   }

//   // Brake method
//   brake() {
//     this.speed -= 5;
//     console.log(`${this.make} is braking. New speed: ${this.speed} km/h`);
//     return this;
//   }
// }

// class EVCl extends CarCl {
//   #charge;

//   constructor(make, speed, charge) {
//     super(make, speed);
//     this.#charge = charge;
//   }

//   // Charge method to update the charge property
//   chargeBattery(charge) {
//     this.#charge = charge;
//     return this;
//   }

//   // Override accelerate method to also charge the battery
//   accelerate() {
//     this.#charge -= 1;
//     console.log(`${this.make} is accelerating. New speed: ${this.speed} km/h`);
//     console.log(`Battery charge: ${this.#charge}%`);
//     return this;
//   }
// }

// // Create an EV and experiment with chaining methods
// const ev1 = new EVCl("Rivian", 120, 23);

// ev1.accelerate().chargeBattery(50).brake().accelerate();

// //Asynchronous JavaScript

// // Coding Challenge #1

// PART 1: Reverse Geocoding

function whereAmI(lat, lng) {
    return new Promise((resolve, reject) => {
        fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
        .then(response => {
            if (!response.ok) {
            throw new Error(`Unable to fetch location data (${response.status})`);
            }
            return response.json();
        })
        .then(data => {
            console.log(`You are in ${data.city}, ${data.country}`);
            resolve(data.country); // Resolve the promise with the country for Part 2
        })
        .catch(error => {
            console.error(`Error: ${error.message}`);
            reject(error); // Reject the promise with the error
        });
    });
  }

  // PART 2: Render the Country
  
  function renderCountry(country) {
    return fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Unable to fetch country data (${response.status})`);
        }
        return response.json();
      })
      .then(data => {
        const countryData = data[0];
        console.log(`Country: ${countryData.name.common}`);
        console.log(`Population: ${countryData.population}`);
        console.log(`Region: ${countryData.region}`);
      })
      .catch(error => {
        console.error(`Error: ${error.message}`);
      });
  }
  
  // Test with coordinates
  whereAmI(52.508, 13.381) // Example 1
  .then(country => renderCountry(country))
  .catch(error => console.error(`Error: ${error.message}`));

  whereAmI(19.037, 72.873) // Example 2
  .then(country => renderCountry(country))
  .catch(error => console.error(`Error: ${error.message}`)); 

  whereAmI(-33.933, 18.474) // Example 3
  .then(country => renderCountry(country))
  .catch(error => console.error(`Error: ${error.message}`)); 
