import classNames from "classnames";
import css from "../styles.module.scss";

import type { ItemProps } from "../types";

export const Item = ({ item, toggleItem }: ItemProps) => (
  <button
    disabled={item.payed}
    className={classNames(css.item, {
      [css.payed]: item.payed,
      [css.itemSelected]: item.selected,
    })}
    onClick={() => toggleItem(item.id)}
  >
    <span>{item.name}</span>
    <span className={css.price}>{item.price}</span>
  </button>
);
