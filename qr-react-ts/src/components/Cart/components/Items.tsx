import { ItemsProps } from "../types";
import { Item, Total } from "./";
import css from "../styles.module.scss";

export const Items = ({ items, toggleItem, handlePay }: ItemsProps) => {
  const hasSelected = items.some((item) => item.selected);
  const paymentMsg = hasSelected ? "Pay separately" : "Pay";

  return (
    <div className={css.itemsWrapper}>
      {items.map((item) => (
        <Item key={item.id} item={item} toggleItem={toggleItem} />
      ))}
      <Total items={items} />
      <button className={css.payment} onClick={handlePay}>
        {paymentMsg}
      </button>
    </div>
  );
};
