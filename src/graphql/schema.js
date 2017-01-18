import {GraphQLSchema} from 'graphql';
import {query} from './types/queryType';
import {mutation} from './types/mutationType';


export const schema = new GraphQLSchema({ query, mutation });
