import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Query = {
  __typename?: 'Query';
  flavors?: Maybe<Array<Flavor>>;
  options?: Maybe<Array<Option>>;
  products?: Maybe<Array<Product>>;
  receipt?: Maybe<Receipt>;
  receipts?: Maybe<Array<Receipt>>;
  users?: Maybe<Array<User>>;
};


export type QueryReceiptArgs = {
  where: WhereUniqueInput;
};

export type Flavor = {
  __typename?: 'Flavor';
  id: Scalars['ID'];
  name: Scalars['String'];
  image: Scalars['String'];
  stock: Scalars['Float'];
  stockPrice: Scalars['Float'];
  created: Scalars['DateTime'];
  updated: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
};


export type Option = {
  __typename?: 'Option';
  id: Scalars['ID'];
  name: Scalars['String'];
  image: Scalars['String'];
  stock: Scalars['Float'];
  price: Scalars['Float'];
  stockPrice: Scalars['Float'];
  created: Scalars['DateTime'];
  updated: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
};

export type Product = {
  __typename?: 'Product';
  id: Scalars['ID'];
  name: Scalars['String'];
  image: Scalars['String'];
  basePrice: Scalars['Float'];
  totalFlavor: Scalars['Float'];
  created: Scalars['DateTime'];
  updated: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  sizes: Array<Size>;
};

export type Size = {
  __typename?: 'Size';
  id: Scalars['ID'];
  name: Scalars['String'];
  price: Scalars['Float'];
  created: Scalars['DateTime'];
  updated: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  product?: Maybe<Product>;
};

export type Receipt = {
  __typename?: 'Receipt';
  id: Scalars['ID'];
  cash: Scalars['Float'];
  total: Scalars['Float'];
  created: Scalars['DateTime'];
  updated: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  user?: Maybe<User>;
  items?: Maybe<Array<ReceiptItem>>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  name: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
  isAdmin: Scalars['Boolean'];
  image: Scalars['String'];
  created: Scalars['DateTime'];
  updated: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  receipts?: Maybe<Array<Receipt>>;
};

export type ReceiptItem = {
  __typename?: 'ReceiptItem';
  id: Scalars['ID'];
  price: Scalars['Float'];
  quantity: Scalars['Float'];
  optionName: Scalars['String'];
  optionPrice: Scalars['Float'];
  sizeName: Scalars['String'];
  sizePrice: Scalars['Float'];
  flavors: Scalars['String'];
  created: Scalars['DateTime'];
  updated: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  receipt?: Maybe<Receipt>;
  product?: Maybe<Product>;
};

