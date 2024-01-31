export interface ItemProps {
  item: CartItem;
  toggleItem: (id: number) => void;
}

export interface ItemsProps {
  items: CartItem[];
  toggleItem: (id: number) => void;
  setStep: (step: number) => void;
}

export interface CartItem {
  id: number;
  name: string;
  price: number;
  payed: boolean;
  selected: boolean;
}
