
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
// import { InMemoryCache } from 'apollo-cache-inmemory';
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});
const httpLink = createHttpLink({
  uri: '/graphql'
});


const client = new ApolloClient({
  link: authLink.concat(httpLink)
});



export default {
    getAllDocuments : function (){
     return client.query({
        query: gql`
          query  {
            allDocuments{
              id
              text
              title
            }
          }
        `
      })
  
    },
    addNewDocument : function (){
      return client.query({
        mutation: gql`
        mutation {
          createDocument(title: String!
            text: String!
            ): Document
        }
        `
      })
    }
}