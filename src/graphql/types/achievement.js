import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString
} from 'graphql';

export const Achievement = new GraphQLObjectType({
  name: 'Achievement',
  description: 'An achievement object',
  fields: () => ({
    id: { type: GraphQLString },
    title: { type: GraphQLString },
  })
});

export const AchievementInput = new GraphQLInputObjectType({
  name: 'AchievementInput',
  fields: () => ({
    title: { type: GraphQLString },
  })
});