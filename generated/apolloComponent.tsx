import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
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
  totalReceipt?: Maybe<Scalars['Int']>;
  me: Auth;
};


export type QueryReceiptArgs = {
  where: WhereUniqueInput;
};


export type QueryReceiptsArgs = {
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
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
  sizeName?: Maybe<Scalars['String']>;
  sizePrice?: Maybe<Scalars['Float']>;
  flavors: Scalars['String'];
  created: Scalars['DateTime'];
  updated: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  receipt?: Maybe<Receipt>;
  product?: Maybe<Product>;
};

export type WhereUniqueInput = {
  id: Scalars['String'];
};

export type Auth = {
  __typename?: 'Auth';
  id: Scalars['Float'];
  name: Scalars['String'];
  image: Scalars['String'];
  isLoggedIn: Scalars['Boolean'];
  isAdmin: Scalars['Boolean'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createFlavor: Flavor;
  deleteFlavor: Flavor;
  updateStockFlavor: Flavor;
  createOption: Option;
  deleteOption: Option;
  updateStockOption: Option;
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


export type MutationUpdateStockFlavorArgs = {
  where: WhereUniqueInput;
  set: SetStockInput;
};


export type MutationCreateOptionArgs = {
  image: Scalars['Upload'];
  data: CreateOptionInput;
};


export type MutationDeleteOptionArgs = {
  where: WhereUniqueInput;
};


export type MutationUpdateStockOptionArgs = {
  where: WhereUniqueInput;
  set: SetStockInput;
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

export type SetStockInput = {
  stock: Scalars['Float'];
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
  productid: Scalars['String'];
  price: Scalars['Float'];
  quantity: Scalars['Float'];
  optionName: Scalars['String'];
  optionPrice: Scalars['Float'];
  sizeName?: Maybe<Scalars['String']>;
  sizePrice?: Maybe<Scalars['Float']>;
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

export type CreateFlavorMutationVariables = Exact<{
  image: Scalars['Upload'];
  data: CreateFlavorInput;
}>;


export type CreateFlavorMutation = (
  { __typename?: 'Mutation' }
  & { createFlavor: (
    { __typename?: 'Flavor' }
    & Pick<Flavor, 'id' | 'name'>
  ) }
);

export type DeleteFlavorMutationVariables = Exact<{
  where: WhereUniqueInput;
}>;


export type DeleteFlavorMutation = (
  { __typename?: 'Mutation' }
  & { deleteFlavor: (
    { __typename?: 'Flavor' }
    & Pick<Flavor, 'id'>
  ) }
);

export type UpdateStockFlavorMutationVariables = Exact<{
  set: SetStockInput;
  where: WhereUniqueInput;
}>;


export type UpdateStockFlavorMutation = (
  { __typename?: 'Mutation' }
  & { updateStockFlavor: (
    { __typename?: 'Flavor' }
    & Pick<Flavor, 'id' | 'stock'>
  ) }
);

export type FlavorsQueryVariables = Exact<{ [key: string]: never; }>;


export type FlavorsQuery = (
  { __typename?: 'Query' }
  & { flavors?: Maybe<Array<(
    { __typename?: 'Flavor' }
    & Pick<Flavor, 'id' | 'name' | 'image' | 'stock' | 'stockPrice'>
  )>> }
);

export type CreateOptionMutationVariables = Exact<{
  data: CreateOptionInput;
  image: Scalars['Upload'];
}>;


export type CreateOptionMutation = (
  { __typename?: 'Mutation' }
  & { createOption: (
    { __typename?: 'Option' }
    & Pick<Option, 'id' | 'name'>
  ) }
);

export type DeleteOptionMutationVariables = Exact<{
  where: WhereUniqueInput;
}>;


export type DeleteOptionMutation = (
  { __typename?: 'Mutation' }
  & { deleteOption: (
    { __typename?: 'Option' }
    & Pick<Option, 'id'>
  ) }
);

export type UpdateStockOptionMutationVariables = Exact<{
  set: SetStockInput;
  where: WhereUniqueInput;
}>;


export type UpdateStockOptionMutation = (
  { __typename?: 'Mutation' }
  & { updateStockOption: (
    { __typename?: 'Option' }
    & Pick<Option, 'id' | 'stock'>
  ) }
);

export type OptionsQueryVariables = Exact<{ [key: string]: never; }>;


export type OptionsQuery = (
  { __typename?: 'Query' }
  & { options?: Maybe<Array<(
    { __typename?: 'Option' }
    & Pick<Option, 'id' | 'name' | 'image' | 'price' | 'stock' | 'stockPrice'>
  )>> }
);

export type CreateProductMutationVariables = Exact<{
  data: CreateProductInput;
  image: Scalars['Upload'];
}>;


export type CreateProductMutation = (
  { __typename?: 'Mutation' }
  & { createProduct: (
    { __typename?: 'Product' }
    & Pick<Product, 'id' | 'name'>
  ) }
);

export type DeleteProductMutationVariables = Exact<{
  where: WhereUniqueInput;
}>;


export type DeleteProductMutation = (
  { __typename?: 'Mutation' }
  & { deleteProduct: (
    { __typename?: 'Product' }
    & Pick<Product, 'id'>
  ) }
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

export type CreateReceiptMutationVariables = Exact<{
  data: CreateReceiptInput;
}>;


export type CreateReceiptMutation = (
  { __typename?: 'Mutation' }
  & { createReceipt: (
    { __typename?: 'Receipt' }
    & Pick<Receipt, 'id' | 'total' | 'cash'>
  ) }
);

export type ReceiptQueryVariables = Exact<{
  where: WhereUniqueInput;
}>;


export type ReceiptQuery = (
  { __typename?: 'Query' }
  & { receipt?: Maybe<(
    { __typename?: 'Receipt' }
    & Pick<Receipt, 'id' | 'cash' | 'total' | 'created'>
    & { items?: Maybe<Array<(
      { __typename?: 'ReceiptItem' }
      & Pick<ReceiptItem, 'id' | 'price' | 'quantity' | 'sizeName' | 'sizePrice' | 'optionName' | 'optionPrice' | 'flavors'>
      & { product?: Maybe<(
        { __typename?: 'Product' }
        & Pick<Product, 'id' | 'name' | 'image'>
      )> }
    )>> }
  )> }
);

export type ReceiptsQueryVariables = Exact<{
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
}>;


export type ReceiptsQuery = (
  { __typename?: 'Query' }
  & { receipts?: Maybe<Array<(
    { __typename?: 'Receipt' }
    & Pick<Receipt, 'id' | 'cash' | 'total' | 'created'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'image' | 'name'>
    )> }
  )>> }
);

export type TotalReceiptQueryVariables = Exact<{ [key: string]: never; }>;


export type TotalReceiptQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'totalReceipt'>
);

export type CreateUserMutationVariables = Exact<{
  data: CreateUserInput;
  image: Scalars['Upload'];
}>;


export type CreateUserMutation = (
  { __typename?: 'Mutation' }
  & { createUser: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name' | 'image'>
  ) }
);

export type DeleteUserMutationVariables = Exact<{
  where: WhereUniqueInput;
}>;


export type DeleteUserMutation = (
  { __typename?: 'Mutation' }
  & { deleteUser: (
    { __typename?: 'User' }
    & Pick<User, 'id'>
  ) }
);

export type LoginMutationVariables = Exact<{
  data: LoginInput;
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name' | 'image'>
  ) }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me: (
    { __typename?: 'Auth' }
    & Pick<Auth, 'id' | 'isLoggedIn' | 'name' | 'image' | 'isAdmin'>
  ) }
);

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = (
  { __typename?: 'Query' }
  & { users?: Maybe<Array<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name' | 'image' | 'isAdmin'>
  )>> }
);


