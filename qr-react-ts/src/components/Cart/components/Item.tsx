import classNames from "classnames";
import css from "../styles.module.scss";

import type { ItemProps } from "../types";

export const Item = ({ item, toggleItem }: ItemProps) => (
  <li>
    <button
      disabled={item.payed}
      className={classNames({ [css.payed]: item.payed })}
      onClick={() => toggleItem(item.id)}
    >
      <span>{item.name}</span>
      <span>{item.price}</span>
      {!item.payed && (
        <input type="checkbox" onChange={() => {}} checked={item.selected} />
      )}
    </button>
  </li>
);
