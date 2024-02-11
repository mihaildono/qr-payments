import type { CartItem, Tip } from "./types";

export const mockItems: CartItem[] = [
  {
    id: 1,
    name: "Espresso",
    price: 5.0,
    payed: false,
    selected: false,
  },
  { id: 2, name: "Espresso", price: 5.0, payed: true, selected: false },
  {
    id: 3,
    name: "Orange Juice",
    price: 7.5,
    payed: false,
    selected: false,
  },
  {
    id: 4,
    name: "Club Sandwich",
    price: 12.0,
    payed: false,
    selected: false,
  },
  {
    id: 5,
    name: "Club Soda",
    price: 2.75,
    payed: false,
    selected: false,
  },
];

export const mockTips: Tip[] = [
  { value: 0.05, selected: false },
  { value: 0.1, selected: false },
  { value: 0.15, selected: false },
];
