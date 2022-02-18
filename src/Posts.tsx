import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';

const postsQueryDocument = gql`
  query Books {
    books {
        id
        title
        
    }
  }
`


const Posts = () => {
  const { data } = useCustomFetchGraphQLData(postsQueryDocument);
}

function useCustomFetchGraphQLData(postsQueryDocument: DocumentNode): { data: any; } {
  throw new Error('Function not implemented.');
}
