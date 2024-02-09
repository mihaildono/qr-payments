import { useCookies } from "react-cookie";

import { Total } from "./";
import checkmarkIcon from "../../../assets/icons/checkmark.svg";
import css from "../styles.module.scss";
import type { CartItem } from "../types";

export const Receipt = () => {
  const [cookies] = useCookies();

  return (
    <div className={css.receiptWrapper}>
      <div className={css.receipt}>
        <img className={css.success} src={checkmarkIcon} alt="success"></img>
        <h1>Payment success!</h1>
      </div>
      <div className={css.receiptItems}>
        {cookies.items.map((item: CartItem) => (
          <span key={item.id}>{`${item.name} ${item.price}`}</span>
        ))}
      </div>
      <Total items={cookies.items} />
    </div>
  );
};
