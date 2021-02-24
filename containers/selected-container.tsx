import { useState } from "react";
import { createContainer } from "unstated-next";
import { Flavor, Option, Product, Size } from "../generated/apolloComponent";

export type TProduct = Omit<Product, "created" | "updated" | "deletedAt">;

export type TSize = Pick<Size, "id" | "name" | "price">;

export type TFlavor = Pick<Flavor, "id" | "name" | "image">;

export type TOption = Pick<Option, "id" | "name" | "price">;

export interface IItem {
  product?: TProduct;
  flavors: TFlavor[];
  option?: TOption;
  size?: TSize;
}

function useSelected() {
  const [selected, setSelected] = useState<IItem>({ flavors: [] });
  const addFlavor = (flavor: TFlavor) => {
    const { product, flavors } = selected;
    if (product) {
      const length = selected.flavors?.length || 0;
      if (length < product.totalFlavor) {
        flavors.push(flavor);
        setSelected((prev) => ({ ...prev, flavors }));
      } else if (length == product.totalFlavor) {
        flavors.shift();
        flavors.push(flavor);
        setSelected((prev) => ({ ...prev, flavors }));
      }
    }
  };

  const setOption = (option: TOption) => {
    setSelected((prev) => ({ ...prev, option }));
  };

  const setProduct = (product: TProduct) => {
    setSelected((prev) => ({ ...prev, product, flavors: [] }));
  };

  const setSize = (size: TSize) => {
    setSelected((prev) => ({ ...prev, size }));
  };

  const reset = () => {
    setSelected({ flavors: [] });
  };

  const isQualified = (): boolean => {
    if (selected.flavors.length != selected.product?.totalFlavor) {
      return false;
    }
    return true;
  };

  const countFlavors = (flavorid: string): number => {
    let count = 0;
    for (let i = 0; i < selected.flavors.length; i++) {
      if (selected.flavors[i].id == flavorid) {
        count++;
      }
    }
    return count != 0 ? count : -1;
  };

  return { selected, addFlavor, setOption, setProduct, setSize, reset, isQualified, countFlavors };
}

const Selected = createContainer(useSelected);

export { Selected };
