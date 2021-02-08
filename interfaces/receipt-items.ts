export interface IReceiptItem {
  receipt_itemid: string;
  price: string;
  quantity: string;
  option_name: string;
  option_price: string | null;
  size_name: string | null;
  size_price: string | null;
  flavors: string;
  image: string;
  productname: string;
}
