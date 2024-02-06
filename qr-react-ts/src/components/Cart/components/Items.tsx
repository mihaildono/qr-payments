import { ItemsProps } from "../types";
import { Item } from "./Item";
import css from "../styles.module.scss";

export const Items = ({ items, toggleItem, setStep }: ItemsProps) => {
  const selectedPaymentSum = items.reduce(
    (acc, item) => acc + (item.selected ? Number(item.price) : 0),
    0
  );

  const totalPaymentSum = items.reduce((acc, item) => acc + item.price, 0);

  const hasSelected = items.some((item) => item.selected);
  const paymentMsg = hasSelected ? "Pay separately" : "Pay";

  return (
    <div className={css.itemsWrapper}>
      {items.map((item) => (
        <Item key={item.id} item={item} toggleItem={toggleItem} />
      ))}
      <div className={css.total}>
        <span>Total</span>
        <span className={css.sum}>{`${
          selectedPaymentSum || totalPaymentSum
        }€`}</span>
      </div>
      <button className={css.payment} onClick={() => setStep(1)}>
        {paymentMsg}
      </button>
    </div>
  );
};
