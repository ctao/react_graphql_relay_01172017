import fetch from 'node-fetch';

import {bookType} from './bookType';

import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLList
} from 'graphql';

export const authorType = new GraphQLObjectType({
    name: 'Author',
    description: 'Our author type',
    fields: () => ({
        id: {
            type: GraphQLID,
            description: 'The ID of the author'
        },
        firstName: {
            type: GraphQLString,
            description: 'The first name of the author'
        },
        lastName: {
            type: GraphQLString,
            description: 'The last name of the author'
        },
        fullName: {
            type: GraphQLString,
            description: 'The full name of the author',
            resolve: ({firstName, lastName}) => `${firstName} ${lastName}`
        },
        books: {
            type: new GraphQLList(bookType),
            description: 'The books of the author',
            resolve: ({id: authorId}, _, {baseUrl}) => fetch(`${baseUrl}/books?authorId=${authorId}`)
                .then(res => res.json())
        }
    })
});
