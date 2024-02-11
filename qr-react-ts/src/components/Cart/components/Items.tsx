import classNames from "classnames";
import { ItemsProps } from "../types";
import { Item, Total } from "./";
import css from "../styles.module.scss";

export const Items = ({
  items,
  tips,
  toggleTip,
  toggleItem,
  handlePay,
}: ItemsProps) => {
  const hasSelected = items.some((item) => item.selected);
  const paymentMsg = hasSelected ? "Pay separately" : "Pay";

  return (
    <div className={css.itemsWrapper}>
      {items.map((item) => (
        <Item key={item.id} item={item} toggleItem={toggleItem} />
      ))}
      <div className={css.itemWrapper}>
        <span>Leave a tip?</span>
        <div className={css.tipButtons}>
          {tips.map((tip) => (
            <button
              key={tip.value}
              className={classNames(css.tip, {
                [css.itemSelected]: tip.selected,
              })}
              onClick={() => toggleTip(tip)}
            >
              {tip.value * 100}%
            </button>
          ))}
        </div>
      </div>
      <Total items={items} tips={tips} />
      <button className={css.payment} onClick={handlePay}>
        {paymentMsg}
      </button>
    </div>
  );
};
