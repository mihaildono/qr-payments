import classNames from "classnames";
import css from "../styles.module.scss";

import type { ItemProps } from "../types";

export const Item = ({ item, toggleItem }: ItemProps) => (
  <button
    disabled={item.payed}
    className={classNames(css.item, { [css.payed]: item.payed })}
    onClick={() => toggleItem(item.id)}
  >
    <span>{`${item.name} ${item.price}`}</span>
    {!item.payed && (
      <input
        className={css.checkbox}
        type="checkbox"
        onChange={() => {}}
        checked={item.selected}
      />
    )}
  </button>
);