export const CreateFlavorDocument = gql`
    mutation CreateFlavor($image: Upload!, $data: CreateFlavorInput!) {
  createFlavor(data: $data, image: $image) {
    id
    name
  }
}
    `;

export function useCreateFlavorMutation() {
  return Urql.useMutation<CreateFlavorMutation, CreateFlavorMutationVariables>(CreateFlavorDocument);
};
export const DeleteFlavorDocument = gql`
    mutation DeleteFlavor($where: WhereUniqueInput!) {
  deleteFlavor(where: $where) {
    id
  }
}
    `;

export function useDeleteFlavorMutation() {
  return Urql.useMutation<DeleteFlavorMutation, DeleteFlavorMutationVariables>(DeleteFlavorDocument);
};
export const UpdateStockFlavorDocument = gql`
    mutation UpdateStockFlavor($set: SetStockInput!, $where: WhereUniqueInput!) {
  updateStockFlavor(set: $set, where: $where) {
    id
    stock
  }
}
    `;

export function useUpdateStockFlavorMutation() {
  return Urql.useMutation<UpdateStockFlavorMutation, UpdateStockFlavorMutationVariables>(UpdateStockFlavorDocument);
};
export const FlavorsDocument = gql`
    query Flavors {
  flavors {
    id
    name
    image
    stock
    stockPrice
  }
}
    `;

export function useFlavorsQuery(options: Omit<Urql.UseQueryArgs<FlavorsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<FlavorsQuery>({ query: FlavorsDocument, ...options });
};
export const CreateOptionDocument = gql`
    mutation CreateOption($data: CreateOptionInput!, $image: Upload!) {
  createOption(data: $data, image: $image) {
    id
    name
  }
}
    `;

