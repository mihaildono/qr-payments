import { useState, useEffect } from "react";

import { Items, CardForm } from "./components";
import { mockItems } from "./mocks";
import { CartItem } from "./types";

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
    <div>
      {step === 0 && (
        <Items items={items} toggleItem={toggleItem} setStep={setStep} />
      )}
      {step === 1 && <CardForm />}
    </div>
  );
};
