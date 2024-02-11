import { useCookies } from "react-cookie";

import { Total } from "./";
import checkmarkIcon from "../../../assets/icons/checkmark.svg";
import css from "../styles.module.scss";
import type { CartItem, Tip } from "../types";

export const Receipt = () => {
  const [cookies] = useCookies();

  const selecteditems =
    cookies.items?.filter((item: CartItem) => item.selected) || [];

  const items = selecteditems.length ? selecteditems : cookies.items;

  const tipAmount = cookies.tips?.filter((tip: Tip) => tip.selected)[0]?.value;

  return (
    <div className={css.receiptWrapper}>
      <div className={css.receipt}>
        <img className={css.success} src={checkmarkIcon} alt="success"></img>
        <h1>Payment success!</h1>
      </div>
      <div className={css.receiptItems}>
        {items?.map((item: CartItem) => (
          <div key={item.id} className={css.itemWrapper}>
            <span>{item.name}</span>
            <span className={css.price}>{item.price}</span>
          </div>
        ))}
        {tipAmount && (
          <div className={css.itemWrapper}>
            <span>Tip</span>
            <span className={css.price}>{tipAmount * 100}%</span>
          </div>
        )}
      </div>
      <Total items={cookies.items || []} tips={cookies.tips || []} />
    </div>
  );
};
