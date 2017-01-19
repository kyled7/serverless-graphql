import {
  GraphQLObjectType,
  GraphQLList
} from 'graphql';
import { Achievement, AchievementInput } from './achievement';

const queryType = new GraphQLObjectType({
  name: 'Query',
  description: 'Query root',
  fields: () => ({
    achievements: { type: new GraphQLList(Achievement) }
  }),
});

const mutationType = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Mutation root',
  fields: () => ({
    addAchievement: {
      type: Achievement,
      description: 'Add new achievement',
      args: {
        achievement: { type: AchievementInput }
      }
    }
  }),
});

export {queryType, mutationType}