import { useState } from "react";
import { createContainer } from "unstated-next";
import { TFlavor, TOption, TProduct, TSize } from "./selected-container";

interface IItem {
  product: TProduct;
  flavors: TFlavor[];
  option: TOption;
  size: TSize;
}

type qa = {
  quantity: number;
};

function useCart() {
  const [items, setItems] = useState<(IItem & qa)[]>([]);

  const addToCart = (item: IItem & qa) => {
    item.quantity = 1;
    setItems((prev) => [...prev, item]);
  };

  const isCartEmpty = (): boolean => {
    return items.length == 0;
  };

  const getTotal = (): number => {
    let total = 0;
    items.forEach((i) => {
      if (i.product && i.option) {
        total +=
          (i.option?.price + i.product?.basePrice + parseInt(i.size?.price ? (i.size.price as any) : "0")) * i.quantity;
      }
    });

    return total;
  };

  return { items, addToCart, isCartEmpty, getTotal };
}

const Cart = createContainer(useCart);
export { Cart };
