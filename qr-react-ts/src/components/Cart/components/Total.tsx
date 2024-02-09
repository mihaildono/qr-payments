import css from "../styles.module.scss";
import type { CartItem } from "../types";
import { paymentSum } from "../utils";

export const Total = (props: { items: CartItem[] }) => (
  <div className={css.total}>
    <span>Total</span>
    <span className={css.sum}>{`${paymentSum(props.items)}€`}</span>
  </div>
);
