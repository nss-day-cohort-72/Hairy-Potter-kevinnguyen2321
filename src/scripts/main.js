// Imports go first
import { makePottery } from './pottery-wheel.js';
import { firePottery } from './kiln.js';
import { toSellOrNotToSell, usePottery } from './pottery-catalog.js';

// Make 5 pieces of pottery at the wheel

let mug = makePottery('Mug', 1, 3);
let platter = makePottery('Platter', 5, 1);
let vase = makePottery('Vase', 2, 10);
let bowl = makePottery('Bowl', 3, 4);
let plate = makePottery('Plate', 2, 2);

// Fire each piece of pottery in the kiln
const firedMug = firePottery(mug, 2201);
const firedPlatter = firePottery(platter, 2000);
const firedVase = firePottery(vase, 2210);
const firedBowl = firePottery(bowl, 1000);
const firedPlate = firePottery(plate, 2150);

// Determine which ones should be sold, and their price
toSellOrNotToSell(firedMug);
toSellOrNotToSell(firedPlatter);
toSellOrNotToSell(firedVase);
toSellOrNotToSell(firedBowl);
toSellOrNotToSell(firedPlate);
console.log(usePottery());

// Invoke the component function that renders the HTML list
