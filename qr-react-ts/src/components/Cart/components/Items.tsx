import { ItemsProps } from "../types";
import { Item } from "./Item";
import css from "../styles.module.scss";
import { paymentSum } from "../utils";

export const Items = ({ items, toggleItem, handlePay }: ItemsProps) => {
  const hasSelected = items.some((item) => item.selected);
  const paymentMsg = hasSelected ? "Pay separately" : "Pay";

  return (
    <div className={css.itemsWrapper}>
      {items.map((item) => (
        <Item key={item.id} item={item} toggleItem={toggleItem} />
      ))}
      <div className={css.total}>
        <span>Total</span>
        <span className={css.sum}>{`${paymentSum(items)}€`}</span>
      </div>
      <button className={css.payment} onClick={handlePay}>
        {paymentMsg}
      </button>
    </div>
  );
};
