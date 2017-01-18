import fetch from 'node-fetch';

import {
    GraphQLObjectType,
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLFloat,
    GraphQLID
} from 'graphql';

import {bookType} from './bookType';

export const insertBookType = new GraphQLInputObjectType({
    name: 'InsertBookType',
    description: 'A type for inserting a book',
    fields: () => ({
        title: {
            type: GraphQLString
        },
        category: {
            type: GraphQLString
        },
        price: {
            type: GraphQLFloat
        },
        authorId: {
            type: GraphQLID
        },
    })
});

export const mutation = new GraphQLObjectType({
    name: 'Mutation',
    description: 'Our mutation type',

    fields: () => ({
        insertBook: {
            type: bookType,
            description: 'Insert a book',
            args: {
                book: {
                    type: insertBookType,
                    description: 'The book to insert'
                }
            },
            resolve: (_, {book}, {baseUrl}) => {
                return fetch(`${baseUrl}/books`, {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(book)
                })
                .then(res => res.json());
            }
        },
        deleteBook: {
            type: GraphQLID,
            description: 'Delete a book',
            args: {
                bookId: {
                    type: GraphQLID,
                    description: 'The ID of the book to delete'
                }
            },
            resolve: (_, {bookId}, {baseUrl}) => {
                return fetch(`${baseUrl}/books/${bookId}`, {
                    method: 'DELETE',
                    headers: {'Content-Type': 'application/json'}
                })
                .then(() => bookId);
            }
        }
    })
});
