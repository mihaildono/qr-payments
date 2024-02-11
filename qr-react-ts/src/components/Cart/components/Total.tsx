import css from "../styles.module.scss";
import type { TotalProps } from "../types";
import { paymentSum } from "../utils";

export const Total = ({ items, tips }: TotalProps) => (
  <div className={css.total}>
    <span>Total</span>
    <span className={css.sum}>{`${paymentSum(items, tips)}€`}</span>
  </div>
);
