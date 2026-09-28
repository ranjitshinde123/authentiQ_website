export type ProductSeries = 'performance' | 'core' | 'recovery' | 'essential';

export interface FlavorOption {
  name: string;
  color: string;
}

export interface Product {
  id: number;
  name: string;
  series: ProductSeries;
  seriesName: string;
  type: string;
  price: number;
  mrpPrice: number;
  servings: string;
  netWt: string;
  flavor: string;
  flavorsList: FlavorOption[];
  image: string;
  shortDesc: string;
  keyIngredients: string[];
  benefits: string[];
}

export interface Review {
  id: number;
  name: string;
  stars: number;
  text: string;
  initial: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface ShippingAddress {
  name: string;
  street: string;
  city: string;
  state: string;
  zip: string;
}

export interface UserAccount {
  email: string;
  mobile: string;
  address?: ShippingAddress;
}
