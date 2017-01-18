import fetch from 'node-fetch';

import {authorType} from './authorType';
import {categoryType} from './categoryType';

import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLFloat
} from 'graphql';

export const bookType = new GraphQLObjectType({
    name: 'Book',
    description: 'Our book type',
    fields: () => ({
        id: {
            type: GraphQLID,
            description: 'The ID of the book'
        },
        title: {
            type: GraphQLString,
            description: 'The title of the book'
        },
        category: {
            type: categoryType,
            description: 'The category of the book'
        },
        price: {
            type: GraphQLFloat,
            description: 'The price of the book'
        },
        author: {
            type: authorType,
            description: 'The author of the book',
            resolve: ({authorId}, _, {baseUrl}) => fetch(`${baseUrl}/authors/${authorId}`)
                .then(res => res.json())
        }
    })
});
