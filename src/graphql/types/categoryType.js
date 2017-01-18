import {GraphQLEnumType} from 'graphql';

export const categoryType = new GraphQLEnumType({
    name: 'Category',
    description: 'List of category options',
    values: {
        Romance: {value: 'Romance', description: 'Romance novels'},
        Historical: {value: 'Historical', description: 'Non-fiction history'},
        Inspirational: {value: 'Inspirational', description: 'much wow'},
        Humor: {value: 'Humor', description: 'haha stuff'},
        Mystery: {value: 'Mystery', description: 'question stuff'}
    }
});
