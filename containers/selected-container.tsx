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

  console.log(selected);

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

  return { selected, addFlavor, setOption, setProduct, setSize };
}

const Selected = createContainer(useSelected);

export { Selected };
