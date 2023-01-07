export type Order = {
  id?: number;
  user_id: number;
  product_id: number;
  status: boolean;
};

export type OrderProducts = {
  id?: number;
  order_id: number;
  product_id: number;
  quantity: number;
};
