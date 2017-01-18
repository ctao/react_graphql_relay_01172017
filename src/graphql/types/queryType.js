import fetch from 'node-fetch';

import {bookType} from './bookType';
import {authorType} from './authorType';

import {
    GraphQLID,
    GraphQLObjectType,
    GraphQLString,
    GraphQLList
} from 'graphql';

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
            resolve: (_, _2, {baseUrl}) => fetch(`${baseUrl}/books`)
                .then(res => res.json())
        },
        book: {
            type: bookType,
            description: 'Get a single book',
            args: {
                id: {
                    type: GraphQLID,
                    description: 'The ID of the book I want'
                }
            },
            resolve: (_, {id: bookId}, {baseUrl}) => fetch(`${baseUrl}/books/${bookId}`)
                .then(res => res.json())
        },
        authors: {
            type: new GraphQLList(authorType),
            description: 'List of authors',
            resolve: (_, _2, {baseUrl}) => fetch(`${baseUrl}/authors`)
                .then(res => res.json())
        },
        author: {
            type: authorType,
            description: 'Get a single author',
            args: {
                id: {
                    type: GraphQLID,
                    description: 'The ID of the author I want'
                }
            },
            resolve: (_, {id: authorId}, {baseUrl}) => fetch(`${baseUrl}/authors/${authorId}`)
                .then(res => res.json())
        }
    })
});
