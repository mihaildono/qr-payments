import type { CartItem, Tip } from "./types";

export const paymentSum = (items: CartItem[], tips: Tip[]) => {
  const selectedSum = items.reduce(
    (acc, item) => acc + (item.selected ? Number(item.price) : 0),
    0
  );

  const totalPaymentSum = items.reduce((acc, item) => acc + item.price, 0);

  const sum = selectedSum || totalPaymentSum;

  const tipPercentage = tips.filter((tip) => tip.selected)[0]?.value || 0;
  const tipAmount = tipPercentage * sum;

  return Number((tipAmount + sum).toFixed(2));
};
