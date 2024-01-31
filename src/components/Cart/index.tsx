import { useState, useEffect } from "react";
import classNames from "classnames";

import { Items, CardForm, Receipt } from "./components";
import { mockItems } from "./mocks";
import { CartItem } from "./types";
import styles from "./styles.module.scss";

export const Cart = () => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [step, setStep] = useState(0);

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
    <div className={classNames(styles.wrapper)}>
      {step === 0 && (
        <Items items={items} toggleItem={toggleItem} setStep={setStep} />
      )}
      {step === 1 && <CardForm setStep={setStep} />}
      {step === 2 && <Receipt />}
    </div>
  );
};
