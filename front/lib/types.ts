
export interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  priceDiscount?: number;
  category: string;
  description?: string;
  images?: string[];
  colors?: string[];
  sizes?: string[];
  rating?: number;
  reviews?: number;
}

export interface Collection {
  id: string;
  name: string;
  image: string;
  href: string;
}

export interface NavigationItem {
  name: string;
  href: string;
}

export interface FilterOption {
  id: string;
  name: string;
  value: string;
  count?: number;
}

export interface FilterGroup {
  id: string;
  name: string;
  options: FilterOption[];
}
