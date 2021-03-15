/* tslint:disable */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Book = {
  __typename?: 'Book';
  id: Scalars['Float'];
  title: Scalars['String'];
  subtitle: Scalars['String'];
  author: Scalars['String'];
  published?: Maybe<Scalars['String']>;
  publisher?: Maybe<Scalars['String']>;
  pages: Scalars['Int'];
  description: Scalars['String'];
  website: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  getBooks: Array<Maybe<Book>>;
  getBook?: Maybe<Book>;
};


export type QueryGetBooksArgs = {
  limit?: Maybe<Scalars['Int']>;
};


export type QueryGetBookArgs = {
  id?: Maybe<Scalars['Float']>;
};

export type GetBookQueryVariables = Exact<{
  bookId?: Maybe<Scalars['Float']>;
}>;


export type GetBookQuery = (
  { __typename?: 'Query' }
  & { getBook?: Maybe<(
    { __typename?: 'Book' }
    & Pick<Book, 'description' | 'pages' | 'website'>
  )> }
);

export type GetBooksQueryVariables = Exact<{
  limit?: Maybe<Scalars['Int']>;
}>;


export type GetBooksQuery = (
  { __typename?: 'Query' }
  & { getBooks: Array<Maybe<(
    { __typename?: 'Book' }
    & Pick<Book, 'id' | 'title' | 'subtitle' | 'author'>
  )>> }
);


export const GetBookDocument = gql`
    query getBook($bookId: Float) {
  getBook(id: $bookId) {
    description
    pages
    website
  }
}
    `;

/**
 * __useGetBookQuery__
 *
 * To run a query within a React component, call `useGetBookQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBookQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBookQuery({
 *   variables: {
 *      bookId: // value for 'bookId'
 *   },
 * });
 */
export function useGetBookQuery(baseOptions?: Apollo.QueryHookOptions<GetBookQuery, GetBookQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBookQuery, GetBookQueryVariables>(GetBookDocument, options);
      }
export function useGetBookLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBookQuery, GetBookQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBookQuery, GetBookQueryVariables>(GetBookDocument, options);
        }
export type GetBookQueryHookResult = ReturnType<typeof useGetBookQuery>;
export type GetBookLazyQueryHookResult = ReturnType<typeof useGetBookLazyQuery>;
export type GetBookQueryResult = Apollo.QueryResult<GetBookQuery, GetBookQueryVariables>;
export const GetBooksDocument = gql`
    query getBooks($limit: Int) {
  getBooks(limit: $limit) {
    id
    title
    subtitle
    author
  }
}
    `;

/**
 * __useGetBooksQuery__
 *
 * To run a query within a React component, call `useGetBooksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBooksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBooksQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useGetBooksQuery(baseOptions?: Apollo.QueryHookOptions<GetBooksQuery, GetBooksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBooksQuery, GetBooksQueryVariables>(GetBooksDocument, options);
      }
export function useGetBooksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBooksQuery, GetBooksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBooksQuery, GetBooksQueryVariables>(GetBooksDocument, options);
        }
export type GetBooksQueryHookResult = ReturnType<typeof useGetBooksQuery>;
export type GetBooksLazyQueryHookResult = ReturnType<typeof useGetBooksLazyQuery>;
export type GetBooksQueryResult = Apollo.QueryResult<GetBooksQuery, GetBooksQueryVariables>;