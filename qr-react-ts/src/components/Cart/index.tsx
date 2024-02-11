import { useState } from "react";
import classNames from "classnames";
import { Elements } from "@stripe/react-stripe-js";
import { Appearance, loadStripe } from "@stripe/stripe-js";
import { useCookies } from "react-cookie";

import { Items, CardForm, Receipt } from "./components";
import { mockItems, mockTips } from "./mocks";
import type { CartItem, Tip } from "./types";
import styles from "./styles.module.scss";
import { paymentSum } from "./utils";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  "pk_test_51OgS4zAfvXmllvkH4hfVUVuhhTYOFB27z89YioT9UFSSYmkmF7PloOukHU3ewQoJsF2YKEBSAixEkUxubHW5Mh5S00jlwrnDVG",
  { locale: "en" }
);

export const Cart = () => {
  const [_, setCookie] = useCookies();
  const [clientSecret, setClientSecret] = useState("");
  const [items, setItems] = useState<CartItem[]>(mockItems);
  const [tips, setTips] = useState<Tip[]>(mockTips);
  const [step, setStep] = useState(0);

  const appearance: Appearance = {
    theme: "flat",
  };

  const handlePay = () => {
    setCookie("items", JSON.stringify(items));
    setCookie("tips", JSON.stringify(tips));
    const amount = paymentSum(items, tips) * 100; // amount is in cents; minimum 50
    fetch(`https://qr-payments-f71c.vercel.app/intent?amount=${amount}`).then(
      async (res) => {
        const intent = await res.json();
        setClientSecret(intent.clientSecret);
      }
    );
    setStep(1);
  };

  const toggleTip = (tip: Tip) => {
    setTips(
      tips.map((currentTip) =>
        currentTip.value === tip.value
          ? { ...tip, selected: !tip.selected }
          : { ...currentTip, selected: false }
      )
    );
  };

  const toggleItem = (id: number) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
  };

  return (
    <div className={classNames(styles.wrapper)}>
      {step === 0 && (
        <Items
          items={items}
          toggleItem={toggleItem}
          tips={tips}
          toggleTip={toggleTip}
          handlePay={handlePay}
        />
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
