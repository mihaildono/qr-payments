import { ItemsProps } from "../types";
import { Item } from "./Item";

export const Items = ({ items, toggleItem, setStep }: ItemsProps) => {
  const paymentSum = items.reduce(
    (acc, item) => acc + (item.selected ? Number(item.price) : 0),
    0
  );

  const hasSelected = items.some((item) => item.selected);
  const hasPayed = items.some((item) => item.payed);
  const partialSelectedMessage = hasPayed ? "Pay" : "Pay rest of the bill";

  return (
    <>
      <ul>
        {items.map((item) => (
          <Item key={item.id} item={item} toggleItem={toggleItem} />
        ))}
      </ul>
      {Boolean(paymentSum) && <span>{`${paymentSum}€`}</span>}
      {hasSelected && <button onClick={() => setStep(1)}>Pay Seprately</button>}
      <button onClick={() => setStep(1)}>{partialSelectedMessage}</button>
    </>
  );
};
