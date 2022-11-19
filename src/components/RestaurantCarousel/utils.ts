import { IRestaurant } from "../../../types";

export const sliceRestaurants = (
  arr: IRestaurant[],
  limit: number,
  active: number
): IRestaurant[] => {
  const res = [];
  let current = active;

  if (arr.length < limit) return arr;

  do {
    if (current < arr.length - 1) {
      res.push(arr[current]);
      current++;
    } else {
      if (current === arr.length - 1) {
        current = 0;
      }
      res.push(arr[current]);
      current++;
    }
    console.log("current is " + current);
  } while (res.length < limit);
  return res;
};
