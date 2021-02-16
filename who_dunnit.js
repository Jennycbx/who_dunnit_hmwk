// Episode 1

// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Library',
//   weapon: 'Rope'
// };

// const declareMurderer = function() {
//   return `The murderer is ${scenario.murderer}.`;
// }

// const verdict = declareMurderer();
// console.log(verdict);

// No errors??


// Episode 2

// const murderer = 'Professor Plum';

// const changeMurderer = function() {
//   murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// The murderer is Professor Plum because the changeMurderer function won't work. This is because we assigned murderer as a constant which can't be changed.
// Returned error after running code was 'Assignment to constant variable'


// Episode 3

// let murderer = 'Professor Plum';

// const declareMurderer = function() {
//   let murderer = 'Mrs. Peacock';
//   return `The murderer is ${murderer}.`;
// }

// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);

// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);

// I think the firstVerdict would be Mrs. Peacock because although it is a let, the function returns the murderer based on the let within that block of code.
// The secondVerdict would be Professor Plum because that code is outside of the declareMurderer function so that let won't take effect anymore. Therefore the first let is still relevant.

// Episode 4

// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';

// const declareAllSuspects = function() {
//   let suspectThree = 'Colonel Mustard';
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }

// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);

// First it would print out "The suspects are 'Miss Scarlet', 'Professor Plum, 'Colonel Mustard'" because suspectThree was changed in the declareAllSuspects function.
// Then it would print out "Suspect three is 'Mrs Peacock" because Colonel Mustard only applies when calling the declareAllSuspects function.

// Episode 5

// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Kitchen',
//   weapon: 'Candle Stick'
// };

// const changeWeapon = function(newWeapon) {
//   scenario.weapon = newWeapon;
// }

// const declareWeapon = function() {
//   return `The weapon is the ${scenario.weapon}.`;
// }

// changeWeapon('Revolver');
// const verdict = declareWeapon();
// console.log(verdict);

// The weapon is the Revolver because we changed the weapon in the changeWeapon function. We used scenario.weapon to change it because you can change values within an object when using const. We then called the changeWeapon function before using console.log so it changed the weapon from a candlestick to a revolver.

// Episode 6

// let murderer = 'Colonel Mustard';

// const changeMurderer = function() {
//   murderer = 'Mr. Green';

//   const plotTwist = function() {
//     murderer = 'Mrs. White';
//   }

//   plotTwist();
// }

// const declareMurderer = function () {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// I think the murderer would be Mr. Green because we changed the murderer with a const function to Mr Green. I don't think the plotTwist would work because it was a const and we can't change it unless we access the array which we didn't do in plotTwist. Although can we even write a function within a function???
// So if we don't get an error about the function being within a function I think we'll get the 'Assignment to constant variable' error again.
// After running the code I've discovered Mrs White is the murderer - perhaps because we wrote the plotTwist function and then called it within the changeMurderer function? But I thought we would have to access the array somehow for it to work.


// Episode 7

// let murderer = 'Professor Plum';

// const changeMurderer = function() {
//   murderer = 'Mr. Green';

//   const plotTwist = function() {
//     let murderer = 'Colonel Mustard';

//     const unexpectedOutcome = function() {
//       murderer = 'Miss Scarlet';
//     }

//     unexpectedOutcome();
//   }

//   plotTwist();
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// I think the murderer is Colonel Mustard because although we made the unexpectedOutcome function, the last thing we called in the changeMurderer function was the plotTwist function which names Colonel Mustard as the murderer.
// Got this one wrong as well - Mr Green is the murderer but I'm not sure why? I understand that Colonel Mustard couldn't be the killer presumably because we used a let to change him but I guess const overrides let? But then I would assume that the unexpectedOutcome would take effect as that is a const and it worked on the previous Episode?


// Episode 8

// const scenario = {
//   murderer: 'Mrs. Peacock',
//   room: 'Conservatory',
//   weapon: 'Lead Pipe'
// };

// const changeScenario = function() {
//   scenario.murderer = 'Mrs. Peacock';
//   scenario.room = 'Dining Room';

//   const plotTwist = function(room) {
//     if (scenario.room === room) {
//       scenario.murderer = 'Colonel Mustard';
//     }

//     const unexpectedOutcome = function(murderer) {
//       if (scenario.murderer === murderer) {
//         scenario.weapon = 'Candle Stick';
//       }
//     }

//     unexpectedOutcome('Colonel Mustard');
//   }

//   plotTwist('Dining Room');
// }

// const declareWeapon = function() {
//   return `The weapon is ${scenario.weapon}.`
// }

// changeScenario();
// const verdict = declareWeapon();
// console.log(verdict);

// I think it would be Colonel Mustard in the Dining Room with a Lead Pipe because the changeScenario changed the room to the Dining Room. The unexpectedOutcome didn't have any affect on the weapon because it was false as we hadn't called the plotTwist function yet to change the murderer to Colonel Mustard. PlotTwist did take affect though because the scenario.room did equate to the Dining Room therefore the murderer was changed to Colonel Mustard.
// Wrong again... The weapon is the candlestick. Not getting the hang of this function within a function thing...

// Episode 9


let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

// The murderer is Professor Plum because the change to Mrs Peacock only takes affect within the if block statement.