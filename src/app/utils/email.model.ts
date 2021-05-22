

export interface Email {
  Type?: string;
  Email: string;
  From: string;
  Subject: string;
  Message: string;
  Link?: string;
  LinkLabel?: string;
  UserFullName?: string;
  Name?: string;
  Amount?: number;
  AmountPaid?: number;
  AmountDue?: number;
  NextBillingDate?: string;
}


export interface Product {
  Name: string;
  Price: number;
  Description: string;
  Icon: string;
  Icon2?: string;
  Quantity: number;
  Category: string;
}
export interface Order {
  Products: Product[];
  Total: number;
  Name: string;
  Email: string;
  Phone: string;
  Address: string;
  Shipping: string;
}