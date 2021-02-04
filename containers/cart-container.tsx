import { useState } from "react";
import { createContainer } from "unstated-next";
import { IItem } from "./selected-container";

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
      total +=
        (parseInt(i.option?.price as any) +
          parseInt(i.product?.base_price as any) +
          parseInt(i.size?.additionalprice as any)) *
        i.quantity;
    });

    return total;
  };

  return { items, addToCart, isCartEmpty, getTotal };
}

const Cart = createContainer(useCart);
export { Cart };
