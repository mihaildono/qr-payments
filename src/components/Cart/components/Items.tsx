import { ItemsProps } from "../types";
import { Item } from "./Item";

export const Items = ({ items, toggleItem, setStep }: ItemsProps) => {
  const paymentSum = items.reduce(
    (acc, item) => acc + (item.selected ? Number(item.price) : 0),
    0
  );

  return (
    <>
      <ul>
        {items.map((item) => (
          <Item key={item.id} item={item} toggleItem={toggleItem} />
        ))}
      </ul>
      {Boolean(paymentSum) && <span>{`${paymentSum}€`}</span>}
      {items.some((item) => item.selected) ? (
        <button onClick={() => setStep(1)}>Pay separately</button>
      ) : (
        <button onClick={() => setStep(1)}>Pay</button>
      )}
      {items.some((item) => item.payed) && (
        <button onClick={() => setStep(1)}>Pay rest of the bill</button>
      )}
    </>
  );
};
