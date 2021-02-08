import { useState } from "react";
import { createContainer } from "unstated-next";

export interface IItem {
  product?: IProduct;
  flavors: IFlavor[];
  option?: IOption;
  size?: ISize;
}

interface IProduct {
  productid: number;
  productname: string;
  base_price: number;
  totalflavor: number;
}

interface ISize {
  product_sizeid: number;
  product_sizename: string;
  additionalprice: number;
}
interface IFlavor {
  flavorid: number;
  flavorname: string;
}

interface IOption {
  optionid: number;
  optionname: string;
  price: number;
}

function useSelected() {
  const [selected, setSelected] = useState<IItem>({ flavors: [] });
  console.log(selected.flavors);
  const addFlavor = (flavor: IFlavor) => {
    const { product, flavors } = selected;
    if (product) {
      const length = selected.flavors?.length || 0;
      if (length < product.totalflavor) {
        flavors.push(flavor);
        setSelected((prev) => ({ ...prev, flavors }));
      } else if (length == product.totalflavor) {
        flavors.shift();
        flavors.push(flavor);
        setSelected((prev) => ({ ...prev, flavors }));
      }
    }
  };

  const setOption = (option: IOption) => {
    setSelected((prev) => ({ ...prev, option }));
  };

  const setProduct = (product: IProduct) => {
    setSelected((prev) => ({ ...prev, product }));
  };

  const setSize = (size: ISize) => {
    setSelected((prev) => ({ ...prev, size }));
  };

  const reset = () => {
    setSelected({ flavors: [] });
  };

  const isQualified = (): boolean => {
    if (selected.flavors.length != selected.product?.totalflavor) {
      return false;
    }
    return true;
  };

  const countFlavors = (flavorid: number): number => {
    let count = 0;
    for (let i = 0; i < selected.flavors.length; i++) {
      if (selected.flavors[i].flavorid == flavorid) {
        count++;
      }
    }
    return count != 0 ? count : -1;
  };

  return { selected, addFlavor, setOption, setProduct, setSize, reset, isQualified, countFlavors };
}

const Selected = createContainer(useSelected);

export { Selected };
