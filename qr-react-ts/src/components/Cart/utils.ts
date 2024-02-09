import type { CartItem } from "./types";

export const paymentSum = (items: CartItem[]) => {
  const selectedSum = items.reduce(
    (acc, item) => acc + (item.selected ? Number(item.price) : 0),
    0
  );

  const totalPaymentSum = items.reduce((acc, item) => acc + item.price, 0);

  return selectedSum || totalPaymentSum;
};
