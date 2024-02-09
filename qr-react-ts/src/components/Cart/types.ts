export interface ItemProps {
  item: CartItem;
  toggleItem: (id: number) => void;
}

export interface ItemsProps {
  items: CartItem[];
  toggleItem: (id: number) => void;
  handlePay: () => void;
}

export interface CartItem {
  id: number;
  name: string;
  price: number;
  payed: boolean;
  selected: boolean;
}
