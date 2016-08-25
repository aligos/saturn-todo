import ApolloClient from 'apollo-client';
import gql from 'graphql-tag';

let client = new ApolloClient();

export default {
    toggleTodo: ({todoId}) => {
      console.log('set checked status for', todoId);
      return client.mutate({
        mutation: gql`
          mutation {
            toggle(id: "${todoId}"){
              id
            }
        }`,
      });
    }
};