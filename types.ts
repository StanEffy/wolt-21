export interface IRestaurant {
  blurhash: string;
  launch_date: string;
  location: [number, number];
  name: string;
  online: boolean;
  popularity: number;
}

export interface IRestaurantsArray {
  title: string;
  restaurants: IRestaurant[];
}
