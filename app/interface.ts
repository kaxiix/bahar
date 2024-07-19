export interface simplifiedProduct {
  _id: string;
  imageUrl: string;
  price: number;
  slug: string;
  categoryName: string;
  name: string;
}

export interface fullProduct {
  _id: string;
  images: any;
  price: number;
  slug: string;
  categoryName: string;
  name: string;
  description: string;
  price_id: string;
}
// interfaces.ts
// export interface Product {
//   _id: string;
//   price: number;
//   name: string;
//   slug: string;
//   categoryName: string;
//   imageUrl: string;
// }


