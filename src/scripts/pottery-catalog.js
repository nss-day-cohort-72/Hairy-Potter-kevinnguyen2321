import { makePottery } from './pottery-wheel.js';
import { firePottery } from './kiln.js';

const potteryArr = [];

export const toSellOrNotToSell = (obj) => {
  if (obj.weight >= 6 && obj.cracked === false) {
    obj.price = 40;
  } else if (obj.weight < 6 && !obj.cracked) {
    obj.price = 20;
  }
  if (!obj.cracked) {
    potteryArr.push(obj);
  }

  return obj;
};

export const usePottery = () => {
  const potterArrCopy = Array.from(potteryArr);
  return potterArrCopy;
};
