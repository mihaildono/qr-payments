import { CardProps } from "../types";

export const CardForm = ({ setStep }: CardProps) => {
  return <button onClick={() => setStep(2)}>Pay</button>;
};