export type WhereUniqueInput = {
  id: Scalars['Float'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createFlavor: Flavor;
  deleteFlavor: Flavor;
  createOption: Option;
  deleteOption: Option;
  createProduct: Product;
  deleteProduct: Product;
  createReceipt: Receipt;
  createUser: User;
  deleteUser: User;
  login: User;
  updateUser: User;
};


export type MutationCreateFlavorArgs = {
  image: Scalars['Upload'];
  data: CreateFlavorInput;
};


export type MutationDeleteFlavorArgs = {
  where: WhereUniqueInput;
};


export type MutationCreateOptionArgs = {
  image: Scalars['Upload'];
  data: CreateOptionInput;
};


export type MutationDeleteOptionArgs = {
  where: WhereUniqueInput;
};


export type MutationCreateProductArgs = {
  image: Scalars['Upload'];
  data: CreateProductInput;
};


export type MutationDeleteProductArgs = {
  where: WhereUniqueInput;
};


export type MutationCreateReceiptArgs = {
  data: CreateReceiptInput;
};


export type MutationCreateUserArgs = {
  image: Scalars['Upload'];
  data: CreateUserInput;
};


export type MutationDeleteUserArgs = {
  where: WhereUniqueInput;
};


export type MutationLoginArgs = {
  data: LoginInput;
};


export type MutationUpdateUserArgs = {
  where: WhereUniqueInput;
  data: UpdateUserInput;
};


export type CreateFlavorInput = {
  name: Scalars['String'];
  stockPrice: Scalars['Float'];
};

export type CreateOptionInput = {
  name: Scalars['String'];
  stockPrice: Scalars['Float'];
  price: Scalars['Float'];
};

export type CreateProductInput = {
  name: Scalars['String'];
  basePrice: Scalars['Float'];
  totalFlavor: Scalars['Float'];
  sizes: Array<CreateSizeInput>;
};

export type CreateSizeInput = {
  name: Scalars['String'];
  price: Scalars['Float'];
};

export type CreateReceiptInput = {
  cash: Scalars['Float'];
  total: Scalars['Float'];
  items: Array<CreateReceiptItemInput>;
};

export type CreateReceiptItemInput = {
  productid: Scalars['Float'];
  price: Scalars['Float'];
  quantity: Scalars['Float'];
  optionName: Scalars['String'];
  optionPrice: Scalars['Float'];
  sizeName: Scalars['String'];
  sizePrice: Scalars['Float'];
  flavors: Scalars['String'];
};

export type CreateUserInput = {
  username: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  isAdmin: Scalars['Boolean'];
};

export type LoginInput = {
  username: Scalars['String'];
  password: Scalars['String'];
};

export type UpdateUserInput = {
  username: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  isAdmin: Scalars['Boolean'];
};

export type FlavorsQueryVariables = Exact<{ [key: string]: never; }>;


export type FlavorsQuery = (
  { __typename?: 'Query' }
  & { flavors?: Maybe<Array<(
    { __typename?: 'Flavor' }
    & Pick<Flavor, 'id' | 'name' | 'image'>
  )>> }
);

export type OptionsQueryVariables = Exact<{ [key: string]: never; }>;


export type OptionsQuery = (
  { __typename?: 'Query' }
  & { options?: Maybe<Array<(
    { __typename?: 'Option' }
    & Pick<Option, 'id' | 'name' | 'image' | 'price' | 'stock'>
  )>> }
);

export type ProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductsQuery = (
  { __typename?: 'Query' }
  & { products?: Maybe<Array<(
    { __typename?: 'Product' }
    & Pick<Product, 'id' | 'name' | 'image' | 'basePrice' | 'totalFlavor'>
    & { sizes: Array<(
      { __typename?: 'Size' }
      & Pick<Size, 'id' | 'name' | 'price'>
    )> }
  )>> }
);


export const FlavorsDocument = gql`
    query Flavors {
  flavors {
    id
    name
    image
  }
}
    `;

/**
 * __useFlavorsQuery__
 *
 * To run a query within a React component, call `useFlavorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFlavorsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFlavorsQuery({
 *   variables: {
 *   },
 * });
 */
export function useFlavorsQuery(baseOptions?: Apollo.QueryHookOptions<FlavorsQuery, FlavorsQueryVariables>) {
        return Apollo.useQuery<FlavorsQuery, FlavorsQueryVariables>(FlavorsDocument, baseOptions);
      }
export function useFlavorsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FlavorsQuery, FlavorsQueryVariables>) {
          return Apollo.useLazyQuery<FlavorsQuery, FlavorsQueryVariables>(FlavorsDocument, baseOptions);
        }
export type FlavorsQueryHookResult = ReturnType<typeof useFlavorsQuery>;
export type FlavorsLazyQueryHookResult = ReturnType<typeof useFlavorsLazyQuery>;
export type FlavorsQueryResult = Apollo.QueryResult<FlavorsQuery, FlavorsQueryVariables>;
export const OptionsDocument = gql`
    query Options {
  options {
    id
    name
    image
    price
    stock
  }
}
    `;

/**
 * __useOptionsQuery__
 *
 * To run a query within a React component, call `useOptionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useOptionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOptionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useOptionsQuery(baseOptions?: Apollo.QueryHookOptions<OptionsQuery, OptionsQueryVariables>) {
        return Apollo.useQuery<OptionsQuery, OptionsQueryVariables>(OptionsDocument, baseOptions);
      }
export function useOptionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OptionsQuery, OptionsQueryVariables>) {
          return Apollo.useLazyQuery<OptionsQuery, OptionsQueryVariables>(OptionsDocument, baseOptions);
        }
export type OptionsQueryHookResult = ReturnType<typeof useOptionsQuery>;
export type OptionsLazyQueryHookResult = ReturnType<typeof useOptionsLazyQuery>;
export type OptionsQueryResult = Apollo.QueryResult<OptionsQuery, OptionsQueryVariables>;
export const ProductsDocument = gql`
    query Products {
  products {
    id
    name
    image
    basePrice
    totalFlavor
    sizes {
      id
      name
      price
    }
  }
}
    `;

/**
 * __useProductsQuery__
 *
 * To run a query within a React component, call `useProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsQuery({
 *   variables: {
 *   },
 * });
 */
export function useProductsQuery(baseOptions?: Apollo.QueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
        return Apollo.useQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, baseOptions);
      }
export function useProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
          return Apollo.useLazyQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, baseOptions);
        }
export type ProductsQueryHookResult = ReturnType<typeof useProductsQuery>;
export type ProductsLazyQueryHookResult = ReturnType<typeof useProductsLazyQuery>;
export type ProductsQueryResult = Apollo.QueryResult<ProductsQuery, ProductsQueryVariables>;