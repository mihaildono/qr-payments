export interface ItemProps {
  item: CartItem;
  toggleItem: (id: number) => void;
}

export interface ItemsProps {
  items: CartItem[];
  toggleItem: (id: number) => void;
  tips: Tip[];
  toggleTip: (tip: Tip) => void;
  handlePay: () => void;
}

export interface CartItem {
  id: number;
  name: string;
  price: number;
  payed: boolean;
  selected: boolean;
}

export interface Tip {
  value: number;
  selected: boolean;
}

export interface TotalProps {
  tips: Tip[];
  items: CartItem[];
}
