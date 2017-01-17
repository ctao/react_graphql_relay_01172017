import fetch from 'node-fetch';

import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLFloat,
    GraphQLList
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
            type: GraphQLString,
            description: 'The category of the book'
        },
        price: {
            type: GraphQLFloat,
            description: 'The price of the book'
        }
    })
});

export const query = new GraphQLObjectType({
    name: 'Query',
    description: 'Our query type',
    fields: () => ({
        message: {
            type: GraphQLString,
            description: 'Our message of the day!',
            resolve: () => 'Have a wonderful day!'
        },
        books: {
            type: new GraphQLList(bookType),
            description: 'List of books',
            resolve: () => fetch('http://localhost:3010/books')
                .then(res => res.json())
        }
    })
});

export const schema = new GraphQLSchema({ query });
