import { IRestaurant } from "../../../types";

// creating propper array for a View
// e.g. if arr longer than limit => return arr
export const sliceRestaurants = (
  arr: IRestaurant[],
  limit: number,
  active: number
): IRestaurant[] => {
  const res = [];
  let current = active;

  const indexes = [];

  if (arr.length < limit) return arr;

  //This is the first time I've ever used d0 while loop in some project, lol
  console.log("THIS IS ACTIVE FROM UTILS " + active, limit, arr.length);
  do {
    if (current < arr.length - 1) {
      res.push(arr[current]);
      indexes.push(current);
      current++;
    } else {
      if (current === arr.length - 1) {
        res.unshift(arr[current]);
        indexes.push(current);
        current = 0;
      }
    }
  } while (res.length < limit);

  console.log(res);
  return res;
};

export const resetMaxSlides = (
  width: number,
  maxSlides: number,
  setMaxSlides: (n: number) => void
) => {
  if (width > 1024) {
    if (maxSlides !== 2) {
      setMaxSlides(5);
    }
  } else if (width > 820) {
    if (maxSlides !== 4) {
      setMaxSlides(4);
    }
  } else if (width > 768) {
    if (maxSlides !== 3) {
      setMaxSlides(3);
    }
  } else if (width > 480) {
    if (maxSlides !== 2) {
      setMaxSlides(2);
    }
  }
};
