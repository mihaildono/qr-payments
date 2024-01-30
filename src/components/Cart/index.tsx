import { useState, useEffect } from "react";
import classNames from "classnames";
import css from "./styles.module.scss";

const mockItems = [
  {
    id: 1,
    name: "Espresso",
    price: "5.00€",
    payed: false,
    selected: false,
  },
  { id: 2, name: "Espresso", price: "5.00€", payed: true, selected: false },
  {
    id: 3,
    name: "Orange Juice",
    price: "7.50€",
    payed: false,
    selected: false,
  },
  {
    id: 4,
    name: "Club Sandwich",
    price: "12.00€",
    payed: false,
    selected: false,
  },
  {
    id: 5,
    name: "Club Soda",
    price: "2.75€",
    payed: false,
    selected: false,
  },
];

interface CartItem {
  id: number;
  name: string;
  price: string;
  payed: boolean;
  selected: boolean;
}

type ItemProps = {
  item: CartItem;
  toggleItem: (id: number) => void;
};

const Item = ({ item, toggleItem }: ItemProps) => (
  <li>
    <button className={classNames({ [css.payed]: item.payed })}>
      <span>{item.name}</span>
      <span>{item.price}</span>
      {!item.payed && (
        <input
          type="checkbox"
          checked={item.selected}
          onChange={() => toggleItem(item.id)}
        />
      )}
    </button>
  </li>
);

export const Cart = () => {
  const [items, setItems] = useState<CartItem[]>([]);

  const toggleItem = (id: number) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
  };

  useEffect(() => {
    setItems(mockItems);
  }, []);

  return (
    <div>
      <ul>
        {items.map((item) => (
          <Item key={item.id} item={item} toggleItem={toggleItem} />
        ))}
      </ul>
      <button>
        {items.some((item) => item.selected) ? "Pay separately" : "Pay"}
      </button>
      {items.some((item) => item.payed) && (
        <button>Pay rest of the bill</button>
      )}
    </div>
  );
};
