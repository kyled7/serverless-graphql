import { GraphQLSchema } from 'graphql';
import { queryType, mutationType } from './types';
// import MutationType from './types/mutation';

export default new GraphQLSchema({
  query: queryType,
  mutation: mutationType,
});
