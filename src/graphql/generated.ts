import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
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
};

export type AttModule = {
  __typename?: 'AttModule';
  id?: Maybe<Scalars['Float']>;
  name: Scalars['String'];
  personInCharge: Scalars['String'];
  phones: Scalars['String'];
  procedure_: Tramite;
};

export type Author = {
  __typename?: 'Author';
  books: Array<Book>;
  createdAt: Scalars['String'];
  id: Scalars['Float'];
  name: Scalars['String'];
};

export type AuthorBook = {
  id: Scalars['Float'];
  name: Scalars['String'];
};

export type AuthorInput = {
  name: Scalars['String'];
};

export type AuthorUpdateInput = {
  name?: InputMaybe<Scalars['String']>;
};

export type Book = {
  __typename?: 'Book';
  author: Author;
  createdAt: Scalars['String'];
  id: Scalars['Float'];
  quantity: Scalars['Int'];
  title: Scalars['String'];
};

export type BookInput = {
  quantity: Scalars['Float'];
  title: Scalars['String'];
};

export type BookUpdateInput = {
  quantity?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};

export type BooksAuthor = {
  id?: InputMaybe<Scalars['Int']>;
  quantity: Scalars['Float'];
  title: Scalars['String'];
};

export type DownloadableFormat = {
  __typename?: 'DownloadableFormat';
  description: Scalars['String'];
  document: Scalars['String'];
  id?: Maybe<Scalars['Float']>;
  name: Scalars['String'];
  procedure_: Tramite;
};

export type Login = {
  email: Scalars['String'];
  pass: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAuthor: Author;
  createBook: Book;
  createProduct: Product;
  createUser: User;
  deleteAuthor: Scalars['Boolean'];
  deleteBook: Scalars['Boolean'];
  deleteProduct: Scalars['Boolean'];
  deleteUser: Scalars['Boolean'];
  login: Scalars['String'];
  signup: Scalars['String'];
  updateAuthor: Scalars['Boolean'];
  updateBook: Scalars['Boolean'];
  updateProduct: Scalars['Boolean'];
  updateUser: Scalars['Boolean'];
};


export type MutationCreateAuthorArgs = {
  author: AuthorInput;
  booksAuthor: Array<BooksAuthor>;
};


export type MutationCreateBookArgs = {
  authorInput: AuthorBook;
  book: BookInput;
};


export type MutationCreateProductArgs = {
  variables: ProductInput;
};


export type MutationCreateUserArgs = {
  variables: UserInput;
};


export type MutationDeleteAuthorArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteBookArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteProductArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['Int'];
};


export type MutationLoginArgs = {
  logIn: Login;
};


export type MutationSignupArgs = {
  signUp: SignUp;
};


export type MutationUpdateAuthorArgs = {
  fields: AuthorUpdateInput;
  id: Scalars['Int'];
};


export type MutationUpdateBookArgs = {
  fields: BookUpdateInput;
  id: Scalars['Int'];
};


export type MutationUpdateProductArgs = {
  fields: ProductUpdateInput;
  id: Scalars['Int'];
};


export type MutationUpdateUserArgs = {
  fields: UserUpdateInput;
  id: Scalars['Int'];
};

export type Product = {
  __typename?: 'Product';
  createdAt: Scalars['String'];
  id?: Maybe<Scalars['Float']>;
  name: Scalars['String'];
  quantity: Scalars['Int'];
};

export type ProductInput = {
  name: Scalars['String'];
  quantity: Scalars['Float'];
};

export type ProductUpdateInput = {
  name?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  attModules: Array<AttModule>;
  authors: Array<Author>;
  books: Array<Book>;
  downFormats: Array<DownloadableFormat>;
  me: User;
  products: Array<Product>;
  requirements: Array<Requirement>;
  requisitosAds: Array<ReqAd>;
  tramitePreguntas: Array<TramitePregunta>;
  tramites: Array<Tramite>;
  users: Array<User>;
};


export type QueryMeArgs = {
  token: Scalars['String'];
};

export type ReqAd = {
  __typename?: 'ReqAd';
  activo: Scalars['Boolean'];
  descripcion: Scalars['String'];
  id?: Maybe<Scalars['Float']>;
  nombre: Scalars['String'];
  procedure_: Tramite;
};

export type Requirement = {
  __typename?: 'Requirement';
  active: Scalars['Boolean'];
  description: Scalars['String'];
  id?: Maybe<Scalars['Float']>;
  numberCopies: Scalars['Float'];
  original: Scalars['Boolean'];
  procedure_: Tramite;
  sample?: Maybe<Scalars['String']>;
};

export type SignUp = {
  email: Scalars['String'];
  pass: Scalars['String'];
  username: Scalars['String'];
};

export type Tramite = {
  __typename?: 'Tramite';
  active: Scalars['Boolean'];
  attModules: Array<AttModule>;
  benefit: Scalars['String'];
  description: Scalars['String'];
  documentObtained: Scalars['String'];
  downloadableFormats: Array<DownloadableFormat>;
  id?: Maybe<Scalars['Float']>;
  key: Scalars['String'];
  name: Scalars['String'];
  reqAds?: Maybe<Array<ReqAd>>;
  requirements?: Maybe<Array<Requirement>>;
  shortName: Scalars['String'];
  tramitePreguntas?: Maybe<Array<TramitePregunta>>;
};

export type TramitePregunta = {
  __typename?: 'TramitePregunta';
  activo: Scalars['Boolean'];
  id?: Maybe<Scalars['Float']>;
  pregunta: Scalars['String'];
  respuesta: Scalars['String'];
  tramite_: Tramite;
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['String'];
  email: Scalars['String'];
  id?: Maybe<Scalars['Float']>;
  pass: Scalars['String'];
  username: Scalars['String'];
};

export type UserInput = {
  email: Scalars['String'];
  pass: Scalars['String'];
  username: Scalars['String'];
};

export type UserUpdateInput = {
  email?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

export type BooksQueryVariables = Exact<{ [key: string]: never; }>;


export type BooksQuery = { __typename?: 'Query', books: Array<{ __typename?: 'Book', id: number, title: string }> };


export const BooksDocument = gql`
    query Books {
  books {
    id
    title
  }
}
    `;

export function useBooksQuery(options?: Omit<Urql.UseQueryArgs<BooksQueryVariables>, 'query'>) {
  return Urql.useQuery<BooksQuery>({ query: BooksDocument, ...options });
};