export function useCreateOptionMutation() {
  return Urql.useMutation<CreateOptionMutation, CreateOptionMutationVariables>(CreateOptionDocument);
};
export const DeleteOptionDocument = gql`
    mutation DeleteOption($where: WhereUniqueInput!) {
  deleteOption(where: $where) {
    id
  }
}
    `;

export function useDeleteOptionMutation() {
  return Urql.useMutation<DeleteOptionMutation, DeleteOptionMutationVariables>(DeleteOptionDocument);
};
export const UpdateStockOptionDocument = gql`
    mutation UpdateStockOption($set: SetStockInput!, $where: WhereUniqueInput!) {
  updateStockOption(set: $set, where: $where) {
    id
    stock
  }
}
    `;

export function useUpdateStockOptionMutation() {
  return Urql.useMutation<UpdateStockOptionMutation, UpdateStockOptionMutationVariables>(UpdateStockOptionDocument);
};
export const OptionsDocument = gql`
    query Options {
  options {
    id
    name
    image
    price
    stock
    stockPrice
  }
}
    `;

export function useOptionsQuery(options: Omit<Urql.UseQueryArgs<OptionsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<OptionsQuery>({ query: OptionsDocument, ...options });
};
export const CreateProductDocument = gql`
    mutation CreateProduct($data: CreateProductInput!, $image: Upload!) {
  createProduct(data: $data, image: $image) {
    id
    name
  }
}
    `;

export function useCreateProductMutation() {
  return Urql.useMutation<CreateProductMutation, CreateProductMutationVariables>(CreateProductDocument);
};
export const DeleteProductDocument = gql`
    mutation DeleteProduct($where: WhereUniqueInput!) {
  deleteProduct(where: $where) {
    id
  }
}
    `;

export function useDeleteProductMutation() {
  return Urql.useMutation<DeleteProductMutation, DeleteProductMutationVariables>(DeleteProductDocument);
};
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

export function useProductsQuery(options: Omit<Urql.UseQueryArgs<ProductsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<ProductsQuery>({ query: ProductsDocument, ...options });
};
export const CreateReceiptDocument = gql`
    mutation CreateReceipt($data: CreateReceiptInput!) {
  createReceipt(data: $data) {
    id
    total
    cash
  }
}
    `;

export function useCreateReceiptMutation() {
  return Urql.useMutation<CreateReceiptMutation, CreateReceiptMutationVariables>(CreateReceiptDocument);
};
export const ReceiptDocument = gql`
    query Receipt($where: WhereUniqueInput!) {
  receipt(where: $where) {
    id
    cash
    total
    created
    items {
      id
      product {
        id
        name
        image
      }
      price
      quantity
      sizeName
      sizePrice
      optionName
      optionPrice
      flavors
    }
  }
}
    `;

export function useReceiptQuery(options: Omit<Urql.UseQueryArgs<ReceiptQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<ReceiptQuery>({ query: ReceiptDocument, ...options });
};
export const ReceiptsDocument = gql`
    query Receipts($skip: Int, $take: Int) {
  receipts(skip: $skip, take: $take) {
    id
    cash
    total
    created
    user {
      image
      name
    }
  }
}
    `;

export function useReceiptsQuery(options: Omit<Urql.UseQueryArgs<ReceiptsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<ReceiptsQuery>({ query: ReceiptsDocument, ...options });
};
export const TotalReceiptDocument = gql`
    query TotalReceipt {
  totalReceipt
}
    `;

export function useTotalReceiptQuery(options: Omit<Urql.UseQueryArgs<TotalReceiptQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<TotalReceiptQuery>({ query: TotalReceiptDocument, ...options });
};
export const CreateUserDocument = gql`
    mutation CreateUser($data: CreateUserInput!, $image: Upload!) {
  createUser(data: $data, image: $image) {
    id
    name
    image
  }
}
    `;

export function useCreateUserMutation() {
  return Urql.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument);
};
export const DeleteUserDocument = gql`
    mutation DeleteUser($where: WhereUniqueInput!) {
  deleteUser(where: $where) {
    id
  }
}
    `;

export function useDeleteUserMutation() {
  return Urql.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(DeleteUserDocument);
};
export const LoginDocument = gql`
    mutation Login($data: LoginInput!) {
  login(data: $data) {
    id
    name
    image
  }
}
    `;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
};
export const MeDocument = gql`
    query Me {
  me {
    id
    isLoggedIn
    name
    image
    isAdmin
  }
}
    `;

export function useMeQuery(options: Omit<Urql.UseQueryArgs<MeQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<MeQuery>({ query: MeDocument, ...options });
};
export const UsersDocument = gql`
    query Users {
  users {
    id
    name
    image
    isAdmin
  }
}
    `;

export function useUsersQuery(options: Omit<Urql.UseQueryArgs<UsersQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<UsersQuery>({ query: UsersDocument, ...options });
};