import { useState, useEffect } from "react";
import classNames from "classnames";
import { Elements } from "@stripe/react-stripe-js";
import { Appearance, loadStripe } from "@stripe/stripe-js";

import { Items, CardForm, Receipt } from "./components";
import { mockItems } from "./mocks";
import { CartItem } from "./types";
import styles from "./styles.module.scss";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  "pk_test_51OgS4zAfvXmllvkH4hfVUVuhhTYOFB27z89YioT9UFSSYmkmF7PloOukHU3ewQoJsF2YKEBSAixEkUxubHW5Mh5S00jlwrnDVG",
  { locale: "en" }
);

export const Cart = () => {
  const [clientSecret, setClientSecret] = useState("");
  const [items, setItems] = useState<CartItem[]>([]);
  const [step, setStep] = useState(0);

  const appearance: Appearance = {
    theme: "flat",
  };

  useEffect(() => {
    fetch("/intent").then(async (res) => {
      const intent = await res.json();
      setClientSecret(intent.clientSecret);
    });
  }, []);

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
      {step === 1 && clientSecret && (
        <Elements stripe={stripePromise} options={{ clientSecret, appearance }}>
          <CardForm />
        </Elements>
      )}
      {step === 2 && <Receipt />}
    </div>
  );
};
