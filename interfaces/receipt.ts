import { IReceiptItem } from "./receipt-items";
import { IUser } from "./user";

export interface IReceipt {
  receiptid: number;
  created_at: Date;
  cash: number;
  total: number;
  user: IUser;
  items: IReceiptItem[];
}
